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
    <p>{{ progress.toFixed(2) }}</p>
    <input type="number" v-model="progress" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const progress = ref(0.6);
</script>
