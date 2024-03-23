import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/issue-list',
      name: 'issueList',
      component: () => import('../views/IssueListView.vue')
    },
    {
      path: '/todos-issues',
      name: 'todosIssues',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TodosIssuesView.vue')
    }
  ]
})

export default router
