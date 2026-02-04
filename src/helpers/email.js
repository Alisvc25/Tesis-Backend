// src/helpers/email.js
const { transporter } = require("../config/nodemailer");

async function enviarCorreo(to, subject, html) {
    const from = process.env.MAIL_FROM || process.env.MAIL_USER;

    return transporter.sendMail({
        from,
        to,
        subject,
        html,
    });
}

module.exports = { enviarCorreo };
