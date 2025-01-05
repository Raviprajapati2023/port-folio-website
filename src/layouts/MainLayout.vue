<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="capitalize">
          {{ $route.fullPath.replace("/", "").replace("-", " ") }}
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Quiz App",
    link: "/quiz-app",
    icon: "school",
  },
  {
    title: "Todo App",
    link: "/todo-app",
    icon: "school",
  },
  {
    title: "Weight Tracker",
    link: "/weight-tracker",
    icon: "school",
  },
  {
    title: "Finance Tracker",
    link: "/finance-tracker",
    icon: "school",
  },
  {
    title: "Flip Card",
    link: "/flip-card",
    icon: "school",
  },
  {
    title: "Practice",
    link: "/practice-page",
    icon: "school",
  },
  {
    title: "Task",
    link: "/task-page",
    icon: "school",
  },
  {
    title: "Grid Layout",
    link: "/grid-layout",
    icon: "school",
  },
  {
    title: "Konva Test",
    link: "/conva-test",
    icon: "school",
  },
  // {
  //   title: "Image Uploader",
  //   link: "/image-uploader",
  //   icon: "school",
  // },
  {
    title: "Carousel",
    link: "/carousel",
    icon: "school",
  },
  {
    title: "TypeCast",
    link: "/type-cast",
    icon: "school",
  },
  {
    title: "Digital Clock",
    link: "/digital-clock",
    icon: "watch",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
