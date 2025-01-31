const express = require('express');

const {recruiterSignup, recruiterLogin,recruiterLogout} = require('../Controller/recruiterController')

const router = express.Router();

router.post('/signup',recruiterSignup);

router.post('/login',recruiterLogin);

router.get('/logout',recruiterLogout)


module.exports = router;