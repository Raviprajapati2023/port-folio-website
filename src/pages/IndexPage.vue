<template>
  <div class="min-h-screen bg-gray-900 text-white px-8 py-2">
    <HeaderPage />
    <HeroSection id="services" />
    <SkillsPage id="skills" />
    <EducationPage id="aboutMe" />
    <MyExperience />
  </div>
  <FooterPage id="contact" />
  <button
    v-if="showScrollToTopButton"
    @click="scrollToTop"
    class="scroll-to-top-btn fixed bottom-4 right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-400 transition"
  >
    <!-- ↑ -->
    <i class="fa-solid fa-angles-up"></i>
    <q-tooltip class="bg-orange-500 text-white">Go To Top</q-tooltip>
  </button>
</template>

<script setup>
import HeaderPage from "../components/HeaderPage.vue";
import HeroSection from "../components/HeroSection.vue";
import SkillsPage from "../components/SkillsPage.vue";
import FooterPage from "../components/FooterPage.vue";
import EducationPage from "../components/EducationPage.vue";
import MyExperience from "../components/MyExperience.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const showScrollToTopButton = ref(false);

const checkScrollPosition = () => {
  showScrollToTopButton.value = window.scrollY > window.innerHeight / 2;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", checkScrollPosition);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScrollPosition);
});
</script>
