const Job = require('../Model/jobSchema');


const createJob = async (req,res)=>{

try {
    
    const { jobTitle, recruiterID, location, skills, experience,jobType, jobDescription, salaryRangeMax,salaryRangeMin, deadline,jobBenefit,datePosted } = req.body;

    // console.log( jobTitle, recruiterID, location, skills, experience,jobType, jobDescription, salaryRangeMax,salaryRangeMin, deadline,jobBenefit,datePosted);


    const newJob = new Job({

        jobTitle,
        recruiterID,
        location,
        skills,
        experience,
        jobType,
        jobDescription,
        salaryRangeMax,
        salaryRangeMin,
        deadline,
        jobBenefit,
        datePosted
    })
   await newJob.save()
   
   res.status(201).json({message: "Job created successfully", newJob});
} catch (error) {


    console.error("Error in createJob Controller:", error);
    res.status(500).json({message: "Error occur during the job creation!", error: error.message});
    
}

};
//GEt Job by ID
const getJobBYId= async (req,res)=>{

    const jobId = req.params.id;
    console.log(jobId);
    try {
        const job = await Job.findById(jobId);
        if(!job) return res.status(404).json({message: "Job not found"});
        res.json({job});
    } catch (error) {

        console.log("Error in getJobById Controller:", error);
        res.status(500).json({message: "Error occur during the job retrieval!", error: error.message});
        
    }
}


//get all jobs


const getAllJobs = async (req,res)=>{


    try{
        const jobs = await Job.find(); // Example for MongoDB
        res.json(jobs);


    }catch (error) {
    
    console.log("object error in getAllJobs Controller:", error);
    res.status(500).json({message: "Error occur during the job retrieval!", error: error.message});
    
    }
};


const deleteJob = async (req,res)=>{

    try {
        const jobId = req.params.id;

        const job = await Job.findByIdAndDelete(jobId);
        if(!job) return res.status(404).json({message: "Job not found"});
        res.json({message: "Job deleted successfully"});
    } catch (error) {

        console.log("Error Occur during the deleting job !"+ error);
        res.status(500).json({message:"Error occur during the job deletion !",error:error.message});
        
    }
}
module.exports = {createJob, getJobBYId,getAllJobs,deleteJob};