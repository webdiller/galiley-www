import nodemailer from 'nodemailer';
export default async function handler(req, res) {
  const {selectContact, userCar, userMessage, userName, userPhone} = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'eugenefromrus@gmail.com',
      pass: process.env.GMAIL_SERVICE_PASS
    }
  });

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  const mailData = {
    from: 'eugenefromrus@gmail.com',
    to: 'eugenefromrus@gmail.com',
    subject: `Заявка с сайта eugenefromrus@gmail.com`,
    html: `
      <p>Заявка с сайта</p>
      `
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({status: 'OK'});
}

