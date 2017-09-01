import axios from 'axios'
import qs from 'qs'
import store from '../store/index.js'

axios.defaults.timeout=1000000
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.validateStatus=function(status){
  return status>=200 && status<300 || status===400
}
axios.interceptors.request.use(config=>{
  let token=window.localStorage.getItem('token')
  if(token){
    config.headers.Authorization=token
  }
  config.data=qs.stringify(config.data)
  return config
},error=>{
  return Promise.reject(error)
})

axios.interceptors.request.use(res=>{
  return res
},error=>{
  if(error.response){
    if(error.response.status===403){
      return Promise.reject({state:403,msg:'您没有权限访问'})
    }
  }
  return Promise.reject(error)
})

export default axios