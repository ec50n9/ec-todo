<template>
  <RouterView />
  <div
    absolute
    bottom-0
    w-full
    p-3
    transition-all
    duration-500
    transform
    :class="[showTabs ? 'translate-y-0' : 'translate-y-full']"
  >
    <EcTabBar
      :bg-color="themeStore.colors.lightPrimaryColor"
      :text-color="themeStore.colors.lightText"
      :selected-bg-color="themeStore.colors.primaryColor"
      :selected-text-color="themeStore.colors.lightPrimaryText"
      :tabs="tabs"
      @change="handleTabChange"
      rounded-4
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
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
    icon: "i-carbon-list-checked",
    text: "待办",
    path: "/todo",
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

// 底部栏显示动画
const showTabs = ref(false);
onMounted(() => (showTabs.value = true));
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
