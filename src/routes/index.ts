import { FastifyInstance } from 'fastify';
import accountController from '../controllers/accountController';

async function routes(fastify: FastifyInstance, prefix: string) {

    fastify.get('/', async (request, reply) => {
        reply.send({ hello: 'world' })
    });

    fastify.get(`${prefix}/account/list`, accountController.listAccount);
    fastify.get(`${prefix}/account/get/:id`, accountController.getAccountById);
    fastify.get(`${prefix}/account/find/:id`, accountController.findAccountByEmail);
    fastify.post(`${prefix}/account/add`, accountController.createAccount);
    fastify.put(`${prefix}/account/update/:id`, accountController.updateAccount);
    fastify.delete(`${prefix}/account/delete/:id`, accountController.deleteAccount);
}

export default routes;
