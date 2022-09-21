const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    phoneNumber: {type: String}
}, {timestamps: true});

module.exports.Client = mongoose.model("Client", ClientSchema);