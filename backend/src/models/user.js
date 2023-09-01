const { sq } = require("../config/db");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const saltRounds = 5;

const User = sq.define("user", {
    firstName: {
        type: DataTypes.STRING,
    },

    lastName: {
        type: DataTypes.STRING,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    phone: {
        type: DataTypes.STRING(10),
    },

    password: {
        type: DataTypes.CHAR(60),
        allowNull: false,
    },
});

User.sync().then(() => {
    console.log("User Model synced");
});

module.exports = User;
