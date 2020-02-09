'use strict';

const Hapi = require('@hapi/hapi');
const inert = require('inert');

const init = async () => {

    const server = Hapi.server({
	port: 3000,
	host: 'localhost'
    });

    server.route({
	method: 'GET',
	path: '/',
	handler: (request, h) => {

	    return h.file('./index.html')
	}
    });

    server.route({
	method: 'GET',
	path: '/data/',
	handler: (request, h) => {

	    return h.file('./data.html')
	}
    });

    await server.register(inert);
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
