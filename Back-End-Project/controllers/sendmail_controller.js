const nodemailer = require("nodemailer");

const sendMail = (req, res) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "hfood263@gmail.com",
            pass: "Hfood2632022#"
        },
    });

    transporter.sendMail({
        from: req.body.email, // sender address
        to: "hfood263@gmail.com",// list of receivers 
        subject: req.body.subject, // Subject line
        text: req.body.message, // plain text body
    },(err)=>{
        if (err) {
            res.json({message : "No Send"})
        } else {
            res.json({message : "Successful send"})
        }
    });
}
module.exports = {sendMail}