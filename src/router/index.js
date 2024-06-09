import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ServicesPage from '../views/ServicesPage.vue'
import ContactPage from '../views/ContactPage.vue'
import Greeting from '../views/GreetingPage.vue'
import Overview from '../views/OverviewPage.vue'
import Access from '../views/AccessPage.vue'
import PrivacypolicyPage from '../views/PrivacypolicyPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/services/greeting',
    name: 'ServicesPage',
    component: ServicesPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/privacy',
    name: 'PrivacypolicyPage',
    component: PrivacypolicyPage
  },
  {
    path: '/services/greeting',
    component: Greeting
  },
  {
    path: '/services/overview',
    component: Overview
  },
  {
    path: '/services/access',
    component: Access
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router