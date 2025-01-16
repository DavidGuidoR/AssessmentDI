import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './models/index.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/', (req, res) => {
    res.status(200).json({
      message: 'Bienvenido a la API de gestión de libros',
      version: '1.0.0',
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
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
