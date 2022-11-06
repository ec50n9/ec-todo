<template>
  <Teleport to="body">
    <Transition name="fade" mode="out-in">
      <div v-if="visible" class="modal-wrapper" @click="handleClose">
        <div class="modal-shadow"></div>
        <div class="modal" @click="(e) => e.stopPropagation()">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ visible: boolean }>();
const emit = defineEmits(["update:visible"]);

function handleClose(event: Event) {
  emit("update:visible", false);
}
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.modal-shadow {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
  transform: none;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(2, 2);
}
</style>
