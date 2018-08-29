//使用axios和promise封装发送ajax请求
import axios from "axios"

//发送ajax请求：请求方式  请求地址  请求参数  响应返回的格式
export default function ajax(url, data={}, type="GET") {
  return new Promise(function (resolve, reject) {
    let promise
  //  执行异步请求—判断请求方式是get还是post
    if(type==="GET"){//发送GET请求
    //  拼请求参数
      let paramsStr = ""
      Object.keys(data).forEach(key =>{
        paramsStr += key +" = "+ data[key] + "&"
      })
      if(paramsStr){
        paramsStr = paramsStr.substring(0, paramsStr.length-1)
      }
    //  使用axios发送get请求
      promise = axios.get(url + "?" + paramsStr)
    }else{//发送POST请求
      promise = axios.post(url, data)
    }
    promise
      .then(response =>{
      //  如果成功了，调用resolve(response.data)
        resolve(response.data)
      })
      .catch(error =>{
      //  如果失败了，调用reject
        reject(error)
      })
  })
}
