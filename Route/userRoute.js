const express = require("express");
const router = express.Router();
const { userSignup,userLogin,userLogin } = require('../Controller/userController');

// Route for user signup
router.post("/signup/", userSignup);
router.post("/login/",userLogin);
router.get("/logout",userLogin)

module.exports = router;