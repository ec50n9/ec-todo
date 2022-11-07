<template>
  <ul ref="tabBar" class="tab-bar">
    <div class="tab-bg"></div>
    <li
      v-for="(tab, index) in tabs"
      :key="index"
      :class="['tab-item', index === selectedIndex ? 'tab-item--selected' : '']"
      @click="handleChange(index)"
    >
      {{ tab }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { onMounted, Prop, reactive, ref } from "vue";

type Props = {
  tabs: string[];
};

const props = defineProps<Props>();
const emit = defineEmits(["change"]);

const selectedIndex = ref(0);

// 选中背景
const bgPosition = reactive({
  width: 0,
  height: 0,
  left: 0,
  top: 0,
});
const tabBar = ref<HTMLUListElement>();

// 选中事件
function handleChange(index: number) {
  selectedIndex.value = index;
  const tab = tabBar.value?.querySelectorAll(".tab-item")[index];
  if (tab) {
    const rect = tab.getBoundingClientRect();
    console.log(rect);
    gsap.to(bgPosition, {
      width: rect.width,
      height: rect.height,
      left: rect.left,
      top: rect.top,
      duration: 0.3,
    });
  }
}

onMounted(() => handleChange(0));
</script>

<style scoped>
.tab-bar {
  @apply flex items-center p-1.3 bg-gray-2 rounded-xl;
}
.tab-bg {
  @apply fixed left-0 bg-white rounded-lg;
  width: v-bind("bgPosition.width+'px'");
  height: v-bind("bgPosition.height+'px'");
  transform: translateX(v-bind("bgPosition.left+'px'"));
}
.tab-item {
  @apply flex-1 py-1 text-gray-5 text-center transition duration-300 z-1;
}
.tab-item--selected {
  @apply text-gray-9;
}
</style>
