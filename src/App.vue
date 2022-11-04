<script setup lang="ts">
import { ref } from "vue";
import EcCircleProgressBar from "./components/EcCircleProgressBar.vue";
import HelloWorld from "./components/HelloWorld.vue";

const progress = ref(0.5);
</script>

<template>
  <div>
    <h2>一个丝滑的环形进度条</h2>
    <EcCircleProgressBar
      :width="200"
      :height="200"
      :r="80"
      v-model="progress"
      draggable
    />
  </div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
