const express = require("express");
const jwt = require("jsonwebtoken");
const { signup, signin, verifyEmail } = require("../controllers/auth");
const { validNewUser } = require("../middleware/validUser")

const router = express.Router();

router.post('/signup', validNewUser,signup)
router.post('/signin', signin)
router.get('/verify/:token', verifyEmail);

module.exports = router