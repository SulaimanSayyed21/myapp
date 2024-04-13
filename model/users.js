var mongoose = require("mongoose");

var userRegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true, 
        index: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

/**
 * credentials schema
 * Database vrusers has a collection name credentials
 */
const collection = mongoose.model('credentials', userRegisterSchema); 

module.exports = collection;
