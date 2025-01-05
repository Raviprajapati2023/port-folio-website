<template>
  <div>This deep child component</div>
  <button @click="updateLocation">{{ location }}</button>
  <button @click="show = !show" class="p-2 bg-green-200 rounded mx-4">
    Toggle hello
  </button>
  <Transition>
    <p v-if="show">hello</p>
  </Transition>
</template>
<script setup>
import { inject, ref } from "vue";
const show = ref(false);
const { location, updateLocation } = inject("location");
</script>
