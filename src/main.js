import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomeComponent from './pages/Site/Home/HomeComponent';

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomeComponent }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
