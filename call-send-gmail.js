const sendEmail = require("./send-gmail");

// replace the targetEmail with your own target
const targetEmail = "targetemail@someemailserver.com"; 

    sendEmail({
    email: targetEmail,
    subject: 'Hello world',
    message: 'Hello world, its my first email from gmail to another account. Testing, testing .... ',
  });