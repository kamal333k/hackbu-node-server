'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/HackBU/',
        handler: function (request, h) {

        const user = request.params.user ? request.params.user : 'To navigate the pages within the server, change the last extension of this URL in the search bar of your web browser to any of the following: Temperature, Resources';

        return `${user}`;
    }
    });

    server.route({
        method: 'GET',
        path: '/HackBU/Temperature/',
        handler: function(request, h) {
    
            const user = request.params.user ? request.params.user : 'The temperature in the car is: 70 degress.<br />'+ 
            '<br />' +
            'If temperature < 70 degrees, no notification will be sent.<br />' + 
            'If temperature >= 70 degrees, notification will be sent to the app.<br />' +
            'If temperature >= 105 degrees, notification will be sent to the app and authorities will be notified.<br /></p>' +
            '<br />';

            return `${user}`;
        }
        });

        server.route({
            method: 'GET',
            path: '/HackBU/Resources/',
            handler: function(request, h) {
        
                const user = request.params.user ? request.params.user : 'HackBU Team: Kamal, Tony, Michael, Alan';
    
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