module.exports = {
    name: 'api',
    register:  (server) => {
        
        server.route({
            method: 'GET',
            path: '/main',
            handler: (req, helper) => {
                return "test"; 
            }
        });

        server.route({
            method: 'GET',
            path: '/second',
            handler: (req, helper) => {
                return "test2"; 
            }
        });
    }
}