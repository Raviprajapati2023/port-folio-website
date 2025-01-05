<template>
  <div class="min-h-screen bg-gray-900 text-white p-8">
    <HeaderPage />
    <HeroSection />
    <SkillsPage />
    <EducationPage />
    <MyExperience />
  </div>
  <FooterPage />
</template>

<script setup>
import HeaderPage from "../components/HeaderPage.vue";
import HeroSection from "../components/HeroSection.vue";
import SkillsPage from "../components/SkillsPage.vue";
import FooterPage from "../components/FooterPage.vue";
import EducationPage from "../components/EducationPage.vue";
import MyExperience from "../components/MyExperience.vue";
</script>
