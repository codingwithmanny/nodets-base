// Imports
// ========================================================
import { Router, Request, Response } from 'express';
import { NotFound } from '../../utils/errorHandlers';
import { buildSuccessResponse } from '../../utils/helpers';
import dictionary from '../../utils/dictionary.json';

// Config
// ========================================================
const router = Router();

// Route
// ========================================================
const ReadItem = async (req: Request, res: Response) => {
  const { id } = req.params;

  throw new NotFound(dictionary.ITEMS.ERROR.NOT_FOUND);

  return res.json(buildSuccessResponse('item found'));
};

// Middlewares
// ========================================================
router.get('/:id', ReadItem);

// Exports
// ========================================================
export default router;
