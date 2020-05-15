import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import { env } from '../config/environment';

const verifyAuth = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${env.auth0_domain}/.well-known/jwks.json`
  }),
  audience: env.auth0_audience,
  issuer: `https://${env.auth0_domain}/`,
  algorithms: ['RS256']
});

export default verifyAuth;
