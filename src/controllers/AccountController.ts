import { FastifyError } from 'fastify';
import accountServices from '../services/AccountServices';

async function listAccount(request: any, reply: any) {
    try {
        const account = await accountServices.listAccount();

        const payload = {
            data: account,
            status: 'success',
            message: 'Account created successfully.',
        }
        reply.status(200).send(payload);
    } catch (error) {
        reply.status(500).send(error as FastifyError);
    }
}

async function getAccountById(request: any, reply: any) {
    try {
        const account = await accountServices.getAccountById(parseInt(request.params.id, 10));

        if (account) {
            const payload = {
                data: account,
                status: 'success',
                message: 'Account created successfully.',
            }
            reply.status(200).send(payload);
        } else {
            const payload = {
                data: [],
                status: 'fail',
                message: `Don't Find Account`
            }
            reply.status(403).send(payload);
        }
    } catch (error) {
        reply.status(500).send(error as FastifyError);
    }
}

async function findAccountByEmail(request: any, reply: any) {
    try {
        const account = await accountServices.findEmail(request.body.email);

        if (account) {
            const payload = {
                data: account,
                status: 'success',
                message: 'successfully.',
            }
            reply.status(200).send(payload);
        } else {
            const payload = {
                data: [],
                status: 'fail',
                message: `Don't Find Account`
            }
            reply.status(403).send(payload);
        }
    } catch (error) {
        reply.status(500).send(error as FastifyError);
    }
}

async function createAccount(request: any, reply: any) {
    try {
        const account = await accountServices.createAccount(request.body)

        if (account) {
            const payload = {
                data: account,
                status: 'success',
                message: 'Account created successfully.',
            }
            reply.status(200).send(payload);
        } else {
            const payload = {
                data: [],
                status: 'fail',
                message: `Don't Find Account`
            }
            reply.status(403).send(payload);
        }
    } catch (error) {
        reply.status(500).send(error as FastifyError);
    }
}

async function updateAccount(request: any, reply: any) {
    try {
        const id = parseInt(request.params.id, 10);
        const account = await accountServices.updateAccount(id, request.body);

        if (account) {
            const payload = {
                data: account,
                status: 'success',
                message: 'successfully.',
            }
            reply.status(200).send(payload);
        } else {
            const payload = {
                data: [],
                status: 'fail',
                message: `Don't Find Account`
            }
            reply.status(403).send(payload);
        }
    } catch (error) {
        reply.status(500).send(error as FastifyError);
    }
}

async function deleteAccount(request: any, reply: any) {
    try {
        const id = parseInt(request.params.id, 10);
        const account = await accountServices.deleteAccount(id);

        if (account) {
            const payload = {
                data: account,
                status: 'success',
                message: 'successfully.',
            }
            reply.status(200).send(payload);
        } else {
            const payload = {
                data: [],
                status: 'fail',
                message: `Don't Find Account`
            }
            reply.status(403).send(payload);
        }
    } catch (error) {
        reply.status(500).send(error as FastifyError);
    }
}

const accountController = {
    listAccount,
    getAccountById,
    findAccountByEmail,
    createAccount,
    updateAccount,
    deleteAccount,

}

export default accountController;
