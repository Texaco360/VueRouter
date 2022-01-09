import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TicketDetails from "../views/TicketDetails"; //HOME importeren uit de views folder

const routes = [
  {
    path: "/",//Root van het project
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/event/:id",//Root van het project
    name: "TicketDetails",
    props:true,
    component: TicketDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),//Als iemand de pagina wordt dit ook in de history van google browser geplaatst
  routes,
});

export default router;
