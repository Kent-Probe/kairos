<script setup lang="ts">
import Entry from "./views/entry.vue";

function toggleDarkMode() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
});
</script>

<template>
  <main class="main">
    <Entry />
  </main>
</template>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  font-family: "DM sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: linear-gradient(45deg, #7163ba 40%, #8d86ce 100%);
}
</style>
