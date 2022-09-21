const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cardewdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB cardewdb connected successfully"))
    .catch(err => console.log("Failed to connect to MongoDB cardewdb: ", err));