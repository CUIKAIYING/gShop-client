// 包含n个间接更新state的函数的对象模块
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREATE_FOOD_COUNT,
  DECREATE_FOOD_COUNT
} from "./mutation-types"
import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUser,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from "../api/index";

export default {
  // 异步获取当前地址信息
  async getAddress ({commit, state}) {
    // 发异步ajax请求
    const {latitude, longitude} = state
    const geohash = `${latitude},${longitude}`
    const result = await reqAddress(geohash)  // {code:0, data: address}
    // 有了结果提交mutation
    const address = result.data
    commit(RECEIVE_ADDRESS, {address})
  },

  // 异步获取食品分类列表
  async getCategorys ({commit}) {
    // 发异步ajax请求
    const result = await reqCategorys()
    // 有了结果提交mutation
    const categorys = result.data
    commit(RECEIVE_CATEGORYS, {categorys})
  },

  // 异步获取商家列表
  async getShops ({commit, state}) {
    // 发异步ajax请求
    const {latitude, longitude} = state
    const result = await reqShops(longitude, latitude)
    // 有了结果提交mutation
    const shops = result.data
    commit(RECEIVE_SHOPS, {shops})
  },

//保存user的同步action
  saveUser({commit}, user){
    commit(RECEIVE_USER, {user})
  },

//  异步获取用户信息
  async getUser({commit}){
      const result =await reqUser()
      if(result.code===0){
        //  有了结果提交mutation
        const user = result.data
        commit(RECEIVE_USER, {user})
      }
  },

//  异步登出
  async logout({commit}){
    const result = await reqLogout()
    if(result.code===0){
      commit(RESET_USER)
    }
  },

//  异步获商家商品信息
  async getShopGoods({commit}, cb){
    const result = await reqShopGoods()
    if(result.code === 0){
      //  有了结果提交mutation
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})

    //  更新状态之后调用
      cb && cb()
    }


  },

  //  异步获商家评论
  async getShopRatings({commit}){
    const result = await reqShopRatings()
    if(result.code === 0){
      //  有了结果提交mutation
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }


  },

  //  异步获商家信息
  async getShopInfo({commit}){
    const result = await reqShopInfo()
    if(result.code === 0){
      //  有了结果提交mutation
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }


  },

//  同步更新food数量的action（此时不需要后台请求数据）
  updateFoodCount({commit},{food, isAdd}){
    if(isAdd){  //如果是增加
      commit(INCREATE_FOOD_COUNT, {food})
    }else{  //减少
      commit(DECREATE_FOOD_COUNT, {food})
    }
  }
}
