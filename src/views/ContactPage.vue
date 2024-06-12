<template>
  <div>
    <h1>お問い合わせ</h1>
    <p>以下のフォームを作成してください。</p>
    <form @submit.prevent="sendEmail">
      <div>
        <label for="name">お名前:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="email">メールアドレス:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="message">内容:</label>
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
    async sendEmail() {
      try {
        const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message
          })
        });

        if (response.ok) {
          alert('お問い合わせありがとうございます。');
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
  max-width: 400px;
  margin: auto;
}
div {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input, textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>