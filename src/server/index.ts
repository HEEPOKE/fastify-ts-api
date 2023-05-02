import fastify from "fastify";
import cors from '@fastify/cors'
import helmet from "@fastify/helmet";
import swagger from "@fastify/swagger";
import swaggerUi from '@fastify/swagger-ui';
import routes from '../routes';

function server() {
  const app = fastify({ logger: true });

  app.register(cors, {
    origin: true,
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
  });
  app.register(helmet);
  app.register(swagger, {
    openapi: {
      info: {
        title: 'Fastify REST API',
        description: 'API documentation',
        version: '0.1.0'
      },
      servers: [
        {
          url: 'http://localhost:6476',
          description: 'Development server'
        }
      ]
    }
  });
  app.register(swaggerUi, {
    prefix: '/documentation'
  });
  routes(app);

  return app;
}

export default server;
