import bcrypt from 'bcryptjs';
import db from '../models/index.js';

// User registration in DB
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Todos los campos nombre, correo y contraseña son obligatorios.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({ success: true, userId: newUser.id });
  } catch (error) {
    return res.status(500).json({ error: 'No se pudo registrar el usuario.', detalles: error.message });
  }
};
