<template>
  <div id="app">
    <LoadingScreen />
    <header>
      <router-link to="/">
        <img 
          v-bind:src="isHoveringLogo ? '/images/logo_new.png' : '/images/logo_new_hover.png'" 
          class="logo" 
          @mouseover="isHoveringLogo = true"
          @mouseleave="isHoveringLogo = false"
        >
      </router-link>
      <button 
        class="menu-toggle"
        :class="{ hidden: !isMenuButtonVisible, visible: isMenuButtonVisible }"
        @click="toggleMenu"
      >
        <span class="menu-icon"></span>
        <span class="menu-icon"></span>
        <span class="menu-icon"></span>
      </button>
      <nav :class="{ 'nav-open': showMenu }">
        <button class="close-menu" @click="closeMenu">&times;</button>
        <ul>
          <li class="li-border" :class="{ active: activeMenu === 'services' }">
            <router-link to="" class="nav-link" @click="toggleSubmenu('services', $event)">会社案内</router-link>
            <ul v-show="activeMenu === 'services'">
              <li><router-link to="/services/greeting" class="nav-link2" @click="handleLinkClick">ご挨拶</router-link></li>
              <li><router-link to="/services/overview" class="nav-link2" @click="handleLinkClick">会社概要</router-link></li>
              <li><router-link to="/services/access" class="nav-link2" @click="handleLinkClick">アクセス</router-link></li>
            </ul>
          </li>
          <li class="li-border" :class="{ active: activeMenu === 'about' }">
            <router-link to="/about" class="nav-link" @click="handleLinkClick">事業紹介</router-link>
          </li>
          <li class="li-border" :class="{ active: activeMenu === 'privacy' }">
            <router-link to="/privacy" class="nav-link" @click="handleLinkClick">プライバシーポリシー</router-link>
          </li>
          <li class="li-border" :class="{ active: activeMenu === 'recruitment' }">
            <router-link to="" class="nav-link" @click="toggleSubmenu('recruitment', $event)">採用情報</router-link>
            <ul v-show="activeMenu === 'recruitment'">
              <li><router-link to="/Recruitment" class="nav-link2" @click="handleLinkClick">新卒採用</router-link></li>
              <li><router-link to="/SubRecruitment" class="nav-link2" @click="handleLinkClick">中途採用</router-link></li>
              <li><router-link to="/RecruitContact" class="nav-link2" @click="handleLinkClick">応募</router-link></li>
            </ul>
          </li>
          <li class="li-border" :class="{ active: activeMenu === 'contact' }">
            <router-link to="/contact" class="nav-link" @click="handleLinkClick">お問い合わせ</router-link>
          </li>
          <li class="li-border" :class="{ active: activeMenu === '' }">
            <router-link to="/Intranet" class="nav-link" @click="handleLinkClick">イントラネット</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <p>&copy; Copyright © 2024 DXPRO SOLUTIONS. All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue';

export default {
  name: 'App',
  components: {
    LoadingScreen
  },
  data() {
    return {
      showMenu: false,
      isHoveringLogo: false,
      activeMenu: null,
      isMenuButtonVisible: true,
      lastScrollTop: 0 // 스크롤 위치를 기억하는 변수
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      if (!this.showMenu) {
        this.activeMenu = null; // Close submenu when menu is closed
      }
    },
    closeMenu() {
      this.showMenu = false;
      this.activeMenu = null; // Close submenu when menu is closed
    },
    toggleSubmenu(menu, event) {
      event.preventDefault(); // Prevent default link behavior
      this.activeMenu = this.activeMenu === menu ? null : menu; // Toggle submenu
    },
    handleLinkClick() {
      this.closeMenu();
    },
    handleScroll() {
      let currentScrollTop = window.scrollY;

      if (currentScrollTop > this.lastScrollTop && currentScrollTop > 10) {
        this.isMenuButtonVisible = false;
      } else {
        this.isMenuButtonVisible = true;
      }
      this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
     this.$router.push('/');
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
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
  padding-left: 10px;
  list-style-type: none;
  width: 280px;
  height: auto;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 20;
}

.menu-icon {
  display: block;
  width: 30px;
  height: 3px;
  background: #333;
  margin: 6px 0;
  transition: background 0.3s ease;
}

.close-menu {
  background: none;
  border: none;
  font-size: 24px;
  color: #333;
  cursor: pointer;
  align-self: flex-end;
  margin: 10px;
  display: none; /* Hide close button on PC */
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
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  border-right: 1px solid #ddd; /* Vertical line between menu items */
  color: #333;
  margin-right: 10px;
  padding-right: 10px;
  transition: color 0.3s ease, transform 0.3s ease;
}

nav ul li:last-child {
  border-right: none; 
  margin-right: 0;
  padding-right: 0;
}

nav ul li ul li {
  border-right: none; /* Remove bottom border from submenu items */
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

.nav-link:hover {
  color: #999999;
  background-color: #fff;
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
    margin-right: 30px;
    margin-top: 8px;
    width: 280px;
  }

  .menu-toggle {
    display: block;
    position: fixed;
    top: 10px;
    right: 10px;
  }

  nav {
    position: fixed; /* Fix the position of the nav */
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh; /* Set to viewport height */
    background-color: rgba(255, 255, 255, 0.5); /* Semi-transparent dark background */
    backdrop-filter: blur(10px); /* Apply blur effect */
    display: flex;
    flex-direction: column;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 20;
    padding: 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Optional: add shadow for visual separation */
    overflow: hidden; /* Hide overflow for nav container */
  }

  nav.nav-open {
    transform: translateX(0);
  }

  .close-menu {
    background: none;
    border: none;
    font-size: 24px;
    color: #333;
    cursor: pointer;
    align-self: flex-end;
    margin: 10px;
    display: block; /* Ensure close button is visible on mobile */
  }

  nav ul {
    flex-direction: column;
    align-items: stretch;
    padding: 0;
    margin: 0;
    height: calc(100% - 50px); /* Adjust height to account for header space */
    overflow-y: auto; /* Allow vertical scrolling */
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }

  nav ul li {
    font-size: 25px; /* Increased font size for readability on mobile */
    margin: 0; /* Ensure no extra space around menu items */
    position: relative; /* Ensure submenu positioning works correctly */
    width: 100%;
    text-align: center;
    font-weight: bold; /* 글씨를 굵게 */
    border-bottom: 1px solid #a3a2a2; /* Increased border thickness */
  }

  nav ul li ul {
    position: static; /* Ensure submenus are positioned correctly */
    display: none; /* Hide submenu by default on mobile */
    background-color: rgba(255, 255, 255, 0.9); /* Slightly less transparent */
    backdrop-filter: blur(10px); /* Apply blur effect */
    padding: 0; /* Ensure no extra padding */
    margin: 0; /* Ensure no extra margin */
    height: auto; /* Adjust height based on content */
    overflow: hidden; /* Hide overflow to prevent scrolling */
  }

  nav ul li.active > ul {
    display: block; /* Show submenu when the parent is active on mobile */
  }

  .nav-link, .nav-link2 {
    display: block;
    padding: 10px; /* Increased padding for larger clickable area */
    width: 100%; /* Ensure links take full width */
    text-align: center; /* Center link text */
    box-sizing: border-box; /* Include padding in width calculation */
  }

  .divider {
    display: none;
  }

  footer {
    font-size: 10px;
  }
  .hidden {
    display: none;
  }

  .visible {
    display: block;
  }
}
</style>