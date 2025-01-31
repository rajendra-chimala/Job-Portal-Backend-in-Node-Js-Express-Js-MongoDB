const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    recruiterID: {
        type: String, // Use ObjectId for referencing
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    skills:[{

        type: String,
        required: true
    }],
    salaryRangeMin: {
        type: Number, // Use Number instead of String
        required: true
    },
    salaryRangeMax: {
        type: Number, // Use Number instead of String
        required: true
    },
    experience:{
        type: Number,
        required: true
    },
    jobType: {
        type: String,
        required: true,
        },
    datePosted: {
        type: Date,
        default: () => Date.now() // Use a function to ensure timestamp is generated at creation
    },
    jobBenefit: {
        type: String,
        required: true
    }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;