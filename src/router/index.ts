import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/questions',
    name: 'questions',
    component: () => import(/* webpackChunkName: "questions" */ '../views/QuestionsView.vue')
  },
  {
    path: '/results/:id',
    name: 'results',
    component: () => import(/* webpackChunkName: "results" */ '../views/ResultsView.vue'),
    props: true
  },
  {
    path: '/image-viewer',
    name: 'image-viewer',
    component: () => import('@/components/PngViewer.vue'),
    props: route => ({ currentImage: route.params.imagePath })
  },
  {
    path: '/ombo',
    name: 'ombo',
    component: () => import(/* webpackChunkName: "ombo" */ '../views/OnboardingPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
