const mongoose = require("mongoose")

//define schema
const empSchema = mongoose.Schema({
    first_name: {
        type: String,
        require: true,
        length: 100,
    },
    last_name: {
        type: String,
        require: true,
        length: 50
    }, 
    email: {
        type: String,
        require: true,
        unique: true,
        length: 50
    },
    gender: {
        type: String,
        require: true,
        length: 50
    },
    salary: {
        type: Number,
        require: true,
    }
})


module.exports = mongoose.model("employee", empSchema)