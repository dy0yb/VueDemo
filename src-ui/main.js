// 入口js ， 创建Vue实例
// untime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import {Button} from 'mint-ui'

Vue.component(Button.name, Button)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
