const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const {transporter} = require("../config/mailConfig")

const signup = async (req, res) => {
    try {
        
        const accessToken = jwt.sign(req.body, "secret")

        const mailConfigurations = {
  
            from: 'spam46745@gmail.com',
            to: req.body.email,
            subject: 'Email Verification',
            text: `Hello!
                   Please follow the given link to verify your email
                   http://localhost:4000/api/auth/verify/${accessToken} 
                   Thanks`
        };

        transporter.sendMail(mailConfigurations, function(error, info){
            if (error) throw Error(error);
            console.log('Email Sent Successfully');
            console.log(info);
        })

        res.status(200).send("Verify Email");
    } catch (err) {
        res.status(500).json({ message: "Internal server error", err });
    }
};

const signin = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (user == null) {
            res.status(404).json({ message: "User could not be found" });
        }
        if (await bcrypt.compare(req.body.password, user.dataValues.password)) {
            const accessToken = jwt.sign(user.dataValues.id, "secret");
            res.json({ accessToken });
        } else {
            res.status(401).json({ message: "Wrong email or password" });
        }
    } catch (err) {
        res.status(500).json({ message: "Internal server error", err });
    }
};

const verifyEmail = async (req, res) => {
    const {token} = req.params;
    
    try {
        const decodedData = jwt.verify(token, 'secret')
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(decodedData.password, salt);
        const user = await User.create({
            firstName: decodedData.firstName,
            lastName: decodedData.lastName,
            email: decodedData.email,
            extension: decodedData.extension,
            phone: decodedData.phone,
            password: hashedPassword,
        });
        res.redirect('http://localhost:3000/login')
    } catch (err) {
        console.log(err)
        if (err.name === "SequelizeUniqueConstraintError") {
            res.status(400).json({ message: "User already exists", err });
        }
        else res.status(400).send("Email verification failed, possibly the link is invalid or expired");
    }    
}

module.exports = { signup, signin, verifyEmail };
