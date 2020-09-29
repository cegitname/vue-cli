import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './common/reset.css'
import less from 'less'
import 'amfe-flexible'
import './vant'

Vue.use(less)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
