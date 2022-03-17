// Imports
// ========================================================
import { Router } from 'express';
import ListItems from './list';
import ReadItem from './read';

// Config
// ========================================================
const router = Router();

// Routes
// ========================================================
router.use(ListItems);
router.use(ReadItem);

// Exports
// ========================================================
export default router;
