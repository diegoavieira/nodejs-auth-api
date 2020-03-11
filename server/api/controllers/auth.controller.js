import jwt from 'jsonwebtoken';
import { userModel } from '../models';
import { env } from '../../config/environment';

const authController = {};
const refreshTokens = {};

authController.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: 'Username and password are required' });
    }

    const user = await userModel.findOne({ where: { username } });

    let checkPass = null;

    if (user) {
      checkPass = await userModel.prototype.checkPassword(
        user.password,
        password
      );
    }

    if (!user || !checkPass) {
      return res.status(401).json({ error: 'Username or password incorrect' });
    }

    const payload = {
      id: user.id,
      username: user.username
    };

    const access_token = jwt.sign(payload, env.tokenSecreat, {
      expiresIn: env.tokenLive
    });

    const refresh_token = jwt.sign(
      { type: 'refresh' },
      env.refreshTokenSecreat,
      {
        expiresIn: env.refreshTokenLive
      }
    );

    refreshTokens[refresh_token] = payload;

    return res.status(200).json({ access_token, refresh_token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

authController.refresh = async (req, res) => {
  try {
    const { refresh_token } = req.body;

    if (!refresh_token) {
      return res.status(400).json({ error: 'Refresh token is required' });
    }

    const verifyRefreshToken = jwt.verify(
      refresh_token,
      env.refreshTokenSecreat
    );

    if (verifyRefreshToken) {
      if (refresh_token in refreshTokens) {
        const payload = refreshTokens[refresh_token];

        const access_token = jwt.sign(payload, env.tokenSecreat, {
          expiresIn: env.tokenLive
        });

        return res.status(200).json({ access_token, refresh_token });
      }
    }
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(403).json({ error: error.message });
    }

    return res.status(400).json({ error: error.message });
  }
};

export { authController };
