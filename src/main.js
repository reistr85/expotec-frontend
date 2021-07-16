import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import HomeComponent from './pages/Site/Home/HomeComponent';
import LoginComponent from './pages/Site/Auth/LoginComponent.vue';
import ForgotPasswordComponent from './pages/Site/Auth/ForgotPasswordComponent.vue';
import RegisterComponent from './pages/Site/Auth/RegisterComponent.vue';
import News from './pages/Site/News/News.vue';
import Eventos from './pages/Site/Eventos/Eventos.vue';
import Certificado from './pages/Site/Certificado/Certificados.vue';


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/login', component: LoginComponent },
  { path: '/cadastrar', component: RegisterComponent },
  { path: '/recuperarSenha', component: ForgotPasswordComponent },
  { path: '/noticias', component: News },
  { path: '/eventos', component: Eventos },
  { path: '/imprimirCertificado', component: Certificado },
  { path: '/certificados', component: Certificado }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
