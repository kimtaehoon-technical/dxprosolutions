<template>
  <div id="app">
    <LoadingScreen />
    <header class="main-header">
      <div class="header-container">
        <router-link to="/" class="logo-link">
          <img 
            v-bind:src="isHoveringLogo ? '/images/logo_new.png' : '/images/logo_new_hover.png'" 
            class="logo" 
            @mouseover="isHoveringLogo = true"
            @mouseleave="isHoveringLogo = false"
            alt="DXPRO SOLUTIONS"
          >
        </router-link>
        
        <button 
          class="menu-toggle"
          :class="{ hidden: !isMenuButtonVisible, visible: isMenuButtonVisible }"
          @click="toggleMenu"
          aria-label="Menu"
        >
          <span class="menu-icon-bar"></span>
          <span class="menu-icon-bar"></span>
          <span class="menu-icon-bar"></span>
        </button>
        
        <nav :class="{ 'nav-open': showMenu }" class="main-nav">
          <div class="nav-container">
            <ul class="nav-list">
              <li class="nav-item" :class="{ active: activeMenu === 'services' }">
                <router-link to="" class="nav-link" @click="toggleSubmenu('services', $event)">
                  <span>会社案内</span>
                  <span class="dropdown-icon" v-if="activeMenu === 'services'">−</span>
                  <span class="dropdown-icon" v-else>+</span>
                </router-link>
                <transition name="slide-fade">
                  <ul class="submenu" v-show="activeMenu === 'services'">
                    <li class="submenu-item"><router-link to="/services/greeting" class="submenu-link" @click="handleLinkClick">ご挨拶</router-link></li>
                    <li class="submenu-item"><router-link to="/services/overview" class="submenu-link" @click="handleLinkClick">会社概要</router-link></li>
                    <li class="submenu-item"><router-link to="/services/access" class="submenu-link" @click="handleLinkClick">アクセス</router-link></li>
                  </ul>
                </transition>
              </li>
              
              <li class="nav-item" :class="{ active: activeMenu === 'about' }">
                <router-link to="/about" class="nav-link" @click="handleLinkClick">事業紹介</router-link>
              </li>
              
              <li class="nav-item" :class="{ active: activeMenu === 'privacy' }">
                <router-link to="/privacy" class="nav-link" @click="handleLinkClick">プライバシーポリシー</router-link>
              </li>
              
              <li class="nav-item" :class="{ active: activeMenu === 'recruitment' }">
                <router-link to="" class="nav-link" @click="toggleSubmenu('recruitment', $event)">
                  <span>採用情報</span>
                  <span class="dropdown-icon" v-if="activeMenu === 'recruitment'">−</span>
                  <span class="dropdown-icon" v-else>+</span>
                </router-link>
                <transition name="slide-fade">
                  <ul class="submenu" v-show="activeMenu === 'recruitment'">
                    <li class="submenu-item"><router-link to="/Recruitment" class="submenu-link" @click="handleLinkClick">新卒採用</router-link></li>
                    <li class="submenu-item"><router-link to="/SubRecruitment" class="submenu-link" @click="handleLinkClick">中途採用</router-link></li>
                    <li class="submenu-item"><router-link to="/RecruitContact" class="submenu-link" @click="handleLinkClick">応募</router-link></li>
                  </ul>
                </transition>
              </li>
              
              <li class="nav-item" :class="{ active: activeMenu === 'contact' }">
                <router-link to="/contact" class="nav-link" @click="handleLinkClick">お問い合わせ</router-link>
              </li>
              
              <li class="nav-item" :class="{ active: activeMenu === '' }">
                <router-link to="/Intranet" class="nav-link intranet-link" @click="handleLinkClick">イントラネット</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    
    <main class="main-content">
      <router-view/>
    </main>
    
    <FooterPage />
  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue';
