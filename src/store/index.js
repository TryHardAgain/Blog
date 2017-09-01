import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

Vue.use(Vuex)

const modal={
    type:'info',
    show:false,
    message:"模拟",
    ok:()=>{},
    cancel:()=>{}
}

const state={
    markdown_value:null,
    simplemde:null,
    // Finance:[],
    userinfo:{},
    modal:modal,
    userinfostate:false,
    spanLeft:5,
    spanRight:19,
    temporaryArticle:null,
    // articles:[],
    isUpdateArticle:false,
    articlestotal:0,
    articleList:[],
    NavListCount:0,
    pagerIsShow:true,
    currPage:1,
    Navs:{},
    NavList:[],
    isUpdateNav:false,
    temporaryNav:null,
}

if(module.hot){
    module.hot.accept([
        './actions',
        './mutations.js',
        './getters.js'
    ],()=>{
        store.hotUpdate({
            actions:require('./actions'),
            getters:require('./getters'),
            mutations:require('./mutations')
        })
    })
}

export default new Vuex.Store({
    state,actions,getters,mutations
})