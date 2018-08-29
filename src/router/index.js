import Vue from "vue"

import VueRouter from "vue-router"

//引入对应的路由
import Msite from "../pages/Msite/Msite.vue"
import Order from "../pages/Order/Order.vue"
import Search from "../pages/Search/Search.vue"
import Profile from "../pages/Profile/Profile.vue"
import Login from "../pages/Login/Login.vue"

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
  //  应用中所有路由
    path:"/msite",
    component:Msite,
    meta:{
      showFooter:true
    }
  },
    {
      path:"/search",
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:"/order",
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:"/profile",
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:"/",
      redirect:"/msite"
    },
    {
      path:"/login",
      component:Login
    }
]
})