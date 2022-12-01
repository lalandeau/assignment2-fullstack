const express = require("express")
const mongoose = require("mongoose");
const { findOne } = require("../models/User");
const userModel = require("../models/User")

// route for user
const userRoutes = express.Router()

// sign up for users
userRoutes.post("/signup", async (req, res) => {
    try {
        // creates new user and saves in the database
        const newNote = new userModel(req.body)
        const note = await newNote.save()
        res.status(201).send(note)
    } catch (error) {
        res.status(400).send(error)
    }
});

// login for users
userRoutes.post("/login", async (req, res) => {
    // res.send({message: "user log in"})
    var username = req.body.username;
    var password = req.body.password;

    userModel.findOne({
      username: username,
      password: password
    }, function(err, user){
      if (err){
        return res.status(400).send();
      }

      // checks if the username and password matches in database
      if (!user) {
        return res.status(404).send({
          status: false,
          message: "Invalid Username and Password"
        });
      }

      // return the username and password matches in database
      return res.status(200).send({
        status: true,
        username: username,
        message: "User logged in successfully"
      })
    })
})

module.exports = userRoutes