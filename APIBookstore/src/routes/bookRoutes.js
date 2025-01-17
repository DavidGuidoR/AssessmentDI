import express from 'express';
import { getAllBooks, createBook, deleteBook} from '../controllers/bookController.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import { createBookValidation } from '../validations/bookValidations.js';
import { validateFields } from '../middlewares/validationMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Obtiene todos los libros registrados.
 *     tags:
 *       - Libros
 *     responses:
 *       200:
 *         description: Lista de libros obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 books:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID del libro.
 *                         example: 1
 *                       title:
 *                         type: string
 *                         description: Título del libro.
 *                         example: La Ilíada
 *                       author:
 *                         type: string
 *                         description: Autor del libro.
 *                         example: Homero
 *                       isbn:
 *                         type: string
 *                         description: ISBN único del libro.
 *                         example: "9780140449136"
 *                       releaseDate:
 *                         type: string
 *                         format: date
 *                         description: Fecha de lanzamiento del libro.
 *                         example: "2003-05-29"
 *                       userId:
 *                         type: integer
 *                         description: ID del usuario que registró el libro.
 *                         example: 1
 *       401:
 *         description: Usuario no autenticado.
 *       500:
 *         description: No se pudieron obtener los libros.
 */
router.get('/', getAllBooks);

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Registra un nuevo libro.
 *     tags:
 *       - Libros
 *     security:
 *       - bearerAuth: [] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título del libro. Máximo 500 caracteres.
 *                 example: La Ilíada
 *               author:
 *                 type: string
 *                 description: Autor del libro. Máximo 255 caracteres.
 *                 example: Homero
 *               isbn:
 *                 type: string
 *                 description: ISBN único del libro.
 *                 example: "9780140449136"
 *               releaseDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de lanzamiento en formato ISO8601.
 *                 example: "2003-05-29"
 *     responses:
 *       201:
 *         description: Libro registrado exitosamente.
 *       400:
 *         description: Todos los campos son obligatorios.
 *       409:
 *         description: El libro con este ISBN ya existe.
 *       401:
 *         description: Usuario no autenticado.
 *       500:
 *         description: No se pudo registrar el libro.
 */
router.post('/', authenticate, createBookValidation, validateFields, createBook )

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Elimina un libro registrado.
 *     tags:
 *       - Libros
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del libro a eliminar.
 *         example: 1
 *     responses:
 *       200:
 *         description: Libro eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: El libro no fue encontrado.
 *       401:
 *         description: Usuario no autenticado.
 *       500:
 *         description: No se pudo eliminar el libro.
 */
router.delete('/:id', authenticate, deleteBook)

export default router;
