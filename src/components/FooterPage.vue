<template>
  <footer class="bg-gray-900">
    <div class="-mb-1">
      <svg
        fill="#000435"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        />
      </svg>
    </div>
    <div class="bg-[#000435] text-white">
      <div class="max-w-7xl mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- About Us -->
          <div>
            <h3 class="text-lg font-semibold mb-4">About Me</h3>
            <p class="text-gray-400">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
          </div>
          <!-- Social Media -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Connect Me</h3>
            <div class="flex space-x-4">
              <!-- GitHub Link -->
              <a
                :href="SocialMedia?.github"
                aria-label="GitHub"
                class="px-2 py-1 bg-gray-800 rounded hover:bg-gray-900"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fa-brands fa-github"></i>
              </a>

              <!-- LinkedIn Link -->
              <a
                :href="SocialMedia?.linkedin"
                aria-label="LinkedIn"
                class="px-2 py-1 bg-gray-800 rounded hover:bg-blue-700"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>

              <!-- Email Link -->
              <a
                :href="`mailto:${SocialMedia?.email}`"
                aria-label="Email"
                class="px-2 py-1 bg-gray-800 rounded hover:bg-red-600"
                rel="noopener noreferrer"
              >
                <i class="fa-regular fa-envelope"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Get in Touch</h3>
            <p class="text-gray-400 mb-2">
              Email:
              <a href="mailto:ravip.uidev@gmail.com" class="hover:underline"
                >ravip.uidev@gmail.com</a
              >
            </p>
            <p class="text-gray-400">
              Skype:
              <a
                href="skype:live:.cid.af21d63546a8e5ff?chat"
                class="hover:underline"
                >Chat With Me</a
              >
            </p>
          </div>
        </div>
        <div class="text-center mt-12 text-gray-500 text-sm">
          © 2025 Your Company Name. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
const SocialMedia = {
  github: "https://github.com/Raviprajapati2023",
  linkedin: "https://www.linkedin.com/in/ravi-prajapati-34a597215/",
  email: "ravip.uidev@gmail.com",
};
</script>
