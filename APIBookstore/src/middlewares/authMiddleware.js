import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Se requiere un token de acceso.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Add user data to req.user
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido.' });
  }
};
