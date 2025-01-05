const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/quiz-app", component: () => import("pages/QuizApp.vue") },
      { path: "/quiz-app", component: () => import("pages/QuizApp.vue") },
      { path: "/flip-card", component: () => import("pages/FlipCard.vue") },
      { path: "/todo-app", component: () => import("pages/TodoApp.vue") },
      {
        path: "/finance-tracker",
        component: () => import("pages/FinanceTracker.vue"),
      },
      {
        path: "/weight-tracker",
        component: () => import("pages/WeightTracker.vue"),
      },
      {
        path: "/practice-page",
        component: () => import("pages/PracticePage.vue"),
      },
      {
        path: "/task-page",
        component: () => import("pages/TaskPage.vue"),
      },
      {
        path: "/image-uploader",
        component: () => import("pages/ImageUploader.vue"),
      },
      {
        path: "/carousel",
        component: () => import("pages/CarouselPage.vue"),
      },
      {
        path: "/grid-layout",
        component: () => import("pages/GridLayout.vue"),
      },
      {
        path: "/type-cast",
        component: () => import("pages/TypeCast.vue"),
      },
      {
        path: "/conva-test",
        component: () => import("pages/KonvaTest.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
