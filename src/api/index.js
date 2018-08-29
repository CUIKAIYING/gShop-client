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


