const mongoose = require("mongoose");

// Load env variable from .env file
require('dotenv').config();
//console.log(process.env);

connectMongoDb = function () {
    try {
        const uri = process.env.MONGODB_URI 
        if (!uri) {
            throw new Error("MONGODB_URI environment variable is not defined");
        }
        mongoose.set('strictQuery', false);
        const connect = mongoose.connect(uri);
        console.log(`Connected to online MongoDB database!`);
    } catch (error) {
        console.error("Mongo Error:", error);
    }
}


// Exporting the whole function to be used in another module.

module.exports = connectMongoDb;

