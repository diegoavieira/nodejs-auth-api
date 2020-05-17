import { auth } from 'express-openid-connect';
import { env } from './environment';

const openidConnect = [
  auth({
    required: false,
    auth0Logout: true,
    appSession: {
      secret: env.session_secret
    },
    baseURL: env.base_url,
    clientID: env.auth0_client_id,
    issuerBaseURL: `https://${env.auth0_domain}`,
    clientSecret: env.auth0_client_secret,
    authorizationParams: {
      response_type: 'code',
      audience: env.auth0_audience
    },
    handleCallback: async (req, res, next) => {
      req.appSession.openidTokens = req.openidTokens;
      next();
    }
  }),
  (req, res, next) => {
    if (req.isAuthenticated()) {
      req.headers.authorization = `Bearer ${req.appSession.openidTokens.access_token}`;
    }
    next();
  }
];

export default openidConnect;
