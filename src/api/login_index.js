// 1.引入封装哈哦的axios
import axios from '@/utils/myaxios.js'

export const login = (data) => {
  // 看接口文档
  // axios()返回一个promise对象
  return axios({
    // url:请求的路由名称，之前已经设置过基准路径，所以axios会进行自动的拼接
    url: 'login',
    // 请求方法默认为get
    method: 'post',
    // 传递的数据，如果get方式就需要使用params，如果是post方式就需要使用data
    data

  })
}
