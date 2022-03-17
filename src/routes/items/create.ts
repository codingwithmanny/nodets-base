// Imports
// ========================================================
import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import Validator from '../../middlewares/validator';
import { buildSuccessResponse } from '../../utils/helpers';
import { CREATE } from './queries';

// Config
// ========================================================
const router = Router();

// Route
// ========================================================
const CreateItem = async (req: Request, res: Response) => {
  const data = await CREATE(req.body);
  return res.json(buildSuccessResponse(data));
};

// Middlewares
// ========================================================
router.post('/', body('name').isString(), Validator, CreateItem);

// Exports
// ========================================================
export default router;
