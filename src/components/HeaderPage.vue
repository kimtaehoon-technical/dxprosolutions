<template>
  <header>
    <nav>
      <ul>
        <li @mouseover="showSubMenu('home')" @mouseleave="hideSubMenu">Home
          <ul v-if="activeMenu === 'home'">
            <li><router-link to="/">Main</router-link></li>
          </ul>
        </li>
        <li @mouseover="showSubMenu('about')" @mouseleave="hideSubMenu">About
          <ul v-if="activeMenu === 'about'">
            <li><router-link to="/about">About Us</router-link></li>
          </ul>
        </li>
        <li @mouseover="showSubMenu('services')" @mouseleave="hideSubMenu">Services
          <ul v-if="activeMenu === 'services'">
            <li><router-link to="/services">Our Services</router-link></li>
          </ul>
        </li>
        <li @mouseover="showSubMenu('contact')" @mouseleave="hideSubMenu">Contact
          <ul v-if="activeMenu === 'contact'">
            <li><router-link to="/contact">Contact Us</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: ''
    };
  },
  methods: {
    showSubMenu(menu) {
      this.activeMenu = menu;
    },
    hideSubMenu() {
      this.activeMenu = '';
    }
  }
};
</script>

<style>
header {
  background-color: #333;
  color: white;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline-block;
  position: relative;
  padding: 10px;
}

nav ul li ul {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #444;
}

nav ul li ul li {
  display: block;
}

nav ul li:hover ul {
  display: block;
}

nav a {
  color: white;
  text-decoration: none;
}
</style>