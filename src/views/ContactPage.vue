<template>
  <div>
    <h1>お問い合わせ</h1>
    <p>以下のフォームを作成してください。</p>
    <form @submit.prevent="sendEmail('inquiry')">
      <div>
        <label for="name" class="required">お名前:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="email" class="required">メールアドレス:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="message" class="required">内容:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">送信</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    async sendEmail(formType) {
      try {
        const response = await fetch('https://dxpro-backend-esbzfjdccwada7e5.japaneast-01.azurewebsites.net/send-email/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message,
            formType: formType
          })
        });

        if (response.ok) {
          alert('お問い合わせありがとうございます。');
          window.location.reload();
          window.scrollTo(0, 0);
        } else {
          alert('送信に失敗しました。');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('送信に失敗しました。');
      }
    }
  }
}
</script>

<style scoped>
form {
  max-width: 600px;
  margin: auto;
}
div {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 10px;
}
input, textarea {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  margin-bottom: 10px;

}
button {
  padding: 10px 100px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}

label.required::before {
  content: '*';
  color: red;
  margin-right: 5px;
}

@media (max-width: 600px) {
  form {
    padding: 15px;
  }

  input, label, textarea {
    font-size: 14px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  button {
    padding: 10px 15px;
    font-size: 14px;
  }
}
</style>