import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ServicesPage from '../views/ServicesPage.vue'
import ContactPage from '../views/ContactPage.vue'
import Greeting from '../views/GreetingPage.vue'
import Overview from '../views/OverviewPage.vue'
import Access from '../views/AccessPage.vue'
import PrivacypolicyPage from '../views/PrivacypolicyPage.vue'
import RecruitmentinformationPage from '../views/RecruitmentinformationPage.vue'
import SubRecruitmentinformationPage from '../views/SubRecruitmentinformationPage.vue'
import RecruitContactPage from '../views/RecruitContactPage.vue'
import IntranetPage from '../views/IntranetPage.vue'
import LoadingScreen from '../components/LoadingScreen.vue'
import LoginPage from '../views/LoginPage.vue'

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
  },
  {
  path: '/Recruitment',
  name: 'RecruitmentinformationPage',
  component: RecruitmentinformationPage
  },
  {
    path: '/SubRecruitment',
    name: 'SubRecruitmentinformationPage',
    component: SubRecruitmentinformationPage
  },
  {
    path: '/RecruitContact',
    name: 'RecruitContactPage',
    component: RecruitContactPage
  },
  {
    path: '/Intranet',
    name: 'IntranetPage',
    component: IntranetPage,
    meta: { requiresAuth: true }

  },
  {
    path: '/Loading',
    name: 'LoadingScreen',
    component: LoadingScreen
  },
  {
    path: '/Login',
    name: 'LoginPage',
    component: LoginPage
  }
]

const router = createRouter({
  history : createWebHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  const isLoggedIn = !!sessionStorage.getItem('authToken');

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

window.addEventListener('load', () => {
  sessionStorage.removeItem('authToken');
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('name');
});

export default router