import FooterPage from './components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    LoadingScreen,
    FooterPage
  },
  data() {
    return {
      showMenu: false,
      isHoveringLogo: false,
      activeMenu: null,
      isMenuButtonVisible: true,
      lastScrollTop: 0
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      if (!this.showMenu) {
        this.activeMenu = null;
      }
    },
    closeMenu() {
      this.showMenu = false;
      this.activeMenu = null;
    },
    toggleSubmenu(menu, event) {
      event.preventDefault();
      this.activeMenu = this.activeMenu === menu ? null : menu;
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
/* Base Styles */
:root {
  --primary-color: #0067c0;
  --primary-dark: #004b8a;
  --primary-light: #e6f2ff;
  --secondary-color: #333333;
  --light-gray: #f8f9fa;
  --medium-gray: #e9ecef;
  --dark-gray: #6c757d;
  --white: #ffffff;
  --black: #212529;
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans JP', 'Helvetica Neue', Arial, sans-serif;
  color: var(--secondary-color);
  line-height: 1.6;
  background-color: var(--white);
  overflow-x: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header Styles */
.main-header {
  background-color: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: var(--transition);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.logo-link {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
  width: auto;
  transition: var(--transition);
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: none;
  z-index: 1001;
  transition: var(--transition);
}

.menu-icon-bar {
  display: block;
  width: 25px;
  height: 2px;
  background-color: var(--secondary-color);
  margin: 5px 0;
  transition: var(--transition);
}

/* Navigation Styles */
.main-nav {
  display: flex;
  align-items: center;
}

.nav-container {
  display: flex;
}

.nav-list {
  display: flex;
  list-style: none;
}

.nav-item {
  position: relative;
  margin: 0 10px;
}

.nav-link {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  transition: var(--transition);
  border-radius: 4px;
}

.nav-link:hover {
  color: var(--primary-color);
  background-color: var(--primary-light);
}

.nav-link span {
  margin-right: 5px;
}

.dropdown-icon {
  font-size: 12px;
  margin-left: 5px;
}

.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--white);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  min-width: 180px;
  padding: 10px 0;
  list-style: none;
  z-index: 100;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  pointer-events: none;
}

.nav-item:hover .submenu,
.nav-item.active .submenu {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.submenu-item {
  padding: 0;
}

.submenu-link {
  display: block;
  padding: 8px 20px;
  color: var(--secondary-color);
  text-decoration: none;
  font-size: 14px;
  transition: var(--transition);
}

.submenu-link:hover {
  background-color: var(--primary-light);
  color: var(--primary-color);
}

.intranet-link {
  color: var(--primary-color);
  font-weight: 700;
}

.close-menu {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: var(--secondary-color);
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1002;
}

/* Main Content */
.main-content {
  flex: 1;
  padding-top: 0px;
}

/* Mobile Menu Styles */
@media (max-width: 768px) {
  .header-container {
    height: 70px;
  }
  
  .menu-toggle {
    display: block;
  }
  
  .main-nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--white);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 1000;
    overflow-y: auto;
  }
  
  .nav-open {
    transform: translateX(0);
  }
  
  .nav-container {
    width: 100%;
    height: 100%;
    padding: 80px 30px 30px;
    flex-direction: column;
  }
  
  .nav-list {
    flex-direction: column;
  }
  
  .nav-item {
    margin: 0 0 15px 0;
  }
  
  .nav-link {
    padding: 12px 0;
    font-size: 18px;
    justify-content: space-between;
  }
  
  .submenu {
    position: static;
    box-shadow: none;
    opacity: 1;
    transform: none;
    pointer-events: auto;
    display: none;
    padding: 0;
    margin-top: 10px;
    background-color: var(--light-gray);
    border-radius: 4px;
  }
  
  .nav-item.active .submenu {
    display: block;
  }
  
  .submenu-link {
    padding: 10px 15px;
  }
  
  .close-menu {
    display: block;
  }
}

/* Animations */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* Utility Classes */
.hidden {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
}

.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
</style>