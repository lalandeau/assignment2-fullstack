const express = require("express")
const mongoose  = require("mongoose")
const empRoutes = require("./routes/empModel")
const userRoutes = require("./routes/userModel")
const cors = require('cors')
require('dotenv/config')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    
app.use("/api/emp", empRoutes)
app.use("/api/user", userRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>Assignment 1 using MogoDB + Mongoose</h1>")
    })

app.listen(process.env.PORT, () => console.log('database is running'))