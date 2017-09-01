import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import Login from '../components/Login/Login.vue'
import Page from '../components/Page/Page.vue'
import Javascript from '../components/Page/Javascript/javascript.vue'
import JQuery from '../components/Page/JQuery/jquery.vue'
import CSS from '../components/Page/CSS/css.vue'
import Backstage from '../components/Back/index.vue'
import Write from '../components/Back/write.vue'
import Articlelist from '../components/Back/articlelist.vue'
import Setting from '../components/Back/reset-passwd.vue'
import Index from '../components/Page/index.vue'

const routes=[
    {
      path:'/index',
      component:resolve=>require(['../components/index'],resolve)
    },
    {
      path:'/',
      component:Home,
      redirect:'/Page',
      children:[
        {
          path:'Page',
          component:Page,
          name:'Page',
          redirect: '/Page/javascript',
          children:[
            {
              path:'javascript',
              component:Index,
              name:'Index'
            },
            {
              path:':Nav1Title',
              component:Index,
              name:'Nav1Title'
            }
          ]
        }
      ] 
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/backstage',
      name:'backstage',
      component:Backstage,
      meta:{
        'requiresAuth':true
      },
      redirect:'/backstage/write',
      children:[
        {
          path:'write',
          component:Write
        },
        {
          path:'article-list',
          component:Articlelist
        },
        {
          path:'reset-passwd',
          component:resolve=>require(['../components/Back/reset-passwd'],resolve)
        },
        {
          path:'nav-list',
          component:resolve=>require(['../components/Back/NavList/NavList_1'],resolve)
        }
      ]
    }
  ]


export default routes
