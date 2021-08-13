// Imports
// ========================================================
import { Router, Request, Response } from 'express';
import { buildSuccessResponse } from '../../utils/helpers';

// Config
// ========================================================
const router = Router();

// Route
// ========================================================
const ListItems = async (req: Request, res: Response) => {
  return res.json(buildSuccessResponse('hello'));
};

// Middlewares
// ========================================================
router.get('/', ListItems);

// Exports
// ========================================================
export default router;
