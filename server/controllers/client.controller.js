const { Client } = require("../models/Client");

module.exports.createClient = (req, res) => {
    Client.create(req.body)
        .then(client => res.json(client))
        .catch(err => res.json(err));
}

module.exports.getAllClients = (req, res) => {
    Client.find({})
        .then(client => res.json(client))
        .catch(err => res.json(err));
}

module.exports.getClient = (req, res) => {
    Client.findOne({_id: req.params.id})
        .then(client => res.json(client))
        .catch(err => res.json(err))
}

module.exports.updateClient = (req, res) => {
    Client.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(person => res.json(person))
        .catch(err => res.json(err))
}

module.exports.deleteClient = (req, res) => {
    Client.deleteOne({ _id: req.params.id })
        .then(confirmation => res.json(confirmation))
        .catch(err => res.json(err))
}