import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: '*', // Allow all origins (for debugging)
    methods: ['POST', 'GET'],
    credentials: true
}));
app.use(bodyParser.json());

// Health Check Route (for Render to know we are alive)
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// POST Route for Contact Form
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    console.log('Received submission:', { name, email, message });

    // 1. Setup Email Transporter
    // NOTE: You need to generate an App Password if using Gmail
    // https://myaccount.google.com/apppasswords
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // 2. Configure Email
    const mailOptions = {
        from: email, // This might be overridden by Gmail to be the authenticated user
        to: process.env.EMAIL_USER, // Your email address where you want to receive messages
        subject: `Portfolio Message from ${name}`,
        text: `You have received a new message from your portfolio website:

Name: ${name}
Email: ${email}

Message:
${message}
`,
        replyTo: email
    };

    // 3. Send Email
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
