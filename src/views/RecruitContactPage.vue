<template>
  <div>
    <h1>応募フォーム</h1>
    <p>以下のフォームを作成してください。</p>
    <form @submit.prevent="sendEmail">
      <div>
        <label for="name">お名前:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="telephone">電話番号:</label>
        <input type="telephone" id="telephone" v-model="telephone" required>
      </div>
      <div>
        <label for="email">メールアドレス:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="saiyoselect">応募希望</label>
        <select name="saiyoselect" v-model="saiyoselect">
          <option value="none">=== 選択 ===</option>
          <option value="新卒採用"> 新卒採用 </option>
          <option value="中途採用"> 中途採用 </option>
        </select>
      </div>
      <div>
        <label for="message">希望年収:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <div class="checkbox-group">
        <label for="consent">個人情報の取扱規定に同意する</label>
        <input type="checkbox" id="consent" name="consent" v-model="consent" value="個人情報の取扱規定に同意する">
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
      telephone: '',
      email: '',
      saiyoselect: '',
      message: '',
      consent: '',
    };
  },
  mounted() {
    window.scrollTo(0, 0);
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
            telephone: this.telephone,
            email: this.email,
            saiyoselect: this.saiyoselect,
            message: this.message,
            consent: this.consent
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

.checkbox-group {
  display: flex;
  align-items: center;
}

.checkbox-group input[type="checkbox"] {
  margin-right: 10px;
}

@media (max-width: 600px) {
  form {
    padding: 15px;
  }

  input, textarea {
    font-size: 14px;
  }

  button {
    padding: 10px 15px;
    font-size: 14px;
  }
}
</style>