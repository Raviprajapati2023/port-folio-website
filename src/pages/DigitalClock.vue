<template>
  <div class="flex justify-center items-center h-screen">
    <div
      class="bg-gray-800 text-white p-8 rounded-lg shadow-lg text-4xl font-mono"
    >
      {{ currentTime }}
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const currentTime = ref("");

const updateClock = () => {
  const now = new Date();
  let hrs = now.getHours();
  const minutes = now.getMinutes();
  const second = now.getSeconds();
  const isAm = hrs < 12;

  const ampm = isAm ? "AM" : "PM";

  hrs = hrs % 12 || 12;

  currentTime.value = `${String(hrs).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(second).padStart(2, "0")} ${ampm}`;
};

onMounted(() => {
  updateClock();
  setInterval(updateClock, 1000);
});
</script>
