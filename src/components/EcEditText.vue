<template>
  <div class="ec-edit-text" relative>
    <input
      type="text"
      :id="name"
      class="ec-edit-text__input"
      placeholder=" "
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <label class="ec-edit-text__label" :for="name">{{ placeHolder }}</label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  modelValue: string;
  placeHolder: string;
}>();
const emit = defineEmits(["update:modelValue"]);
</script>

<style>
.ec-edit-text__input {
  @apply block px-3 pb-3 pt-4 w-full text-sm text-gray-9 bg-transparent rounded-lg border-2 border-gray-3 duration-300;
}

.ec-edit-text__label {
  @apply absolute bg-white px-2 text-sm text-gray-5 duration-300 transform translate-y-2 scale-100 top-2 left-1 z-10 origin-c;
}

.ec-edit-text__input:focus {
  @apply outline-none ring-0 border-blue-6;
}

.ec-edit-text__input:not(:placeholder-shown) ~ .ec-edit-text__label,
.ec-edit-text__input:focus ~ .ec-edit-text__label {
  @apply translate-y--4 scale-75;
}

.ec-edit-text__input:focus ~ .ec-edit-text__label {
  @apply text-blue-6;
}
</style>
