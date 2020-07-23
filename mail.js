const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '',
        domain: ''
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
    from: 'kingfantic27@gmail.com',
    to: 'kenokoli100@gmail.com',
    subject: 'Testing',
    text: 'I would like safdbgiuygbsdfv'

};

transporter.sendMail(mailOptions, function (error, data) {
    if (error) {
        console.log('Error Occurs!');
    } else {
        console.log('Message Sent');
    }
});
