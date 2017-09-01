import Vue from 'vue'
import App from './App'
import routes from './router/index.js'
import store from './store/index.js'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import 'font-awesome/css/font-awesome.min.css'
import Modal from './components/Common/modal/Uimodal'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import Router from 'vue-router'
Vue.prototype.$http=axios;


Vue.prototype.bus = new Vue({})
Vue.component('ui-modal',Modal)
Vue.use(iView)
Vue.use(Router)
Vue.config.productionTip = false

const router=new Router({
  mode:'history',
  routes
})

router.beforeEach((to,from,next)=>{
  const localToken=window.localStorage.getItem('token')
  let auth=to.matched[0].meta.requiresAuth
  if(auth){
    if(!localToken){
      next({
        path:'/login'
      })
    }else{
      next()
    }
  }else{
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})