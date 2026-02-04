import nodemailer from "nodemailer";

const FRONTEND = process.env.FRONTEND_URL || "http://localhost:5173";

// transporter Gmail usando tus variables
const transporter = nodemailer.createTransport({
    host: process.env.HOST_MAILTRAP,
    port: Number(process.env.PORT_MAILTRAP || 587),
    secure: Number(process.env.PORT_MAILTRAP || 587) === 587,
    auth: {
        user: process.env.USER_MAILTRAP,
        pass: process.env.PASS_MAILTRAP,
    },
});

const sendMail = async ({ to, subject, html }) => {
    return await transporter.sendMail({
        from: process.env.USER_MAILTRAP,
        to,
        subject,
        html,
    });
};

// plantilla simple (puedes cambiarla)
const baseTemplate = (title, content) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 16px;">
        <h2>${title}</h2>
        ${content}
    </div>
`;

const sendMailToRegister = async (userMail, token) => {
    const link = `${FRONTEND}/confirmar/${token}`;

    const html = baseTemplate(
        "Confirma tu cuenta ✅",
        `
        <p>Da click para confirmar tu cuenta:</p>
        <a href="${link}">Confirmar cuenta</a>
    `
    );

    return await sendMail({
        to: userMail,
        subject: "Confirma tu cuenta ✅",
        html,
    });
};

const sendMailToOwner = async (userMail, password) => {
    const link = `${FRONTEND}/login`;

    const html = baseTemplate(
        "Credenciales de acceso 🎓",
        `
        <p>Tu cuenta fue creada. Puedes iniciar sesión con:</p>
        <p><b>Usuario:</b> ${userMail}</p>
        <p><b>Contraseña:</b> ${password}</p>
        <a href="${link}">Iniciar sesión</a>
        <p>Por seguridad, cambia tu contraseña después de iniciar sesión.</p>
    `
    );

    return await sendMail({
        to: userMail,
        subject: "Credenciales de acceso – Sistema Académico 🎓",
        html,
    });
};

const sendMailToRecoveryPassword = async (userMail, token) => {
    const link = `${FRONTEND}/recuperar/${token}`;

    const html = baseTemplate(
        "Recuperación de contraseña 🔐",
        `
        <p>Da click para restablecer tu contraseña:</p>
        <a href="${link}">Restablecer contraseña</a>
    `
    );

    return await sendMail({
        to: userMail,
        subject: "Recuperación de contraseña 🔐",
        html,
    });
};

export { sendMailToOwner, sendMailToRegister, sendMailToRecoveryPassword };
