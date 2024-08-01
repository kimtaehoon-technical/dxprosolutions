const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'info@dxpro-sol.com',
      pass: 'dxpro-sol2024'
    },
    debug: true,
    logger: true 
  });

  const mailOptions = {
    from: email,
    to: 'info@dxpro-sol.com',
    subject: `Contact from ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('お問い合わせありがとうございます。');
  } catch (error) {
    res.status(500).send('送信に失敗しました。');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});