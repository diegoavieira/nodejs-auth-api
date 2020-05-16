import jwtAuthz from 'express-jwt-authz';

const verifyPermission = permissions => {
  return jwtAuthz([permissions], {
    customScopeKey: 'permissions',
    checkAllScopes: true
  });
};

export default verifyPermission;
