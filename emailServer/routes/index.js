const { Router } = require("express");
const router = Router();
const nodemailer = require("nodemailer");

//email
const AUTH_mail = {
  userf: "", //process.env.EMAIL_USERF
  passf: "", //process.env.EMAIL_PASSF
  usert: "", //process.env.EMAIL_USERT
};

//console.log(AUTH_mail);

const contactEmail = nodemailer.createTransport({
  //1.16.30
  service: "gmail",
  auth: {
    user: AUTH_mail.userf,
    pass: AUTH_mail.passf,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  //1.17.41
  const mail = {
    from: name,
    to: AUTH_mail.usert,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

module.exports = router;
