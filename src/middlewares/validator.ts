// Imports
// ========================================================
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { buildErrorResponse } from '../utils/helpers';

// Middleware
// ========================================================
const Validator = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(buildErrorResponse(errors.array()));
  }
  next();
};

// Exports
// ========================================================
export default Validator;
