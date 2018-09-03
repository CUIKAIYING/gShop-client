// 包含n个直接更新state的函数的对象模块
import Vue from "vue"
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_CODE,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREATE_FOOD_COUNT,
  DECREATE_FOOD_COUNT
} from "./mutation-types"
export default {
  [RECEIVE_ADDRESS](state, {address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}){
    state.shops = shops
  },

  [RECEIVE_USER](state, {user}){
    state.user = user
  },
  [RESET_USER](state){
    state.user = {}
  },
  [RECEIVE_GOODS](state,{goods}){
    state.goods = goods
  },
  [RECEIVE_RATINGS](state,{ratings}){
    state.ratings = ratings
  },
  [RECEIVE_INFO](state,{info}){
    state.info = info
  },
  [INCREATE_FOOD_COUNT](state,{food}){
    if(food.count){ //如果有food.count
      food.count++
    }else{  // 如果没有food.count， 给food添加一个属性count
      // food.count = 1
    //  此时方法实现但是页面没有显示——count是新添加的属性，没有数据绑定也就是没有数据劫持——此时需要借助一个方法Vue.set
      Vue.set(food, "count", 1)
    //  有数量添加到shopCart中
      state.cartFoods.push(food)
    }
  },
  [DECREATE_FOOD_COUNT](state,{food}){
    if(food.count){ //food.count有值才可以减
      food.count--

    //  当数量为0时从cartFoods中删除food
      if(food.count === 0){
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
}
