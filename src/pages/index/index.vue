<template>
  <div @scroll="handleContainerScroll" h-full overflow-scroll>
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <Component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </div>
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
import { TabItem } from "../../components/EcTabBar.vue";

const themeStore = useThemeStore();

// 底部栏
const router = useRouter();
const tabs: TabItem[] = [
  {
    icon: "i-carbon-home",
    text: "首页",
    path: "/",
  },
  {
    icon: "i-carbon-list-checked",
    text: "待办",
    path: "/todo",
    selectedIcon: "i-akar-icons:plus",
    selectedText: "添加",
    selectedFunc: () => {
      console.log("hello, world");
    },
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

// 滚动时自动隐藏底部栏
let oldScrollTop = 0;
function handleContainerScroll(event: Event) {
  if (!event.target) return;
  const curScrollTop = (event.target as Element).scrollTop;
  showTabs.value = curScrollTop < oldScrollTop;
  oldScrollTop = curScrollTop;
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
