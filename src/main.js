import Vue from "vue"
import {Button} from "mint-ui"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import "./mock/MockServer"


import HeaderTop from "./components/HeaderTop/HeaderTop.vue"


//注册全局组件
Vue.component("HeaderTop", HeaderTop)
Vue.component(Button.name, Button)

new Vue({
  el:"#app",
  components:{
    App
  },
  template:"<App/>",
//  配置路由器
  router,
  store
})
