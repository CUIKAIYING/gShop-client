import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import HeaderTop from "./components/HeaderTop/HeaderTop.vue"

//注册全局组件
Vue.component("HeaderTop", HeaderTop)

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
