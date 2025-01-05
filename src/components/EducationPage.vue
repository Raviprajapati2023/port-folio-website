<template>
  <div class="grid md:grid-cols-2 gap-8">
    <section class="container mx-auto">
      <h2 class="text-4xl font-bold text-white mb-8">My Education</h2>
      <div class="space-y-6">
        <div
          v-for="edu in education"
          :key="edu.school"
          class="bg-navy-900 p-6 rounded-lg flex gap-4 shadow-lg grid md:grid-cols-4 sm:grid-cols-2"
        >
          <div
            class="bg-navy-800 p-4 rounded-lg flex items-center justify-center md:col-span-1"
          >
            <svg
              class="w-12 h-12 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14v4"
              />
            </svg>
          </div>
          <div class="md:col-span-3">
            <h3 class="text-orange-500 font-semibold text-xl mb-1">
              {{ edu.school }}
            </h3>
            <p class="text-orange-300">{{ edu.degree }}</p>
            <p class="text-gray-400 text-sm">{{ edu.year }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Me Section -->
    <section class="container mx-auto flex flex-col gap-8 px-12">
      <div>
        <h2 class="text-4xl font-bold text-white text-center mb-4">
          More About
          <span
            class="text-orange-500 bg-gradient-to-r from-primary to-secondary"
          >
            Me
          </span>
        </h2>
        <p class="text-base lg:text-lg text-gray-300 leading-relaxed">
          I am an enthusiastic and highly energetic developer with a proven
          track record of creating high-revenue-generating products. I have 3+
          years of experience in software development and expertise in HTML5,
          CSS3, JavaScript, Vue.js, Quasar, Tailwind CSS, Git, Jira, Bitbucket,
          Bootstrap, Pinia, Python, Panadas, Matplotlib and ML. My key strengths
          include UI/UX development, debugging, testing, and a strong
          understanding of development lifecycles and frameworks.
        </p>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div
          class="text-center rounded-lg bg-[#111a3e] shadow-lg border border-[#1f1641] p-4"
          v-for="card in StatCard"
          :key="card.label"
        >
          <h3 class="text-white font-bold text-2xl">{{ card.count }}</h3>
          <p class="text-sm text-gray-300">{{ card.label }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const education = ref([
  {
    school: "BARKAT ULLAH UNIVERSITY, BHOPAL, MADHYA PRADESH",
    degree: "B Sc",
    year: "2020",
  },
  {
    school: "SCHOOL OF EXCELLENCE, NASRULLAGANJ, MADHYA PRADESH",
    degree: "XII",
    year: "2017",
  },
]);
const StatCard = ref([
  {
    count: "5+",
    label: "Happy Clients",
  },
  {
    count: "5+",
    label: "Projects",
  },
  {
    count: "3+",
    label: "Years Experience",
  },
]);
</script>
