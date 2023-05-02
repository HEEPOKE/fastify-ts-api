import { FastifyInstance } from 'fastify';

async function routes(fastify: FastifyInstance) {

    fastify.get('/', async (request, reply) => {
        reply.send({ hello: 'world' })
    });
}

export default routes;
