import {request} from "./request"

export function getHomeMultidata(){

  // 回调函数   request是在request.js里面定义好的
  return request({
    url: '/home/multidata'
  })
}
