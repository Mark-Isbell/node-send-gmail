const nodemailer = require("nodemailer");

const sendEmail = async options => {

  let transporter = null;

        transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
              user: "youremailatgmail@gmail.com", // replace with your email at gmail
              pass: "cels pjel lweo jdiu" // replace with your 'password for apps' password at gmail
           }
        });
      
  // nodemailer boilerplate
  const message = {
    from: "youremailatgmail@gmail.com", // replace with your email at gmail
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  const info = await transporter.sendMail(message); 

  console.log("info : " + JSON.stringify(info)); 
  return info; 
};

module.exports = sendEmail;
