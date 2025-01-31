const User = require('../Model/userSchema');

const bcrypt = require('bcryptjs');

const userSignup = async (req, res) => {
    try {

        const { firstName, lastName, email, password, profilePicture, location, jobTitle,contact,skills,experience } = req.body;

        // console.log(firstName, lastName, email, password, profilePicture, location, jobTitle,contact,skills);


        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "All fields are required: firstName, lastName, email, password" });
        }


        const hashedPassword =await bcrypt.hash(password, 10);


        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email" });
        }

        const newUser = new User({
            firstName,
            lastName,
            email,
            password:hashedPassword, 
            profilePicture,
            location,
            jobTitle,
            contact,
            experience,
            skills

        });

        await newUser.save();

        res.status(201).json({ message: "User created successfully",newUser  });
    } catch (error) {
        console.error("Error in signUp Controller:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

const userLogin = async (req, res) => {

const {email, password} = req.body;

const isUser = await User.findOne({ email });

if(!isUser) return res.status(404).json({ message: "User not found" });

const isMatch = await bcrypt.compare(password, isUser.password);


if(!isMatch) return res.status(401).json({ message: "Invalid credentials" });

res.json({ message: "Logged in successfully", user: isUser });

};




const userLogout = async (req, res) => {


    res.status(200).json({ message: "User log out successfully" });
}

module.exports = {
    userSignup,
    userLogin,
    userLogout
};