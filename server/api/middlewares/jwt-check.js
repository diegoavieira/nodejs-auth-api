import expressJwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import { env } from '../../config';

const jwtCheck = () => {
  return expressJwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `${env.domain}/.well-known/jwks.json`
    }),
    audience: env.audience,
    issuer: `${env.domain}/`,
    algorithms: ['RS256']
  });
};

export { jwtCheck };
