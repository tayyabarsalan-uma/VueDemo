<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
    <main class="main">
        <!--<RouterView  />-->
        <router-link to="/">Default</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/hello">Hello</router-link> |
        <router-link to="/refs">Refs</router-link> |
        <router-link to="/tabs">Tabs</router-link> |
        <router-link to="/lifecycle">LifeCycle</router-link> |
        <router-link to="/vuex">Vuex</router-link> |
        <router-link to="/non-existent-path">Broken Link</router-link>
        <router-view></router-view>
    </main>
</template>

<style scoped>
header {
  line-height: 0.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.main {
    margin: 200px;
    margin-left: 250px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
