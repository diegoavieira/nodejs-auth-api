import jwt from 'jsonwebtoken';
import { userModel } from '../models';
import { env } from '../../config/environment';

const authController = {};
const tokenList = {};

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
      return res
        .status(401)
        .json({ error: 'Invalid password or username not exist' });
    }

    const token = jwt.sign({ id: user.id }, env.tokenSecreat, {
      expiresIn: env.tokenLive
    });

    const refreshToken = jwt.sign({ id: user.id }, env.refreshTokenSecreat, {
      expiresIn: env.refreshTokenLive
    });

    const response = {
      token: token,
      refreshToken: refreshToken
    };

    tokenList[refreshToken] = response;

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { authController };
