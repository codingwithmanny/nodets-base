// Imports
// ========================================================
import { Router, Request, Response } from 'express';
import { buildSuccessResponse } from '../../utils/helpers';
import { READ } from './queries';

// Config
// ========================================================
const router = Router();

// Route
// ========================================================
const ReadItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await READ(id);

  return res.json(buildSuccessResponse(data));
};

// Middlewares
// ========================================================
router.get('/:id', ReadItem);

// Exports
// ========================================================
export default router;
