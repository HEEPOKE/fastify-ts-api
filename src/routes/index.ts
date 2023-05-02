import { FastifyInstance } from 'fastify';

async function app(fastify: FastifyInstance) {

    fastify.get('/', async (request, reply) => {
        reply.send({ hello: 'world' })
    });
}

const routes = {
    app
}

export default routes;
