<template>
  <q-page class="bg-gray-100 text-gray-800">
    <!-- Hero Section -->
    <section
      id="hero"
      class="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 text-white"
    >
      <div class="text-center">
        <h1 class="text-5xl font-bold mb-4">Hi, I'm Ravi Prajapati</h1>
        <p class="text-lg mb-6">
          Freelance Web Developer & Software Consultant
        </p>
        <div class="space-x-4">
          <q-btn
            label="Hire Me"
            color="white"
            text-color="blue-500"
            class="font-bold"
          />
          <q-btn
            label="View Portfolio"
            outline
            color="white"
            class="font-bold"
          />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 bg-white text-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">About Me</h2>
        <p class="text-lg text-center">
          I'm a passionate web developer with over 2 years of experience in
          creating dynamic and responsive websites. I specialize in Vue.js,
          Quasar, and Tailwind CSS to build modern and scalable web
          applications.
        </p>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="bg-white p-6 shadow rounded">
            <p class="font-bold">Vue.js</p>
          </div>
          <div class="bg-white p-6 shadow rounded">
            <p class="font-bold">Quasar</p>
          </div>
          <div class="bg-white p-6 shadow rounded">
            <p class="font-bold">Tailwind CSS</p>
          </div>
          <div class="bg-white p-6 shadow rounded">
            <p class="font-bold">JavaScript</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-16 bg-white text-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-100 p-6 shadow rounded">
            <h3 class="font-bold text-xl mb-2">Project 1</h3>
            <p>A modern web app built with Vue.js and Quasar.</p>
          </div>
          <div class="bg-gray-100 p-6 shadow rounded">
            <h3 class="font-bold text-xl mb-2">Project 2</h3>
            <p>A responsive e-commerce website using Tailwind CSS.</p>
          </div>
          <div class="bg-gray-100 p-6 shadow rounded">
            <h3 class="font-bold text-xl mb-2">Project 3</h3>
            <p>A custom software solution for small businesses.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-16 bg-blue-500 text-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div class="max-w-lg mx-auto bg-white text-gray-800 p-8 rounded shadow">
          <q-input class="mb-4" filled label="Name" />
          <q-input class="mb-4" filled label="Email" />
          <q-input class="mb-4" filled label="Message" type="textarea" />
          <q-btn
            class="w-full bg-blue-500 text-white font-bold"
            label="Send Message"
          />
        </div>
      </div>
    </section>
  </q-page>
</template>
