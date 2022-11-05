<template>
  <RouterView />
  <div absolute bottom-0 w-full p-3>
    <EcTabBar
      :bg-color="themeStore.colors.lightPrimaryColor"
      :text-color="themeStore.colors.lightSecondaryText"
      :selected-bg-color="themeStore.colors.primaryColor"
      :selected-text-color="themeStore.colors.lightPrimaryText"
      rounded-4
      :tabs="tabs"
      @change="handleTabChange"
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import EcTabBar from "../../components/EcTabBar.vue";
import { useThemeStore } from "../../store/ThemeStore";

const themeStore = useThemeStore();

// 底部栏
const router = useRouter();
const tabs = [
  {
    icon: "i-carbon-home",
    text: "首页",
    path: "/",
  },
  {
    icon: "i-carbon-person",
    text: "关于",
    path: "/about",
  },
];

function handleTabChange(index: number) {
  router.replace(tabs[index].path);
}
</script>

<style>
.skipLink {
  white-space: nowrap;
  margin: 1em auto;
  top: 0;
  position: fixed;
  left: 50%;
  margin-left: -72px;
  opacity: 0;
}
.skipLink:focus {
  opacity: 1;
  background-color: white;
  padding: 0.5em;
  border: 1px solid black;
}
</style>
