import { FastifyInstance } from 'fastify';
import accountController from '../controllers/accountController';

async function routes(fastify: FastifyInstance, prefix: string) {

    fastify.get('/', async (request, reply) => {
        reply.send({ hello: 'world' })
    });

    fastify.get(`${prefix}/account/list`, accountController.listAccount);
}

export default routes;
