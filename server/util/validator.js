import { validationResult } from 'express-validator';

const validator = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  return res.status(422).json({
    error: errors.array().map(err => ({ [err.param]: err.msg }))
  });
};

export default validator;
