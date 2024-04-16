const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASSWORD,
  },
});

async function sendEmail(userName, userPhone, area, subArea, emails) {
  const info = await transporter.sendMail({
    from: "GuardianTech <info@guardiantech.com>",
    to: emails,
    subject: "Your friend is in trouble",
    html: `<h1>Your friend ${userName} is in trouble!</h1>
              <h2>Location: ${subArea}, ${area}.
              <br/>
              Contact Number: ${userPhone}`,
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = sendEmail;
