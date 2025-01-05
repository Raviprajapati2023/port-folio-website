<template>
  <div class="mt-16">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-white mb-8">My Experiences</h2>
      <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-8">
        <div
          v-for="exp in experiences"
          :key="exp.title"
          class="bg-navy-900 p-6 rounded-lg flex items-start gap-4"
        >
          <div class="bg-navy-800 p-3 rounded-lg">
            <svg
              class="w-8 h-8 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h4l3 10h8l3-6H7"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 10V6a3 3 0 00-6 0v4"
              />
            </svg>
          </div>
          <div>
            <h3 class="text-orange-500 font-bold text-xl mb-1">
              {{ exp.title }}
            </h3>
            <p class="text-orange-300 mb-1">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto my-6">
    <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
      <div
        class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-6"
      >
        <h3 class="text-white font-bold text-3xl">3+</h3>
        <p class="text-gray-300">Years of Experience</p>
      </div>

      <div
        class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-6"
      >
        <h3 class="text-white font-bold text-3xl">100%</h3>
        <p class="text-gray-300">Client Satisfaction</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const experiences = ref([
  {
    title: "Parking App",
    description:
      "Designed and developed a robust parking application to address critical parking challenges faced by users in urban areas across the USA. The app empowers users to rent out their unused land as parking spaces, allowing property owners to earn passive income. The solution has positively impacted urban mobility by reducing parking congestion in busy cities. Key features include real-time availability, secure payment integration, and advanced search filters to match users with the best parking options.",
  },
  {
    title: "POS System",
    description:
      "Built a comprehensive Point of Sale (POS) system to streamline retail operations for small and medium-sized businesses. The system supports essential features such as inventory management, sales analytics, and employee tracking. Designed with an intuitive user interface, the POS system minimizes operational complexities and significantly reduces checkout times. The solution also includes cloud-based data storage, ensuring secure access to sales records from anywhere.",
  },
  {
    title: "School Management App",
    description:
      "Developed an all-in-one school management application to simplify administrative tasks for schools. The app enables institutions to manage activities such as fee collection, attendance tracking, transportation logistics, homework assignments, quizzes, tests, and exams. By automating routine tasks, the app has streamlined workflows and saved significant time for educators and administrators. The platform also provides detailed reporting and seamless parent-teacher communication, enhancing overall school management.",
  },
  {
    title: "SkillForge Platform",
    description:
      "'SkillForge' is an advanced learning and upskilling platform designed to empower professionals and learners to achieve their career goals. Inspired by platforms like UpGrad, SkillForge offers a wide range of features, including an integrated collaborative code editor, real-time project collaboration, personalized course recommendations, and progress tracking powered by advanced analytics. The platform caters to both technical and non-technical skills, providing access to expert-led courses, live mentoring sessions, and certification programs. Its user-friendly interface and innovative tools make it the ultimate destination for skill enhancement and career development.",
  },
]);
</script>
