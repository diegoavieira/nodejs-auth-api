import jwt from 'jsonwebtoken';
import randToken from 'rand-token';
import { userModel } from '../models';
import { env } from '../../config/environment';

const authController = {};
const refreshTokens = {};

authController.login = async (req, res) => {
  try {
    const { username, password } = req.body;
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
      username: user.username,
      role: 'admin'
    };

    const access_token = jwt.sign(payload, env.tokenSecreat, {
      expiresIn: env.tokenLive
    });

    const refresh_token = randToken.uid(256);

    refreshTokens[refresh_token] = payload;

    return res.status(200).json({ access_token, refresh_token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

authController.refresh = async (req, res) => {
  try {
    const { refresh_token } = req.body;

    if (refresh_token in refreshTokens) {
      const payload = refreshTokens[refresh_token];
      const access_token = jwt.sign(payload, env.tokenSecreat, {
        expiresIn: env.tokenLive
      });

      return res.status(200).json({ access_token });
    }

    return res.status(403).json({ error: 'Refresh token expired' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { authController };
