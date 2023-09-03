const express = require("express");
const jwt = require("jsonwebtoken");
const { signup, signin, verifyEmail } = require("../controllers/auth");

const router = express.Router();

router.post('/signup', signup)
router.post('/signin', signin)
router.get('/verify/:token', verifyEmail);

module.exports = router