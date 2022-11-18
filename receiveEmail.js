const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");
console.log("message", process.env.SMTP_SERVER);

const transport = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_SENDER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function receiveEmail(emailAdress, subject, emailContent) {
  return transport.sendMail(
    {
      from: process.env.SMTP_SENDER,
      to: emailAdress,
      subject: subject,
      html: emailContent,
    },
    (err) => {
      if (err) {
        console.log("OH! NO! NO! NO! is an error!", err);
      } else {
        console.log("Yeah!");
      }
    }
  );
}
