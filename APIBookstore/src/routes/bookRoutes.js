import express from 'express';
import { getAllBooks, createBook} from '../controllers/bookController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getAllBooks);

// requires authentication from the user
router.post('/', authenticate, createBook )

export default router;
