<template>
  <div>
    <input type="file" accept="image/*" @change="handleFileChange" />
    <img :src="imageUrl" alt="Preview" v-if="imageUrl" />
  </div>
</template>

<script setup>
import { ref } from "vue";
const imageUrl = ref(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    this.imageUrl = e.target.result;
  };

  reader.readAsDataURL(file);
};
</script>
