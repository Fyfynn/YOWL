const mongoose = require('mongoose');


//employee schema
const Employee = mongoose.model('Employee', {
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    
    salary: {
        type: Number,
        required: [true, 'Salary is required']
    }
});

module.exports =  { Employee }
