import jwt from 'jsonwebtoken';
import { userModel } from '../models';
import { env } from '../../config/environment';

const authController = {};

authController.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ where: { username } });

    const checkPass = user
      ? await userModel.prototype.checkPassword(user.password, password)
      : null;

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

    const refresh_token = jwt.sign(payload, env.refreshTokenSecreat, {
      expiresIn: env.refreshTokenLive
    });

    return res.status(200).json({ access_token, refresh_token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

authController.refresh = async (req, res) => {
  try {
    const { refresh_token } = req.body;

    const user = jwt.verify(refresh_token, env.refreshTokenSecreat);

    const payload = {
      id: user.id,
      username: user.username
    };

    const new_access_token = jwt.sign(payload, env.tokenSecreat, {
      expiresIn: env.tokenLive
    });

    const new_refresh_token = jwt.sign(payload, env.refreshTokenSecreat, {
      expiresIn: env.refreshTokenLive
    });

    return res.status(200).json({
      access_token: new_access_token,
      refresh_token: new_refresh_token
    });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: error.message });
    }

    return res.status(500).json({ error: error.message });
  }
};

export { authController };
