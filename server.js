require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Всі поля обов\'язкові для заповнення!' });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: 'in-v3.mailjet.com',
            port: 587,
            auth: {
                user: process.env.MAILJET_API_KEY,
                pass: process.env.MAILJET_SECRET_KEY
            }
        });

        const mailOptions = {
            from: process.env.SENDER_EMAIL, 
            to: process.env.RECEIVER_EMAIL, 
            subject: `Нове повідомлення з сайту: ${subject}`,
            text: `Ти отримала нове повідомлення!\n\nІм'я: ${name}\nEmail: ${email}\nПовідомлення: ${message}`
        };

const info = await transporter.sendMail(mailOptions);
res.status(200).json({ success: true, message: 'Лист відправлено!' });

    } catch (error) {
        console.error('Помилка відправки листа:', error);
        res.status(500).json({ error: 'Помилка сервера при відправці листа.' });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Сервер летить на http://localhost:${PORT}`);
});