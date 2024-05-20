const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Mailler API',
    description: 'Mailler API documentation'
  },
  host: 'https://mailler-backend.vercel.app',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js'];


swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js')
});