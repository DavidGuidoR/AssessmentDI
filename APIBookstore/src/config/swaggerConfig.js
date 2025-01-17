import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';


const PORT = process.env.PORT || 3000;
const HOST = process.env.APP_HOST || 'http://localhost';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Gestión de Libros', 
    version: '1.0.0', 
    description: 'Documentación de la API de gestión de libros.', 
  },
  servers: [
    {
      url: `${HOST}:${PORT}`, 
      description: 'Servidor de desarrollo',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Documentación disponible en ${HOST}:${PORT}/api-docs`);
};
