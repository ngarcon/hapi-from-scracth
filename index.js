const Hapi = require('@hapi/hapi'); 

// Je veux un server sans garder en mémoire les variables nécessaire à son lancement
// -> IIFE : Instantly Invoked Function Expression
(async ()=> {

    const server = Hapi.server({
        port: 5050,
        host: 'localhost'
    });

    await server.start(); 
    console.log("Server running on PORT", server.settings.port); 
    console.table(server.settings); 
    
})(); 


// Capturer toutes les erreurs majeures liées au fonctionnement du serveur
process.on("unhandledRejection", () => {
    console.trace(err);
    process.exit(1); // arreter proprement le serveur
})
