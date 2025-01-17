import { body } from 'express-validator';
import db from '../models/index.js';

export const createUserValidation = [
  body('email')
    .isEmail().withMessage('El correo electrónico debe ser válido.')
    .notEmpty().withMessage('El correo electrónico es obligatorio.')
    .trim()
    .custom(async (email) => {
      const user = await db.User.findOne({ where: { email } });
      if (user) {
        throw new Error('El correo electrónico ya está registrado.');
      }
    }),
  body('name')
    .isString().withMessage('El nombre debe ser un texto.')
    .notEmpty().withMessage('El nombre es obligatorio.')
    .isLength({ max: 255 }).withMessage('El nombre no puede tener más de 255 caracteres.'),
  body('password')
    .isString().withMessage('La contraseña debe ser un texto.')
    .notEmpty().withMessage('La contraseña es obligatoria.')
];
