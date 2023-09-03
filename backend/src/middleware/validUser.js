const User = require("../models/user");
const {Op} = require("@sequelize/core")

const validNewUser = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                [Op.or]: { phone: req.body.phone, email: req.body.email },
            },
        });
        if (user == null) {
            next();
        } else {
            res.status(400).send("Phone number or email is taken");
        }
    } catch (err) {
        console.log(err);
        next(err);
    }
};

module.exports = { validNewUser };
