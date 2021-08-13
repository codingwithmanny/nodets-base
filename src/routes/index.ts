// Imports
// ========================================================
import { Router } from 'express';
import Items from './items';

// Config
// ========================================================
const router = Router();

// Routes
// ========================================================
router.use('/items', Items);

// Exports
// ========================================================
export default router;
