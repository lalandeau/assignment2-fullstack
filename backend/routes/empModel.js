const express = require("express")
const mongoose = require("mongoose");
const empModel = require("../models/Employee")

// route for employee
const empRoutes = express.Router()

// get all employee 
empRoutes.get('/employees', async (req, res) => {
    try{
        const emp = await empModel.find()
        if(!emp) {
            res.status(400).send({message: "Employee content can not be empty"});
        }
        res.status(200).send(emp)
    }
    catch (error){
        res.status(400).send(error)
    }
});

// add employee
empRoutes.post('/employees', async (req, res) => {
    try {
        const new_emp = new empModel(req.body)
        const emp = await new_emp.save()
        if(!emp) {
            res.status(400).send({ message: "Employee content can not be empty" });
        }
        res.status(201).send(emp)
    } catch (error) {
        res.status(400).send(error)
    }
});

// get specific information of an employee
empRoutes.get('/employees/:empid', async (req, res) => {
    try {
        const newEmp = await empModel.findById(req.params.empid, req.body)
        res.status(200).send(newEmp)
    }
    catch (error){
        res.status(400).send(error)
    }
});

// update employee details by id
empRoutes.put('/employees/:empid', async (req, res) => {
    try {
        const newEmp = await empModel.findByIdAndUpdate(req.params.empid, req.body)
        res.status(200).send(newEmp)
    }
    catch (error){
        res.status(400).send(error)
    }
});

// delete employee by id
empRoutes.delete("/employees/:empid", async (req, res) => {
    try {
        const deletedEmp = await empModel.findByIdAndDelete(req.params.empid)
        if(!deletedEmp){
            res.status(400).send({message: "Note content can not be empty"})
        }
        res.status(204).send(deletedEmp)
    }
    catch (error){
        res.status(400).send(error)
    }
});

module.exports = empRoutes