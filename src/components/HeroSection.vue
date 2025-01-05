<template>
  <!-- Services Section -->
  <section class="container mx-auto mb-16">
    <h2 class="text-4xl font-bold mb-12">My Services</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="service in services"
        :key="service.title"
        class="bg-navy-900 p-8 rounded-lg transition-transform hover:scale-105"
      >
        <div class="w-16 h-16 mb-6">
          <q-icon :name="service.icon" size="3rem" class="text-orange-500" />
        </div>
        <h3 class="text-xl font-bold text-orange-500 mb-4">
          {{ service.title }}
        </h3>
        <p class="text-gray-300 leading-relaxed">
          {{ service.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const services = [
  {
    icon: "code",
    title: "WEB DEVELOPMENT",
    description:
      "Have hands-on experience creating UI development using React Js, Vue Js, Nuxt js, Microsoft Authentication, stripe payment gateway, and more.",
  },
  {
    icon: "edit",
    title: "TECHNICAL WRITING",
    description:
      "A technical writer may be writing for a specific industry, tailoring the language toward the education level of its audience.",
  },
  {
    icon: "smartphone",
    title: "MOBILE DEVELOPMENT",
    description:
      "The software can be preinstalled on the device, downloaded from a mobile app store or accessed through a mobile web browser.",
  },
  {
    icon: "code",
    title: "WEB DEVELOPMENT",
    description:
      "Experienced in HTML5, CSS3, JavaScript, React Js, Vue Js, Quasar, Tailwind CSS, GIT, Jira, Bitbucket, Bootstrap, and Pinia Technologies.",
  },
  {
    icon: "bug_report",
    title: "UNIT TESTING",
    description:
      'Unit testing is the process of testing the smallest functional units of code, or "units", in a software application.',
  },
  {
    icon: "palette",
    title: "WEB DESIGN",
    description:
      "It represents both functional and non-functional requirements in an organized manner to implement by developers.",
  },
];
</script>
