import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Product from '../components/Product.vue'
import CheckOut from '@/views/CheckOut.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,Product
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  
  },
  {path:'/checkout',
    name:'CheckOut',
    component:CheckOut,
    
  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
