<template>
  <ul ref="tabBar" class="tab-bar">
    <div class="tab-bar-border"></div>
    <li
      v-for="(tab, index) in tabs"
      :key="index"
      :class="[
        'tab-bar-item',
        selected === index ? 'tab-bar-item--active' : '',
      ]"
      @click="
        (e) => {
          selected === index
            ? tab.selectedFunc && tab.selectedFunc(e.currentTarget as Element)
            : selectTab(index);
        }
      "
    >
      <div
        :class="[
          'tab-bar-item__icon',
          selected === index ? tab.selectedIcon || tab.icon : tab.icon,
        ]"
      />
      <div class="tab-bar-item__text">
        {{ selected === index ? tab.selectedText || tab.text : tab.text }}
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import gsap from "gsap";

export type TabItem = {
  icon: string;
  text: string;
  path: string;
  selectedIcon?: string;
  selectedText?: string;
  selectedFunc?: (ele: Element) => void;
};

type Props = {
  tabs: TabItem[];
  bgColor?: string;
  textColor?: string;
  selectedBgColor?: string;
  selectedTextColor?: string;
  shadowColor?: string;
};

const props = withDefaults(defineProps<Props>(), {
  bgColor: "#A5B4FC",
  textColor: "#F3F4F6",
  selectedBgColor: "#6366F1",
  selectedTextColor: "#F9FAFB",
  shadowColor: "rgba(29, 78, 216, 0.2)",
});
const emit = defineEmits(["change"]);

const selected = ref(0);
const position = reactive({ startX: 0, width: 0 });
const tabBar = ref<HTMLUListElement>();

function selectTab(index: number) {
  selected.value = index;
  // 通知
  emit("change", index);
  // 移动背景边框
  const tab = tabBar.value?.querySelectorAll(".tab-bar-item")[index];
  if (tab) {
    const rect = tab.getBoundingClientRect();
    gsap.to(position, {
      startX: rect.left,
      width: rect.width,
      duration: 0.3,
    });
  }
}

onMounted(() => selectTab(0));
</script>

<style scoped>
.tab-bar {
  @apply w-full py-2 list-none
          flex justify-around items-center overflow-hidden;

  color: v-bind("$props.textColor");
  background-color: v-bind("$props.bgColor");
  box-shadow: v-bind("$props.shadowColor") 0px 8px 24px;
}

.tab-bar-border {
  @apply fixed left-0 h-11 rounded-xl;

  transform: translateX(v-bind("position.startX+'px'"));
  width: v-bind("position.width+'px'");

  background-color: v-bind("$props.selectedBgColor");
}

.tab-bar-item {
  @apply flex items-center gap-2 h-11 px-4 py-1 rounded-xl;
}

.tab-bar-item__icon {
  @apply text-3xl;
  transform: translateX(70%);
  transition: all 0.3s ease;
}

.tab-bar-item__text {
  @apply text-sm font-bold;
  opacity: 0;
  transform: translateX(-50%);
  transition: all 0.3s ease;
}

.tab-bar-item--active {
  color: v-bind("$props.selectedTextColor");
}

.tab-bar-item--active .tab-bar-item__icon {
  transform: translateX(0);
}

.tab-bar-item--active .tab-bar-item__text {
  opacity: 1;
  transform: translateX(0);
}
</style>
