import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import ProductsView from '../views/ProductsView.vue'
import RegisterView from '../views/RegisterView.vue'
import RegisterpointView from '../views/RegisterpointView.vue'
import ClientsView from '../views/ClientsView.vue'
import { useLoginStore } from '../stores/login'


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
      path: '/clients',
      name: 'clients',
      component: ClientsView,
      meta:{RequireAuth: true}
    },
    {
      path: '/registerpoint',
      name: 'registerpoint',
      component: RegisterpointView,
      meta:{RequireAuth: true}
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
});
router.beforeEach((to, from, next) => {
  const store = useLoginStore();
  const isAuthenticated = store.isLogin;
  const isAdmin = store.hasPermissions('admin');

  if (to.name === 'logout' && !isAuthenticated) {
    // Si no está autenticado, redirigir a la ruta de login
    next({ name: 'login' });
  } else if ((to.name === 'registerpoint' || to.name === 'clients') && (!isAuthenticated || !isAdmin)) {
    // Si no está autenticado o no es administrador, redirigir a la ruta de inicio
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
