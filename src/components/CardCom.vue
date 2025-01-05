<template>
  <div class="card" @click="selectCard">
    <div class="card-face is-front" v-if="visible">
      {{ value }} - {{ position }} - {{ matched }}
    </div>
    <div class="card-face is-back" v-else>Back</div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  value: { type: Number, required: true },
  position: { type: Number, required: true },
  visible: { type: Boolean, default: false },
  matched: { type: Boolean, default: false },
});
const emit = defineEmits(["select-card"]);

const selectCard = () => {
  emit("select-card", {
    position: props.position,
    faceValue: props.value,
  });
};
</script>
<style scoped>
.card {
  border: 5px solid #ccc;
  text-align: center;
  position: relative;
}
.card-face.is-front {
  background-color: red;
  color: white;
}
.card-face.is-back {
  background-color: blue;
  color: white;
}
.card-face {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
