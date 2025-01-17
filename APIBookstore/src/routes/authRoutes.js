import express from 'express';
import { loginUser, registerUser} from '../controllers/authController.js';
import { createUserValidation } from '../validations/userValidations.js';
import { validateFields } from '../middlewares/validationMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registra un nuevo usuario.
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del usuario.
 *                 example: Juan Pérez
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico único del usuario.
 *                 example: juan.perez@gmail.com
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario. Mínimo 8 caracteres.
 *                 example: "12345678"
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente.
 *       400:
 *         description: Todos los campos nombre, correo y contraseña son obligatorios.
 *       500:
 *         description: No se pudo registrar el usuario.
 */
router.post('/register', createUserValidation, validateFields, registerUser);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Inicia sesión y genera un token JWT.
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario.
 *                 example: juan.perez@gmail.com
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario.
 *                 example: "12345678"
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso con token JWT.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 token:
 *                   type: string
 *                   description: Token JWT generado.
 *       401:
 *         description: Credenciales inválidas.
 *       404:
 *         description: El usuario no fue encontrado.
 *       500:
 *         description: No se pudo iniciar sesión.
 */
router.post('/login', loginUser);

export default router;
