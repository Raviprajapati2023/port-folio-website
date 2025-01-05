<template>
  <header class="container mx-auto mb-16">
    <nav class="flex justify-between items-center mb-16">
      <div
        class="text-4xl font-bold bg-gradient-to-b from-red-500 via-indigo-500 to-teal-500 text-transparent bg-clip-text"
      >
        R
      </div>
      <div class="flex gap-6">
        <a
          v-for="item in menuItems"
          :key="item.label"
          class="hover:text-orange-500 transition-colors"
          :href="`#${item.link}`"
        >
          {{ item.label }}
        </a>
      </div>
    </nav>

    <div
      id="services"
      class="flex items-center justify-between gap-x-2 gap-y-6"
    >
      <div class="max-w-2xl">
        <h1 class="text-5xl font-bold mb-4">
          Hi, I'm
          <span
            class="bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text"
            >{{ name }}</span
          >
        </h1>
        <p class="text-gray-300 text-xl mb-8">
          {{ description }}
        </p>
        <div class="flex gap-4 sm:my-6">
          <q-btn color="orange" class="px-6 py-2 rounded-md" label="Hire Me" />
          <q-btn
            color="orange"
            class="px-6 py-2 rounded-md"
            label="Download Resume"
            disabled
          >
            <q-icon name="download" class="ml-2" />
          </q-btn>
        </div>
      </div>
      <div
        class="w-80 h-80 rounded-full border-4 border-orange-500 overflow-hidden sm:my-4"
      >
        <img
          :src="profileImage"
          alt="Profile"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const profileImage = ref("/public/profile.jpeg");
const name = ref("Ravi");
const description = ref(
  "An enthusiastic & highly energetic Technical development high revenue generating products."
);

const menuItems = ref([
  {
    label: "Services",
    link: "services",
  },
  {
    label: "Skills",
    link: "skills",
  },
  {
    label: "About Me",
    link: "aboutMe",
  },
  {
    label: "Contact",
    link: "contact",
  },
]);
</script>
