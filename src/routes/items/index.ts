// Imports
// ========================================================
import { Router } from 'express';
import ListItems from './list';
import CreateItem from './create';
import ReadItem from './read';
import UpdateItem from './update';
import DeleteItem from './delete';

// Config
// ========================================================
const router = Router();

// Routes
// ========================================================
router.use(ListItems);
router.use(CreateItem);
router.use(ReadItem);
router.use(UpdateItem);
router.use(DeleteItem);

// Exports
// ========================================================
export default router;
