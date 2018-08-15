var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: gmail;
  auth: {
    user: // 'youremail@gmail.com';
    password: // 'password';
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com', 'myotherfriend@yahoo.com', // sending email to more than one ddress, separate them by commas.
  subject: 'sending email using nodejs',
  text: 'that was easy'
  // if sending HTML instead of text, use this line...
  //html: '<h1>Welcome</h1><p>That was easy</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log('error');
  } else {
    console.log('email sent: ' + info.response);
  }
});
