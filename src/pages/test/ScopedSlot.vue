<template>
  <div>
    <div>Child Component</div>

    <div class="p-2 m-2 border border-gray-500 border-1 solid rounded">
      <slot :user="user"></slot>
    </div>
  </div>
</template>
<script setup>
defineProps({
  user: { type: Object, default: () => {} },
});
</script>
