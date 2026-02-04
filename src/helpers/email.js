const { transporter } = require("../config/nodemailer");

async function enviarCorreo(to, subject, html) {
    return transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.USER_MAILTRAP,
        to,
        subject,
        html,
    });
}

module.exports = { enviarCorreo };
