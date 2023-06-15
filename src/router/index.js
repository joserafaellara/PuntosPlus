import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import ProductsView from '../views/ProductsView.vue'
import RegisterView from '../views/RegisterView.vue'
import RegisterpointView from '../views/RegisterpointView.vue'
import { useLoginStore } from '../stores/login'
import ConfigView from '../views/ConfigView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView
    },
    {
      path: '/config',
      name: 'config',
      component: ConfigView,
      meta: { RequireAuth: true }
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/registerpoint',
      name: 'registerpoint',
      component: RegisterpointView,
      meta: { RequireAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useLoginStore()
  if (to.matched.some((r) => r.meta.RequireAuth) && !store.isLogin) {
    next('/login')
  } else {
    next()
  }
})

export default router
