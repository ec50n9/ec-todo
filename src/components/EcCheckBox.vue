<template>
  <svg
    viewBox="0 0 300 300"
    width="30"
    height="30"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
  >
    <ellipse
      rx="112.374069"
      ry="112.374069"
      transform="matrix(-1.153139 0 0-1.153139 150 150)"
      fill="none"
      stroke="#3f5787"
      stroke-width="20"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-dasharray="706.07"
      :stroke-dashoffset="params.circleOffset"
    />
    <path
      d="M60.10838,136.00587q26.285447,72.269753,68.336911,72.269753t99.600026-142.775308"
      transform="matrix(1.435016 0 0 1.435026-65.839397-45.171948)"
      fill="none"
      stroke="#3f5787"
      stroke-width="20"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-dasharray="286.12829"
      :stroke-dashoffset="params.pathOffset"
    />
  </svg>

  <svg @click="handleClick" viewBox="0 0 300 300" width="30" height="30">
    <path
      :class="['hook', checked ? 'hook--checked' : '']"
      d="M63.521468,138.157895q35.31856,70.117728,64.923823,70.117728t108.03324-138.157894"
      transform="matrix(1.435016 0 0 1.435026-65.252399-49.750849)"
      fill="none"
      stroke="#3f5787"
      stroke-width="20"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-dasharray="300"
    />
  </svg>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { computed, reactive, watch } from "vue";

const props = defineProps<{
  checked: boolean;
}>();
const emit = defineEmits(["change"]);

function handleClick() {
  emit("change", !props.checked);
}

// 打勾动画
const params = reactive({
  circleOffset: 0,
  pathOffset: 286.12829,
});
const _checked = computed(() => props.checked);
let tl: gsap.core.Timeline | null = null;
watch(_checked, (newValue) => {
  console.log(newValue);
  if (newValue) {
    tl?.clear();
    tl = gsap
      .timeline({ defaults: { duration: 0.3 } })
      .to(params, { circleOffset: 706.07 })
      .to(params, { pathOffset: 0 });
  } else {
    tl?.clear();
    tl = gsap
      .timeline({ defaults: { duration: 0.3 } })
      .to(params, { pathOffset: 286.12829 })
      .to(params, { circleOffset: 0 });
  }
});
</script>

<style>
.hook {
  stroke-dashoffset: 300;
  transition: all 0.3s ease;
}

.hook--checked {
  stroke-dashoffset: 0;
}
</style>
