const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');


const contactController = {


    async mail(req,res) {
      
      try {

    const {from,subject,text, firstname, lastname} = req.body;
    console.log({from,subject,text, firstname, lastname}) ;
  

    let transporter = nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSMAIL
      }
    })

  const templateMail = `
  <p>Bonjour Romain, </p>
  <p>Vous avez reçu un nouveau message de : <strong>${firstname} ${lastname} </strong></p>
  <p>Voici le contenu du message : </p>
  <p><strong>${text}</strong></p>
  <p>S vous souhaitez lui répondre, voici son adresse mail :<strong> ${from}</strong>`
  

  let mailOptions = {
    from: req.body.from,
    to: 'testatelierrc@gmail.com', 
    subject: req.body.subject,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    text: req.body.text,
    html: templateMail,
};
    
    transporter.sendMail(mailOptions, function(err, data) {
      if(err) {
        console.log('Error occurs');
      } else {
        console.log('Email sent!');
        res.status(200).json('Email sent !')
      }
      });
    

    }

    catch (error) {
      console.trace(error);
    }

  }
}

    

    module.exports = contactController;