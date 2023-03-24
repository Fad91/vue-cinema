import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BasketView from "../views/BasketView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import FilmView from "../views/FilmView.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      layout: 'main-layout'
    }
  },
  {
    path: "/basket",
    name: "basket",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/BasketView.vue"),
    component: BasketView,
    meta: {
      layout: 'main-layout'
    }
  },
  {
    name: 'film',
    path: '/film/:id',
    component: FilmView,
    meta: {
      layout: 'main-layout'
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFoundView,
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
