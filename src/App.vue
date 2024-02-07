<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="nav">
      <RouterLink to="/">首頁</RouterLink>
      <RouterLink :to="{ name: 'About' }">關於</RouterLink>
      <RouterLink :to="{ name: 'Base' }">常見酒類</RouterLink>
      <RouterLink :to="{ name: 'Cocktail' }">常見調酒</RouterLink>
    </div>
    <!-- <button @click="back">Back</button> -->
  </header>
  <RouterView />
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
header {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 50px;
}

header a {
  font-size: larger;
  font-weight: 700;
  text-align: center;
  padding: 20px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
