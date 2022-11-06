<template>
  <div ref="layout">
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
    <!-- 创建todo弹窗 -->
    <EcModal v-model:visible="createTodoModal">
      <div w-full p-4>
        <div p-6 bg-white shadow-lg rounded-xl>
          <h1 mb-4 text-xl>添加</h1>
          <div flex flex-col gap-4>
            <EcFloatingLabel v-model="todoData.title" place-holder="标题" />
            <EcFloatingLabel v-model="todoData.desc" place-holder="备注" />
          </div>
          <div mt-4 flex justify-end gap-4>
            <button px-4 py-2 text-gray-7 bg-gray-1 rounded-md>取消</button>
            <button px-4 py-2 text-white bg-blue-6 rounded-md>添加</button>
          </div>
        </div>
      </div>
    </EcModal>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import EcTabBar from "../../components/EcTabBar.vue";
import { useThemeStore } from "../../store/ThemeStore";
import { TabItem } from "../../components/EcTabBar.vue";
import EcModal from "../../components/EcModal.vue";
import EcFloatingLabel from "../../components/EcFloatingLabel.vue";

const themeStore = useThemeStore();

// 创建todo
const layout = ref<Element>();
const createTodoModal = ref(false);
const todoData = reactive({
  title: "",
  desc: "",
});

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
    selectedFunc: (ele) => {
      createTodoModal.value = true;
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
