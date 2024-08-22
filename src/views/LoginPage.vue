<template>
  <div>
    <div v-if="!isLoggedIn">
      <div class="login-container">
        <div class="login-box">
          <h1>ログイン</h1>
          <form @submit.prevent="login">
            <input 
              v-model="username" 
              type="text" 
              placeholder="ユーザー名" 
              required 
              class="login-input"
            />
            <input 
              v-model="password" 
              type="password" 
              placeholder="パスワード" 
              required 
              class="login-input"
            />
            <button type="submit" class="login-button">ログイン</button>
          </form>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          <p class="forgot-password">
            <router-link to="/contact">パスワードを忘れた場合</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      isLoggedIn: false,
      name: '',
    };
  },
  methods: {
    login() {
      const validCredentials = [
        { username: 'info@dxpro-sol.com', password: 'dxpro-sol2024', name: 'admin' },
        { username: 'kim_taehoon@dxpro-sol.com', password: 'dxpro-sol2024', name: '金 兌訓' },
        { username: 'otomo_kento@dxpro-sol.com', password: 'dxpro-sol2024', name: '大友 健人' },
      ];

      const user = validCredentials.find(cred => 
        cred.username === this.username && cred.password === this.password
      );

      if (user) {
        sessionStorage.setItem('authToken', 'yourAuthToken');
        sessionStorage.setItem('username', this.username);
        sessionStorage.setItem('name', user.name);
        this.isLoggedIn = true;
        
        setTimeout(() => {
          this.logout();
        }, 30 * 60 * 1000);

        this.$router.push(this.$route.query.redirect || '/');
      } else {
        this.errorMessage = 'ログインに失敗しました。ユーザー名とパスワードを確認してください。';
      }
    },
    logout() {
      sessionStorage.removeItem('authToken');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('name');
      this.isLoggedIn = false;
      this.$router.push('/login');
    },
  },
  mounted() {
    window.scrollTo(0, 0);

    if (!sessionStorage.getItem('authToken')) {
      this.$router.push('/login');
    } else {
      this.isLoggedIn = true;
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-box {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

h1 {
  margin-bottom: 20px;
  color: #333333;
  font-weight: 600;
}

.login-input {
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #0056b3;
}

.error-message {
  color: #ff0000;
  margin-top: 10px;
}

.forgot-password {
  margin-top: 20px;
}

.forgot-password a {
  color: #007bff;
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
}
</style>
