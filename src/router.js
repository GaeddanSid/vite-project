import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import ActivityView from './views/ActivityView.vue'
import ExcuserView from './views/ExcuserView.vue'
import SavedExcusesView from './views/SavedExcusesView.vue'
import ProfileView from './views/ProfileView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: ActivityView,
      path: '/activity'
    },
    {
      component: ExcuserView,
      path: '/excuser'
    },
    {
      component: SavedExcusesView,
      path: '/saved-excuses:pageNumber?'
    },
    {
      component: ProfileView,
      path: '/profile/:userName?'
    }
  ]
})
