import axios from 'axios';
import qs from 'querystring';
import { env } from '../../config/environment';

const authController = {};

authController.auth = async (req, res) => {
  try {
    const { username, password } = req.body;

    const url = `${env.auth_url}/realms/${env.realm}/protocol/openid-connect/token`;

    const params = {
      client_id: env.client_id,
      username,
      password,
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
