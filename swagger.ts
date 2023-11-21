import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  swaggerDefinition: {
    info: {
      title: 'Store api',
      version: '1.0.0',
      description: 'API documentation using Swagger',
    },
  },
  apis: ['./src/routes/*.ts'], // Path to the API routes folder
};

const specs = swaggerJsdoc(options);

export default specs;
