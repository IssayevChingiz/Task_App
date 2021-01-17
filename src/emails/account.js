const sgMail = require("@sendgrid/mail");


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "issayev.chingiz@gmail.com",
    subject: "Thanks for joining in",
    text: `Welcome to the app ${name}.Feel free to rate it`,
  });
};

const sendDeleteEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "issayev.chingiz@gmail.com",
    subject: "So sad to have you gone :(",
    text: `We hope you will join us again (:`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendDeleteEmail
};
