const ClientController = require("../controllers/client.controller");

module.exports = (app) => {
    app.get('/api/clients', ClientController.getAllClients);
    app.post('/api/clients', ClientController.createClient);
    app.get('/api/clients/:id', ClientController.getClient);
    app.put('/api/clients/:id', ClientController.updateClient);
    app.delete('/api/clients/:id', ClientController.deleteClient);
};