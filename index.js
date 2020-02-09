'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/HackBU/{user?}',
        handler: function (request, h) {

        const user = request.params.user ? 70 : 'To navigate the pages within the server, change the last extension of this URL in the search bar of your web browser to any of the following: Temperature, Resources';

        return `${user}`;
    }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();