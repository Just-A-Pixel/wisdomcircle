const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const salt = 5;

const signup = async (req, res) => {

    try {
        let password = "raj123"
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            firstName: "Raj",
            lastName: "Anand",
            email: "raj@123.com",
            phone: "1234567890",
            password: hashedPassword,
        });
        
        console.log(user);
    } catch (err) {
        console.log(err);
    }

    res.json({});
};

module.exports = { signup };
