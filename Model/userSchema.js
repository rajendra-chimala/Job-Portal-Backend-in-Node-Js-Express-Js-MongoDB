const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        
    },
    lastName: {
        type: String,
        required: true,
       
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    skills: [{
        type: String,
        required: true
    }],
    experience: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },

   
});


const User = mongoose.model('User', userSchema);

module.exports = User;


