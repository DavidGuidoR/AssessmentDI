import express from 'express';
import { getAllBooks, createBook, deleteBook} from '../controllers/bookController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getAllBooks);

// requires authentication from the user
router.post('/', authenticate, createBook )
router.delete('/:id', authenticate, deleteBook)

export default router;
