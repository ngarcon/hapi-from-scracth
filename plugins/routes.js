// This module will simply gather to different routing options 
// api (back) vs. landing page (front : static files f.i.)
// export the module
module.exports = {
    // Here we need to define
    // name : to identify the module
    name: 'routes',
    // register : 
    register: async (server) => {
        await server.register([{
            plugin: require('./_api'),
            routes: {
                prefix: '/api'
            }
        }]);

    }
}