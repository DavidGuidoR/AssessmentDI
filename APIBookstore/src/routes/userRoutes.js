import express from "express";
import { getAllUsers, updateUser, deleteUser } from "../controllers/userController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { updateUserValidation } from "../validations/userValidations.js";
import { validateFields } from "../middlewares/validationMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene la lista de todos los usuarios.
 *     tags:
 *       - Usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del usuario.
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: Nombre del usuario.
 *                     example: Juan Pérez
 *                   email:
 *                     type: string
 *                     format: email
 *                     description: Correo electrónico del usuario.
 *                     example: juan.perez@gmail.com
 *       401:
 *         description: Usuario no autenticado.
 */
router.get("/", getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualiza la información de un usuario.
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nuevo nombre del usuario.
 *                 example: Juan Pérez
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Nuevo correo electrónico del usuario.
 *                 example: juan.perez@gmail.com
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente.
 *       400:
 *         description: Datos inválidos.
 *       404:
 *         description: Usuario no encontrado.
 */
router.put("/:id", updateUserValidation, validateFields, updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Elimina un usuario.
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a eliminar.
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 *       404:
 *         description: Usuario no encontrado.
 *       401:
 *         description: Usuario no autenticado.
 */
router.delete("/:id", deleteUser);

export default router;
