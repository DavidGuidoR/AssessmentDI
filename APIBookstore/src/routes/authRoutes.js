import express from 'express';
import { loginUser, registerUser} from '../controllers/authController.js';
import { createUserValidation } from '../validations/userValidations.js';
import { validateFields } from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.post('/register', createUserValidation, validateFields, registerUser);
router.post('/login', loginUser);

export default router;
