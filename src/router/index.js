import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import HomeView from '../views/HomeView.vue'
import DashboardView from '@/views/main_views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import NotAllowedView from "@/views/NotAllowedView.vue";

// imports
import { isLoggedIn } from '@/auth/index'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/dashboard",
    component: HomeView,
    meta: { requiresAuth: true, },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: DashboardView,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/not-allowed",
        name: "not-allowed",
        component: NotAllowedView,
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


const usertype = store.getters.getUser.userType;
router.beforeEach(async (to, from, next) => {
  if (to.name == "login" && isLoggedIn()) {
    console.log('logged in')
    return next({ path: "/" });
  } else if (to.meta.requiresAuth && !isLoggedIn()) {
    console.log('not logged in')
    return next({ path: "/login", });
  } 
  // else {
  //   if(to.meta.requiresAdmin && usertype != "admin"){
  //     next({
  //       path: "/not-allowed",
  //       query: { redirect: to.fullPath },
  //     });
  //   } else {
  //     next();
  //   }
  // }
  console.log('next')
  next();
});

export default router
