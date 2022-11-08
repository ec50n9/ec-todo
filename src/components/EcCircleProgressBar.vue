<template>
  <svg
    ref="root"
    :width="width"
    :height="height"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    @touchmove="onMouseMove"
    @touchend="onMouseUp"
    style="user-select: none"
  >
    <circle
      fill="none"
      :cx="centre.x"
      :cy="centre.y"
      :r="r"
      :stroke="bgColor"
      stroke-width="20"
    />
    <path
      ref="progress"
      fill="none"
      :d="`M ${centre.x}, ${centre.y - r} A ${r}, ${r}, 0, 0, 1, ${centre.x}, ${
        centre.y + r
      } A ${r}, ${r}, 0, 0, 1, ${centre.x}, ${centre.y - r}`"
      :stroke="fillColor"
      stroke-width="13"
      stroke-linecap="round"
      :stroke-dasharray="dasharray"
    />
    <circle
      v-if="draggable"
      :fill="handleColor"
      :cx="point.x"
      :cy="point.y"
      r="13"
    />
    <circle
      v-if="draggable"
      @mousedown="onMouseDown"
      @touchstart="onMouseDown"
      :fill="handleColor"
      :fill-opacity="dragging ? 0.3 : 0"
      :cx="point.x"
      :cy="point.y"
      r="20"
    />
  </svg>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted, computed, Ref } from "vue";
import gsap from "gsap";

// 事件流：moveTo => v-model改变 => 监听到v-model改变 => rateTo

const props = defineProps({
  draggable: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Number,
    default: 0,
  },
  maxStep: {
    type: Number,
    default: 100,
  },
  width: {
    type: Number,
    default: 200,
  },
  height: {
    type: Number,
    default: 200,
  },
  r: {
    type: Number,
    default: 50,
  },
  duration: {
    type: Number,
    default: 0.3,
  },
  bgColor: {
    type: String,
    default: "#EBEDF0",
  },
  fillColor: {
    type: String,
    default: "#10B981",
  },
  handleColor: {
    type: String,
    default: "#059669",
  },
});
const emit = defineEmits(["update:modelValue"]);

// 圆心
const root: Ref<SVGElement | null> = ref(null);
const centre = { x: props.width / 2, y: props.height / 2 };
// 圆的周长
const girth = 2 * Math.PI * props.r;
// 百分比进度
const rate = reactive({ value: 0 });

// 路径长度
const dasharray = ref("");
// 监听百分比变化改变路径长度
watch(rate, (newRate) => {
  dasharray.value = `${newRate.value * girth} ${girth}`;
});

// 进度条元素
const progress: Ref<SVGPathElement | null> = ref(null);
// 拖拽点的位置
const point = reactive({
  x: 0,
  y: 0,
});
// 监听进度变化改变拖拽点的位置
watch(rate, (newRate) => {
  const path = progress.value;
  const { x, y } = path!.getPointAtLength(newRate.value * girth);
  point.x = x;
  point.y = y;
});

// 通知改变值
const realStep = 1 / props.maxStep;
function moveTo(value: number) {
  if (value <= 0 || value - rate.value > 0.25) value = 0;
  else if (value > 1 || value - rate.value < -0.25) value = 1;
  value = Math.round(value / realStep) / props.maxStep;
  emit("update:modelValue", value);
}

// 改变自身值
function rateTo(value: number) {
  if (value <= 0) value = 0;
  else if (value > 1) value = 1;
  gsap.to(rate, { value, duration: props.duration });
}

// 监听进度值变化
const temp = computed(() => props.modelValue);
watch(temp, (newValue) => rateTo(newValue));

// 初始化进度条
onMounted(() => rateTo(props.modelValue));

// 拖拽点相关
let dragging = ref(false);
// 计算两点角度
type Point = {
  x: number;
  y: number;
};

/**
 * 计算两点连线的角度
 * @param start 起始点坐标
 * @param end 结束点坐标
 */
function getAngle(start: Point, end: Point) {
  const diffX = end.x - start.x;
  const diffY = end.y - start.y;
  return Math.atan(diffY / diffX) / (2 * Math.PI);
}

/**
 * 拖拽点按下
 */
function onMouseDown() {
  dragging.value = true;
}

/**
 * 拖拽点松开
 */
function onMouseUp() {
  dragging.value = false;
}

/**
 * 拖拽点移动
 * @param event 事件
 */
function onMouseMove(event: MouseEvent | TouchEvent) {
  // 阻止冒泡
  if (!dragging.value) return;
  event.preventDefault();

  // 获取点击坐标
  let x = 0,
    y = 0;
  if (event instanceof MouseEvent) ({ x, y } = event);
  else ({ clientX: x, clientY: y } = event.targetTouches[0]);

  // 计算真实位置坐标
  const rect = root.value!.getBoundingClientRect();
  const curX = x - rect.x;
  const curY = y - rect.y;

  // 计算角度
  const angle = getAngle({ x: centre.x, y: centre.y }, { x: curX, y: curY });
  // 设置位置
  if (curX > centre.x) {
    moveTo(0.25 + angle);
  } else {
    moveTo(0.75 + angle);
  }
}
</script>
