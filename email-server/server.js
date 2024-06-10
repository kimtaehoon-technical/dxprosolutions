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
      user: 'xogns00089@gmail.com', // Gmail 계정
      pass: 'kim650323!'  // Gmail 비밀번호 또는 앱 비밀번호
    },
    debug: true, // 디버그 모드 활성화
    logger: true // 로그 활성화
  });

  const mailOptions = {
    from: email,
    to: 'xogns00089@gmail.com',
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