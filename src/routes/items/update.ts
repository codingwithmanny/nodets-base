// Imports
// ========================================================
import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import Validator from '../../middlewares/validator';
import { buildSuccessResponse } from '../../utils/helpers';
import { UPDATE } from './queries';

// Config
// ========================================================
const router = Router();

// Route
// ========================================================
const UpdateItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await UPDATE(id, req.body);
  return res.json(buildSuccessResponse(data));
};

// Middlewares
// ========================================================
router.put('/:id', body('name').optional().isString(), Validator, UpdateItem);

// Exports
// ========================================================
export default router;
