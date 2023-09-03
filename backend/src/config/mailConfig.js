const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'spam46745@gmail.com',
        pass: 'ycurrnnwoetoydky'
    }
});

module.exports = { transporter }