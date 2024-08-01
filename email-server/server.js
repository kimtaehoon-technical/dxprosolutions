const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { name, telephone, email, saiyoselect, message, consent } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'mail1022.onamae.ne.jp',
    port: 587,
    secure: false,
    auth: {
      user: 'info@dxpro-sol.com',
      pass: 'dxpro-sol2024'
    }
  });

  const mailOptions = {
    from: email,
    to: 'info@dxpro-sol.com',
    subject: `Contact from ${name}`,
    html: `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            h1 { color: #333; }
            .container { width: 100%; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; }
            .section { margin-bottom: 20px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-left: 10px; color: #333; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>お問い合わせ内容</h1>
            <div class="section">
              <span class="label">お名前:</span>
              <span class="value">${name}</span>
            </div>
            <div class="section">
              <span class="label">電話番号:</span>
              <span class="value">${telephone}</span>
            </div>
            <div class="section">
              <span class="label">メールアドレス:</span>
              <span class="value">${email}</span>
            </div>
            <div class="section">
              <span class="label">応募希望:</span>
              <span class="value">${saiyoselect}</span>
            </div>
            <div class="section">
              <span class="label">希望年収:</span>
              <span class="value">${message}</span>
            </div>
            <div class="section">
              <span class="label">個人情報の取扱規定に同意する:</span>
              <span class="value">${consent ? '同意する' : '同意しない'}</span>
            </div>
          </div>
        </body>
      </html>`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('お問い合わせありがとうございます。');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('送信に失敗しました。');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});