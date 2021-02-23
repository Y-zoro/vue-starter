import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/assets/styles/index.scss'
import svgicon from 'vue-svgicon'
import '@/assets/icons/components/index'
import api from './api'
// 按需引入element-ui
import { Button, Select, Option, Input } from 'element-ui'
Vue.use(Button).use(Select).use(Option).use(Input)

// 将接口方法全局注册
Vue.use(api)
Vue.config.productionTip = false
// vue-svgicon 配置
Vue.use(svgicon, {
  tagName: 'icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
