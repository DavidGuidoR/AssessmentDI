import bcrypt from 'bcryptjs';
import db from '../models/index.js';
import jwt from 'jsonwebtoken';

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

// User login by email and password and generation of a JWT token that expires in 24h
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ error: 'El correo y la contraseña son obligatorios.' });
    }
  
    try {
      const user = await db.User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(404).json({ error: 'El usuario no fue encontrado.' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Credenciales inválidas.' });
      }
      
      // JWT sign by 24h
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '24h',
      });
  
      return res.status(200).json({ success: true, token });
    } catch (error) {
      return res.status(500).json({ error: 'No se pudo iniciar sesión.', detalles: error.message });
    }
  };
