import express from 'express';
import { getAllBooks, createBook, deleteBook} from '../controllers/bookController.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import { createBookValidation } from '../validations/bookValidations.js';
import { validateFields } from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.get('/', getAllBooks);

// requires authentication from the user
router.post('/', authenticate, createBookValidation, validateFields, createBook )
router.delete('/:id', authenticate, deleteBook)

export default router;
