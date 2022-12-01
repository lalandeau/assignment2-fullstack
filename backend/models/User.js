const mongoose = require("mongoose")

//define schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        length: 100
        },
    email: {
        type: String,
        require: true,
        unique: true,
        length: 50
    },
    password: {
        type: String,
        require: true,
        length: 50
    }
    
})


module.exports = mongoose.model("user", userSchema)