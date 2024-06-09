<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'MainContent'
};
</script>

<style>
main {
  padding: 20px;
  min-height: calc(100vh - 80px); /* Header + Footer height */
}
</style>