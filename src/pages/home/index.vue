<template>
  <div>
    <h2>一个丝滑的环形进度条</h2>
    <EcCircleProgressBar
      :width="200"
      :height="200"
      :r="80"
      :duration="0.5"
      :bg-color="themeStore.colors.lightText"
      :fill-color="themeStore.colors.primaryColor"
      :handle-color="themeStore.colors.darkPrimaryColor"
      v-model="progress"
      draggable
    />
    <p>{{ progress.toFixed(2) }}</p>
    <input type="number" v-model="progress" />
    <div :style="{ backgroundColor: themeStore.colors.darkPrimaryColor }">
      <p :style="{ color: themeStore.colors.lightPrimaryText }">hello, world</p>
      <p :style="{ color: themeStore.colors.lightText }">hello, world</p>
      <p :style="{ color: themeStore.colors.lightSecondaryText }">
        hello, world
      </p>
    </div>
    <div :style="{ backgroundColor: themeStore.colors.lightPrimaryColor }">
      <p :style="{ color: themeStore.colors.darkPrimaryText }">hello, world</p>
      <p :style="{ color: themeStore.colors.darkText }">hello, world</p>
      <p :style="{ color: themeStore.colors.darkSecondaryText }">
        hello, world
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EcCircleProgressBar from "../../components/EcCircleProgressBar.vue";
import { useThemeStore } from "../../store/ThemeStore";

const progress = ref(0.6);

const themeStore = useThemeStore();
</script>
