const express = require('express');

const router = express.Router();

const {createJob,getJobBYId,getAllJobs,deleteJob} = require("../Controller/jobController");

router.post('/create', createJob);

router.get('/:id', getJobBYId);
router.get('/', getAllJobs);
router.delete('/:id', deleteJob);



module.exports = router;