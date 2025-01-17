import { body } from 'express-validator';
import db from '../models/index.js';

export const createBookValidation = [
  body('author')
    .isString().withMessage('El autor debe ser un texto.')
    .notEmpty().withMessage('El autor es obligatorio.')
    .isLength({ max: 255 }).withMessage('El autor no puede tener más de 255 caracteres.'),
  body('isbn')
    .isString().withMessage('El ISBN debe ser un texto.')
    .notEmpty().withMessage('El ISBN es obligatorio.')
    .custom(async (isbn) => {
      const book = await db.Book.findOne({ where: { isbn } });
      if (book) {
        throw new Error('El ISBN ya está registrado.');
      }
    }),
  body('releaseDate')
    .isISO8601().withMessage('La fecha de lanzamiento debe ser válida (formato ISO8601 YYYY-MM-DD).')
    .notEmpty().withMessage('La fecha de lanzamiento es obligatoria.'),
  body('title')
    .isString().withMessage('El título debe ser un texto.')
    .notEmpty().withMessage('El título es obligatorio.')
    .isLength({ max: 500 }).withMessage('El título no puede tener más de 500 caracteres.'),
];
