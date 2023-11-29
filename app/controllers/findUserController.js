"use strict";

const Student = require("../model/Student")
const process = { 
    finduser: async(req,res) =>{
        const student = new Student(req.body);
        const response = await student.find();
        return res.json(response);
    },
};

module.exports = {
    process
};