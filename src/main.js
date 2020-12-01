import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './common/reset.css'
import less from 'less'
import 'amfe-flexible'
import './vant'
import directive from '@/directive/index'


Vue.use(less)
Vue.use(directive)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
