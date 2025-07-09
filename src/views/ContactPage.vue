<template>
  <div class="contact-container">
    <div class="contact-header">
      <h1 class="contact-title">お問い合わせ</h1>
      <p class="contact-subtitle">ご質問やご要望がございましたら、以下のフォームよりお気軽にお問い合わせください</p>
      <div class="title-divider"></div>
    </div>

    <form @submit.prevent="sendEmail('inquiry')" class="contact-form">
      <div class="form-group">
        <label for="name" class="form-label required">お名前</label>
        <input 
          type="text" 
          id="name" 
          v-model="name" 
          class="form-input" 
          placeholder="山田 太郎"
          required
        >
      </div>

      <div class="form-group">
        <label for="email" class="form-label required">メールアドレス</label>
        <input 
          type="email" 
          id="email" 
          v-model="email" 
          class="form-input" 
          placeholder="example@dxpro.co.jp"
          required
        >
      </div>

      <div class="form-group">
        <label for="message" class="form-label required">お問い合わせ内容</label>
        <textarea 
          id="message" 
          v-model="message" 
          class="form-textarea" 
          placeholder="ご質問やご要望を詳しくご記入ください"
          rows="5"
          required
        ></textarea>
      </div>

      <button type="submit" class="submit-button">
        <span>送信する</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
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
        const response = await fetch('https://dxpro.onrender.com/send-email', {
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
          this.name = '';
          this.email = '';
          this.message = '';
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
.contact-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Noto Sans JP', 'Segoe UI', sans-serif;
}

.contact-header {
  text-align: center;
  margin-bottom: 40px;
}

.contact-title {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 10px;
  font-weight: 700;
}

.contact-subtitle {
  color: #64748b;
  font-size: 0.8rem;
  line-height: 1.6;
}

.title-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  margin: 20px auto 0;
  border-radius: 3px;
}

.contact-form {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 25px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #475569;
  font-size: 0.95rem;
}

.form-label.required::after {
  content: '*';
  color: #ef4444;
  margin-left: 4px;
}

.form-input, .form-textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f8fafc;
}

.form-input:focus, .form-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  background-color: white;
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(59, 130, 246, 0.2);
}

.submit-button:hover {
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(59, 130, 246, 0.3);
}

.submit-button svg {
  transition: transform 0.3s ease;
}

.submit-button:hover svg {
  transform: translateX(3px);
}

@media (max-width: 768px) {
  .contact-container {
    padding: 30px 15px;
  }
  
  .contact-title {
    font-size: 1.8rem;
  }
  
  .contact-form {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .contact-title {
    font-size: 1.6rem;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-input, .form-textarea {
    padding: 10px 12px;
    font-size: 0.95rem;
  }
  
  .submit-button {
    padding: 14px;
    font-size: 0.95rem;
  }
}
</style>