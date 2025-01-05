<template>
  <div class="my-2">
    <input
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
      class="outline"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
defineProps({
  modelValue: String,
});
</script>
