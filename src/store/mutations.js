import * as types from './mutation-type.js'

export default {
    [types.GETUSER](state,Get_User){
        if(Get_User.state===1){
            window.localStorage.setItem('token',Get_User.token)
        }
        state.GetUser=Get_User
    },
    [types.REGISTERED](state,Registered_User){
        state.Registered=Registered_User
    },
    [types.SIGNOUT](state){
        window.localStorage.removeItem('token')
    },
    [types.SHOW_MODAL](state,data){
        state.modal.show=true
        state.modal.type=data.type
        state.modal.message=data.message
        state.modal.ok=data.ok
        state.modal.cancel=data.cancel
    },
    [types.CLOSE_MODAL](state){
        state.modal.show=false
    },
    [types.GETUSERINFO](state,userinfo){
        state.userinfo=userinfo
        state.userinfostate=false
    },
    [types.USERINFOSTATE](state){
        state.userinfostate=true
    },
    [types.PAGE](state,spanLeft,spanRight){
        if (state.spanLeft === 5) {
            state.spanLeft = 2;
            state.spanRight = 22;
        } else {
            state.spanLeft = 5;
            state.spanRight = 19;
        }
    },
    [types.CREATEDARTICLE](state,data){
        console.log('创建成功',data)
    },
    [types.SAVEARTICLE](state,data){
        state.temporaryArticle=data
    },
    [types.GETARTICLELIST](state,data){
        state.articleList=data.articles
        state.articlestotal=data.total
    },
    [types.SETCURRPAGE](state,currPage){
        state.currPage=currPage
    },
    [types.REMOVEARTICLE](state,index){
        state.articleList.splice(index,1)
    },
    [types.UPDATEARTICLE](state,data){
        state.isUpdateArticle=false
        state.temporaryArticle={}
    },
    [types.SAVEUPDATEARTICLE](state,index){
        state.isUpdateArticle=true
        state.temporaryArticle=state.articleList[index]
    },
    [types.GETMARKDOWNVALUE](state,simplemde){
        state.simplemde=simplemde.simplemde
        
    },
    [types.GETHTMLVALUE](state,markdown_value){
        state.markdown_value=markdown_value.markdown_value
    },
    [types.CREATEDNAV](state,Navs){
        console.log('创建成功',Navs)
    },
    [types.GETNAVLIST](state,data){
        state.NavList=data.NavLists
        state.NavListCount=data.NavListCount
        
    },
    // [types.NAV_CHILDLIST](state,data){
    //     state.NavList=data.NavLists
    //     state.NavList=data.NavListCount
    // },
    [types.REMOVENAVLIST](state,index){
        state.NavList.splice(index,1)
    },
    [types.SAVEUPDATENAVLIST](state,index){
        state.isUpdateNav=true
        state.temporaryNav=state.NavList[index]
    },
    [types.UPDATENAVLIST](state,data){
        state.isUpdateNav=false
        state.temporaryNav={}
    },
    [types.DETAILE](state,data){
        state.articles=data
    }
}