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
      userData: [], // 사용자 데이터를 저장할 배열 추가
    };
  },
  methods: {
    async fetchUserinfo() {
        try {
            const response = await fetch('https://dxpro.onrender.com/user');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data)
            // Handle user info
        } catch (error) {
            console.error('Error fetching userinfo:', error);
        }
    },
    async login() {
      try {
        const response = await fetch('https://dxpro.onrender.com/user', { // 또는 배포 URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
            name: this.name
          })
        });
        console.log(response);

        if (!response.ok) {
          throw new Error('ログインに失敗しました。ユーザー名またはパスワードが正しくありません。');
        }
        const data = await response.json();
        this.isLoggedIn = true;
        setTimeout(() => {
          this.logout();
        }, 30 * 60 * 1000);
        await this.fetchUserinfo();

        this.name = data.name; // Assuming the response has a 'name' field
        sessionStorage.setItem('authToken', data.token); // Assuming token is returned
        sessionStorage.setItem('username', this.username);
        this.$router.push(this.$route.query.redirect || '/Intranet');
      } catch (error) {
        this.errorMessage = error.message;
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
      this.name = sessionStorage.getItem('name'); // 세션에서 이름 가져오기
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
