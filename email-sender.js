const nodemailer = require("nodemailer");

// Create transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "oriyomiolamilekan22@gmail.com",
    pass: "hffzgcmodtisogwi",
  },
});

// Email options
let mailOptions = {
  from: "oriyomiolamilekan22@gmail.com",
  to: "ayoo30879@gmail.com",
  subject: "Test Email from Node.js",
  text: "Hello! This is a test email sent from Node.js.",
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: " + info.response);
});
