import jwt from 'jsonwebtoken';
import { env } from '../config/environment';

const verifyAuth = async (req, res, next) => {
  try {
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(422).send({ error: 'No authorization header' });
    }

    const user = await jwt.verify(
      token.replace('Bearer ', ''),
      env.tokenSecret
    );

    if (user) {
      return next();
    }
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: error.message });
    }

    return res.status(500).json({ error: error.message });
  }
};

export default verifyAuth;
