<template>
  <div class="loading-screen" :class="{ 'fade-out': !isVisible }">
    <div class="loading-content">
      <img src="/images/logo_loading_new.png" alt="Logo" class="logo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  data() {
    return {
      isVisible: true
    };
  },
  mounted() {
    window.scrollTo(0, 0);

    // Hide the loading screen after a delay (you can adjust this delay as needed)
    setTimeout(() => {
      this.isVisible = false;
      // Ensure the loading screen is removed from DOM after visibility
      setTimeout(() => {
        this.$el.style.display = 'none'; // Completely hide element
      }, 1000); // Matches the fade-out animation duration
    }, 1000); // 3 seconds delay for demo purposes
  }
}
</script>

<style scoped>
@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2); /* Increased scale at midpoint */
  }
  100% {
    opacity: 0;
    transform: scale(1.5); /* Increased scale at the end */
  }
}

.loading-screen {
  position: fixed;
  top: 0;
  left: 30;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it's on top of everything */
  transition: opacity 1s ease-out;
  opacity: 1;
}

.fade-out {
  animation: fadeOut 1s ease-out forwards;
}

.loading-content {
  text-align: center;
}

.logo {
  width: 500px; /* Initial size of the logo */
  height: auto;
}

@media (max-width: 600px) {
  .logo {
    width: 300px; /* Initial size of the logo */
    height: auto;
    margin-left: 20px;
  }
}
</style>