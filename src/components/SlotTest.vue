<template>
  <div>
    This is component for test slot header
    <div>
      <slot :text="greetingMessage" :count="1"></slot>
    </div>
    {{ text }}
    <DeepChild />
  </div>
</template>
<script setup>
import DeepChild from "src/components/DeepChild.vue";
const greetingMessage = "hello";
defineProps({
  text: String,
});
</script>
