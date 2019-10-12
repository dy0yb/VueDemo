// 入口js ， 创建Vue实例
// untime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App'

Vue.use(VueResource) // 内部会给vm对象和组件对象添加一个属性：$http

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
