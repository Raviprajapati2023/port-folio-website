<template>
  <div class="container mx-auto mb-16">
    <h2 class="text-4xl font-bold text-white mb-8">
      My <span class="text-orange-500">Skills</span>
    </h2>
    <div class="flex flex-wrap gap-3">
      <div
        v-for="skill in skills"
        :key="skill"
        class="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2"
      >
        {{ skill }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const skills = ref([
  "HTML & CSS",
  "JavaScript",
  "Vue.js",
  "React.js",
  "Vuex",
  "Pinia",
  "Axios",
  "SaaS",
  "Nuxt.js",
  "Vuetify",
  "Prime Vue",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "Quasar",
  "Bootstrap",
  "Github",
  "Bitbucket",
  "Authentication",
  "MongoDB",
  "Kendo UI",
  "Python",
  "ML",
]);
</script>
