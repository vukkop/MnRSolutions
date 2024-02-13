import { createRouter, createWebHashHistory } from "vue-router";
import AppHome from "../views/AppHome.vue";
import AppAbout from "../views/AppAbout.vue";
import AppServices from "../views/AppServices.vue";
import AppContact from "../views/AppContact.vue";
import AppBlog from "../views/AppBlog.vue";
import AppTestimonials from "../views/AppTestimonials.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "AppHome",
    component: AppHome,
  },
  {
    path: "/about",
    name: "AppAbout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AppAbout,
  },
  {
    path: "/services",
    name: "AppServices",
    component: AppServices,
  },
  {
    path: "/contact",
    name: "AppContact",
    component: AppContact,
  },
  {
    path: "/blog",
    name: "AppBlog",
    component: AppBlog,
  },
  {
    path: "/testimonials",
    name: "AppTestimonials",
    component: AppTestimonials,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })

export default router;
