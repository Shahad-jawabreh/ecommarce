import nodemailer from "nodemailer" 

const SendEmail = async(email,req,token) =>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
          user: process.env.emailSender,
          pass: process.env.emailPassword,
        },
      });

    const info = await transporter.sendMail({
          from: 'welcom to our ecommarce', // sender address
          to: email ,
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html:`<a href='${req.protocol}://${req.headers.host}/user/confirmemail/${token}'>confirm email</a>`, // html body
     });
         
}
export default SendEmail   
    