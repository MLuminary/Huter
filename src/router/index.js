import Vue from 'vue'
import Router from 'vue-router'
import MyNavHome from '@/components/MyNavHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyNavHome',
      component: MyNavHome
    }
  ]
})
