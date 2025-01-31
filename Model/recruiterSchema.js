const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
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
    companyType: {
        type: String,
        required: true
    },
    startedAt: {
        type: String,
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
    description: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    numberOfEmployees: {
        type: Number,
        required: true
    },

   
});


const recruiter = mongoose.model('recruiter', recruiterSchema);

module.exports = recruiter;


