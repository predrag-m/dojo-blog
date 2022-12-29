import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/posts/:id",
      name: "Details",
      // route level code-splitting
      // this generates a separate chunk (Details.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DetailsView.vue"),
      props: true,
    },
    {
      path: "/test",
      name: "Test",
      // route level code-splitting
      // this generates a separate chunk (Test.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TestView.vue"),
    },
    {
      path: "/test-2",
      name: "Test-2",
      // route level code-splitting
      // this generates a separate chunk (Test2.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Test2View.vue"),
    },
    {
      path: "/test-3",
      name: "Test-3",
      // route level code-splitting
      // this generates a separate chunk (Test3.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Test3View.vue"),
    },
  ],
});

export default router;
