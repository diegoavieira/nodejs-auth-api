import axios from 'axios';
import qs from 'querystring';
import { env } from '../../../config/environment';

const authController = {};

authController.auth = async (req, res) => {
  try {
    const { username, password } = req.body;

    const url = `${env.domain}/oauth/token`;

    const params = {
      username,
      password,
      client_id: env.client_id,
      audience: env.audience,
      grant_type: 'password'
    };

    const { data } = await axios.post(url, qs.stringify(params), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { authController };
