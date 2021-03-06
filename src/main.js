import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomeComponent from './pages/Site/Home/HomeComponent';
import LoginComponent from './pages/Site/Auth/LoginComponent.vue';
import ForgotPasswordComponent from './pages/Site/Auth/ForgotPasswordComponent.vue';
import RegisterComponent from './pages/Site/Auth/RegisterComponent.vue';
import News from './pages/Site/News/News.vue';


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/login', component: LoginComponent },
  { path: '/cadastrar', component: RegisterComponent },
  { path: '/recuperarSenha', component: ForgotPasswordComponent },
  { path: '/noticias', component: News }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
