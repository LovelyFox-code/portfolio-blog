const dotenv = require("dotenv");
dotenv.config();

console.log("message", process.env.SMTP_SERVER);
