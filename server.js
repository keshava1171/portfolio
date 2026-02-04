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

// Global Transporter (Reusable)
// Using explicit settings for better reliability on Render
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Verify connection configuration on startup
transporter.verify(function (error, success) {
    if (error) {
        console.log('Transporter connection error:', error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

// Health Check Route (for Render to know we are alive)
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// POST Route for Contact Form
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    console.log('Received submission:', { name, email, message });

    // Respond immediately to the client
    res.status(200).json({ success: true, message: 'Message received! Sending email in background.' });

    // Configure Email
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Message from ${name}`,
        text: `You have received a new message from your portfolio website:

Name: ${name}
Email: ${email}

Message:
${message}
`,
        replyTo: email
    };

    // Send Email (Background)
    transporter.sendMail(mailOptions)
        .then(() => console.log('Email sent successfully'))
        .catch(error => console.error('Error sending email:', error));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
