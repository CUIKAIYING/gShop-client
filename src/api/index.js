//包含n个请求函数的的模块

import ajax from "./ajax"

//代理
const BASE = '/api'
//根据经纬度获取详情
export const reqAddress = (geohash)=> ajax(`${BASE}/position/${geohash}`)
//获取食品分类列表
export const reqCategorys = ()=>ajax(BASE+"/index_category")
//根据经纬度获取商铺列表
export const reqShops = (longitude, latitude)=>ajax(BASE+"/shops",{latitude,longitude})
//获取短信验证码
export const reqSendCode = ({phone})=>ajax(BASE+"/sendcode", {phone})

//手机验证码登录
export const reqMsgLogin = (phone, code) =>ajax(BASE+"login_sms",{phone, code},"POST")

//用户密码登录
export const reqPwdLogin =({name, pwd, captcha}) =>ajax(BASE+"login_pwd", {name, pwd, captcha}, "POST")

//根据会话获取用户信息
export const reqUser = () =>ajax(BASE+"/userinfo")

//退出登录
export const reqLogout = ()=>ajax(BASE+"/logout")

//获取商家信息
export const reqShopInfo = ()=>ajax("/info")

//获取商家评论数组
export const reqShopRatings = () =>ajax("/ratings")

//获取商家商品数组
export const reqShopGoods = () =>ajax("/goods")


