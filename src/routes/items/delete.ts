// Imports
// ========================================================
import { Router, Request, Response } from 'express';
import { NotFound } from '../../utils/errorHandlers';
import { buildSuccessResponse } from '../../utils/helpers';
import { DELETE } from './queries';

// Config
// ========================================================
const router = Router();

// Route
// ========================================================
const DeleteItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await DELETE(id);

  return res.json(buildSuccessResponse(data));
};

// Middlewares
// ========================================================
router.delete('/:id', DeleteItem);

// Exports
// ========================================================
export default router;
