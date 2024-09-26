const express = require('express');
const mailgun = require('mailgun-js');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, 'touch.env') });

const app = express();
const PORT = process.env.PORT || 3000;

console.log('Mailgun API Key:', process.env.MAILGUN_API_KEY);
console.log('Mailgun Domain:', process.env.MAILGUN_DOMAIN);

if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
    console.error('Error: Mailgun API key and domain must be defined in .env file');
    process.exit(1);
}

const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/subscribe', (req, res) => {
    const { email } = req.body;
    const data = {
        from: 'ceemalakaushik22@gmail.com',
        to: email,
        subject: 'Welcome!!',
        text: 'Thank you for subscribing to this!!',
        html: '<strong>Thank you for subscribing and it is successfully completed</strong>',
    };

    mg.messages().send(data, (error, body) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending welcome email');
        } else {
            res.status(200).send('Welcome email sent successfully. Enjoy!!');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

    import('open').then(open => {
        open.default(`http://localhost:${PORT}`, { app: 'chrome' })
            .then(() => console.log('Browser opened automatically'))
            .catch(err => console.error('Error opening browser:', err));
    });
});
