<template>
  <div class="mx-12 my-12">
    <ScopedSlot v-for="user in users" :key="user.id" :user="user">
      <template #default="{ user }">
        <h2>Name: {{ user.name }}</h2>
        <p>Email: {{ user.email }}</p>
        <p>Age: {{ user.age }}</p>
      </template>
    </ScopedSlot>
  </div>
</template>
<script setup>
import { ref } from "vue";
import ScopedSlot from "./test/ScopedSlot.vue";
const users = ref([
  { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 28 },
]);
</script>
