<template>
  <div class="application-form-container">
    <div class="form-header">
      <h1 class="form-title">応募フォーム</h1>
      <div class="form-description">
        <p class="description-text">ディーエックスプロソリューションズの採用にご興味をお持ちいただき、誠にありがとうございます。</p>
        <p class="description-text">下記の応募フォームに必要事項を正確にご記入の上、送信ボタンを押してください。</p>
        <p class="important-note">
          ※ご記入いただいた個人情報は採用選考の目的のみに使用し、採用プロセス終了後は適切に廃棄いたします。<br>
          ※必須項目は<span class="required-mark">*</span>で表示しておりますので、必ずご記入ください。<br>
          ※ファイルアップロードはPDF形式（5MB以内）でお願いいたします。
        </p>
      </div>
      <div class="title-divider"></div>
    </div>

    <form @submit.prevent="sendEmail('application')" enctype="multipart/form-data" class="modern-form">
      <div class="form-group">
        <label for="name" class="form-label required">お名前</label>
        <input type="text" id="name" v-model="name" class="form-input" required>
      </div>

      <div class="form-group">
        <label for="telephone" class="form-label required">電話番号</label>
        <input type="tel" id="telephone" v-model="telephone" class="form-input" required>
      </div>

      <div class="form-group">
        <label for="email" class="form-label required">メールアドレス</label>
        <input type="email" id="email" v-model="email" class="form-input" required>
      </div>

      <div class="form-group">
        <label for="saiyoselect" class="form-label required">応募希望</label>
        <select id="saiyoselect" v-model="saiyoselect" class="form-select" required>
          <option value="">選択してください</option>
          <option value="新卒採用">新卒採用</option>
          <option value="中途採用">中途採用</option>
        </select>
      </div>

      <div class="form-group">
        <label for="message" class="form-label required">希望年収 (円)</label>
        <input type="number" id="message" v-model="message" class="form-input" required min="1000000" max="100000000" step="100000" placeholder="例: 5,000,000">
      </div>

      <div class="form-group file-upload-group">
        <label class="form-label required">履歴書・職務経歴書</label>
        <div class="file-upload-wrapper">
          <label for="file" class="file-upload-label">
            <span v-if="!file">ファイルを選択</span>
            <span v-else>{{ file.name }}</span>
            <input type="file" id="file" @change="handleFileUpload" required>
          </label>
        </div>
      </div>

      <div class="form-group checkbox-group">
        <input type="checkbox" id="consent" v-model="consent" class="consent-checkbox" required>
        <label for="consent" class="consent-label">個人情報の取扱規定に同意する</label>
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
  data() {
    return {
      name: '',
      telephone: '',
      email: '',
      saiyoselect: '',
      message: '',
      consent: false,
      file: null
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    async sendEmail(formType) {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('telephone', this.telephone);
      formData.append('email', this.email);
      formData.append('saiyoselect', this.saiyoselect);
      formData.append('message', this.message);
      formData.append('consent', this.consent);
      formData.append('file', this.file);
      formData.append('formType', formType);

      try {
        const response = await fetch('https://dxpro.onrender.com/send-email', {
          method: 'POST',
          body: formData
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
};
</script>

<style scoped>
.application-form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Noto Sans JP', 'Segoe UI', sans-serif;
}

.form-header {
  text-align: center;
  margin-bottom: 40px;
}
.form-description {
  text-align: center;
  margin-bottom: 25px;
  line-height: 1.8;
  color: #4a5568;
}

.form-description p {
  margin-bottom: 12px;
}
.description-text {
  font-size: 0.7rem;  /* 기존 1rem에서 1.1rem으로 크기 증가 */
  margin-bottom: 15px; /* 여백도 약간 증가 */
}

.important-note {
  background-color: #f8fafc;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  text-align: left;
  font-size: 0.9rem;
  border-left: 4px solid #3b82f6;
}

.required-mark {
  color: #ef4444;
  font-weight: bold;
  margin: 0 2px;
}
.form-title {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 10px;
  font-weight: 700;
}

.form-subtitle {
  color: #64748b;
  margin-bottom: 20px;
  font-size: 1rem;
}

.title-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  margin: 0 auto;
  border-radius: 3px;
}

.modern-form {
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

.form-input, .form-select {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f8fafc;
}

.form-input:focus, .form-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  background-color: white;
}

.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
}

.file-upload-group {
  margin-bottom: 30px;
}

.file-upload-wrapper {
  position: relative;
}

.file-upload-label {
  display: block;
  padding: 12px 15px;
  border: 1px dashed #cbd5e1;
  border-radius: 8px;
  background-color: #f8fafc;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.file-upload-label:hover {
  border-color: #3b82f6;
  background-color: #f0f7ff;
}

.file-upload-label input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.checkbox-group {
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.consent-checkbox {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  accent-color: #3b82f6;
}

.consent-label {
  font-size: 0.9rem;
  color: #475569;
  cursor: pointer;
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
  .application-form-container {
    padding: 30px 15px;
  }
  
  .form-title {
    font-size: 1.8rem;
  }
  
  .modern-form {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .form-title {
    font-size: 1.6rem;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-input, .form-select {
    padding: 10px 12px;
    font-size: 0.95rem;
  }
  
  .submit-button {
    padding: 14px;
    font-size: 0.95rem;
  }
}
</style>