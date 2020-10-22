import expressJwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import config from '../../config';

const jwtCheck = () => {
  return expressJwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `${config.env.domain}/.well-known/jwks.json`
    }),
    audience: config.env.audience,
    issuer: `${config.env.domain}/`,
    algorithms: ['RS256']
  });
};

export { jwtCheck };
