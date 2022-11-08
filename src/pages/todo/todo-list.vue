<template>
  <div>
    <ul px-5>
      <slot></slot>
    </ul>
    <EcModal v-model:visible="clockModalVisible">
      <div w-full p-3>
        <div p-6 bg-white shadow-lg rounded-2xl>
          <h1 mb-8 text-2xl text-center>选择时长</h1>
          <div mb-8 relative>
            <EcCircleProgressBar
              mx-auto
              :width="200"
              :height="200"
              :r="80"
              :duration="0.5"
              :bg-color="themeStore.colors.lightText"
              :fill-color="themeStore.colors.primaryColor"
              :handle-color="themeStore.colors.darkPrimaryColor"
              v-model="progress"
              :max-step="60"
              draggable
            />
            <div
              absolute
              class="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              {{ Math.round(progress * 60) }}分钟
            </div>
          </div>
          <div flex justify-center>
            <EcButton @click="handleStart" type="primary">开始</EcButton>
          </div>
        </div>
      </div>
    </EcModal>
  </div>
</template>

<script setup lang="ts">
import EcModal from "../../components/EcModal.vue";
import { provide, ref } from "vue";
import EcCircleProgressBar from "../../components/EcCircleProgressBar.vue";
import { useThemeStore } from "../../store/ThemeStore";
import EcButton from "../../components/EcButton.vue";
import { useRouter } from "vue-router";

const themeStore = useThemeStore();

// 时间选择弹窗
const progress = ref(0.5);
const clockModalVisible = ref(false);
provide("showClockModal", () => (clockModalVisible.value = true));

// 跳转到计时页面
const router = useRouter();
function handleStart() {
  router.push("/clock");
}
</script>
