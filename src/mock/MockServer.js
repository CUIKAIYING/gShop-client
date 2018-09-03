// 使用mockjs提供mock数据接口
//必须通过编码的方式测试

import Mock from "mockjs"
import data from "./data.json"  //自动解析为js对象

//mock goods数据接口
Mock.mock("/goods", {code:0, data:data.goods})

//mock ratings数据接口
Mock.mock("/ratings", {code:0, data:data.ratings})

//mock info数据接口
Mock.mock("/info", {code:0, data:data.info})
