const mongoose = require('mongoose');


//employee schema
const user = mongoose.model('user', {
    username: {
        type: String,
        required: [true, 'username is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    
    password: {
        type: String,
        required: [true, 'Password is required'],
        unique: true
    },
    birthday: {
        type: String,
        required: [true, 'Birthday is required']
    }

});

module.exports =  { user }
