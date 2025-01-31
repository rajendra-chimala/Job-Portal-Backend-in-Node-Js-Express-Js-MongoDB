const recruiter = require("../Model/recruiterSchema");
const bcrypt = require("bcryptjs");
const recruiterSignup = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      profilePicture,
      companyType,
      startedAt,
      location,
      description,
      numberOfEmployees,
      contact,
    } = req.body;

    const isAlreadyExist = await recruiter.findOne({ email });

    if (isAlreadyExist)
      return res.status(409).json({ message: "Recruiter already exists !" });
    const hashedPassword = await bcrypt.hash(password, 10);

    const newRecruiter = new recruiter({
      fullName,
      email,
      password: hashedPassword,
      profilePicture,
      companyType,
      startedAt,
      location,
      description,
      numberOfEmployees,
      contact,
    });

    newRecruiter.save();

    res
      .status(201)
      .json({
        message: "Recruiter created successfully",
        newRecruiter: newRecruiter.toJSON() || {}
      });
  } catch (error) {
    console.error("Error in recruiterSignUp Controller:", error);
    res
      .status(500)
      .json({
        message: "Error occur during the signup !",
        error: error.message,
      });
  }
};

const recruiterLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const isRecruiter = await recruiter.findOne({ email });
        if(!isRecruiter) return res.status(404).json({ message: "Recruiter not found" });
        const isMatch = await bcrypt.compare(password, isRecruiter.password);
        if(!isMatch) return res.status(401).json({ message: "Invalid credentials" });
        res.json({ message: "Recruiter logged in successfully", recruiter: isRecruiter.toJSON() || {} });


    } catch (error) {

        console.log("Error in recruiter login !",error);
        res.status(500).json({ message: "Error occur during the login", error: error.message });
        
    }
}


const recruiterLogout= async (req, res) => {
  res.status(200).json({ message: "Recruiter logged out successfully" });


}

module.exports = { recruiterSignup,recruiterLogin,recruiterLogout };
