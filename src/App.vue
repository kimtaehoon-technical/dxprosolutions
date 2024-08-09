<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img 
          v-bind:src="isHoveringLogo ? '/images/DXPRO_LOGO_HOVER_FRONT2.png' : '/images/DXPRO_LOGO_FRONT_1.png'" 
          class="logo" 
          @mouseover="isHoveringLogo = true"
          @mouseleave="isHoveringLogo = false"
        >
      </router-link>
      <nav>
        <ul>
          <li class="li-border">
            <router-link to="/services/greeting" class="nav-link">会社案内</router-link>
            <ul>
              <li><router-link to="/services/greeting" class="nav-link2">ご挨拶</router-link></li>
              <li><router-link to="/services/overview" class="nav-link2">会社概要</router-link></li>
              <li><router-link to="/services/access" class="nav-link2">アクセス</router-link></li>
            </ul>
          </li>
          <li class="divider"></li>
          <li class="li-border">
            <router-link to="/about" class="nav-link">事業紹介</router-link>
          </li>
          <li class="divider"></li>
          <li class="li-border">
            <router-link to="/privacy" class="nav-link">プライバシーポリシー</router-link>
          </li>  
          <li class="divider"></li>
          <li class="li-border">
            <router-link to="/Recruitment" class="nav-link">採用情報</router-link>
            <ul>
              <li><router-link to="/Recruitment" class="nav-link2">新卒採用</router-link></li>
              <li><router-link to="/SubRecruitment" class="nav-link2">中途採用</router-link></li>
            </ul>
          </li>
          <li class="divider"></li>
          <li class="li-border">
            <router-link to="/contact" class="nav-link">お問い合わせ</router-link>
          </li>
          <li class="divider"></li>
          <li class="li-border">
            <router-link to="/Intranet" class="nav-link">イントラネット/メール</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <p>&copy; Copyright © 2024 DXPRO. All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showSubMenu: false,
      isHoveringLogo: false
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Noto Sans JP', sans-serif;
}

#app {
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: rgba(255, 255, 255, 0.8);
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 100%;
  top: 0;
  z-index: 10;
}

.logo {
  list-style-type: none;
  width: 150px;
  height: auto;
}

nav {
  padding-right: 50px;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

nav ul li {
  position: relative;
  white-space: nowrap;
  font-size: 16px;
}

nav ul li ul {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: transparent;
  text-align: left;
  border: none;
  display: none;
  z-index: 2;
}

nav ul li:hover ul {
  display: block;
}

footer {
  background-color: rgba(255, 255, 255, 0.8);
  color: #2c3e50;
  padding: 10px;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
}

.divider {
  border-left: 1px solid #ddd;
  margin: 0 10px;
}

.nav-link {
  text-decoration: none;
  color: #555;
  margin: 0 5px;
}

.nav-link2 {
  text-decoration: none;
  color: #555;
  display: flex;
  width: 80px;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  background-color: #fbf9f9;
  border-bottom: 1px solid #ccc;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.nav-link2:hover {
  color: #fff;
  background-color: #f6f6f6;
}

@media (max-width: 600px) {
  header {
    flex-direction: column;
    align-items: center;
  }

  .logo {
    width: 120px;
  }

  nav {
    padding-right: 0;
    width: 100%;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
    background-color: #efeeee;
  }

  nav ul li {
    font-size: 14px;
    margin: 5px 0;
  }

  .divider {
    display: none;
  }
}
</style>