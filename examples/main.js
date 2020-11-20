import Vue from 'vue'
import ElementUI from 'element-ui'
import FarmlayUI from 'farmlay-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
Vue.use(ElementUI)
Vue.use(FarmlayUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
