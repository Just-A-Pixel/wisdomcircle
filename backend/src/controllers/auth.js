const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const signup = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword,
        });

        const accessToken = jwt.sign(user.dataValues.id, "secret");
        res.json({ accessToken });
    } catch (err) {
        if(err.name === "SequelizeUniqueConstraintError") {
            res.status(400).json({message: "User already exists"}, err)
        }
        res.status(500).json({message: "Internal server error", err});
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
module.exports = { signup, signin };
