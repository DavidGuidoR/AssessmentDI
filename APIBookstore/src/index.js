import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './models/index.js';
import authRoutes from './routes/authRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import { setupSwagger } from './config/swaggerConfig.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Swagger initiator
setupSwagger(app);

// Routes
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);

// Default Route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Bienvenido a la API de Gestión de Libros',
    documentation: '/api-docs',
  });
});


// Database connection
db.sequelize.authenticate()
  .then(() => console.log('Conexion exitosa con la base de datos'))
  .catch(err => console.error('Error al conectar con la base de datos:', err));

// Sequelize sync
db.sequelize.sync({ force: false })
.then(() => {
  console.log('Base de datos sincronizada');
})
.catch((error) => {
  console.error('Error al sincronizar la base de datos:', error);
});

// Server start
const PORT = process.env.PORT || 3000;
const HOST = process.env.APP_HOST || 'http://localhost';
app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${HOST}:${PORT}`);
});
