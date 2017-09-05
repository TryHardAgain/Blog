import * as types from './mutation-type.js'
import api from '../api/index.js'
import router from 'vue-router'
import { formatDateTime } from '../components/filters/index.js'

const ShowModal=(commit,data)=>{
    commit(types.SHOW_MODAL,data)
}

export default {
    GetUser({commit},userinfo){
        return api.GetUser(userinfo).then(response=>{
            commit(types.GETUSER,response.data)
            console.log(response.data)
        },(response)=>{
            console.log('This is login error at actions:',response)
        })
    },
    Registered({commit},userinfo){
        return api.Registered(userinfo).then(response=>{
            commit(types.REGISTERED,response.data)
            console.log(response.data)
        },(response)=>{
            console.log('This is login error at actions:',response)
        })
    },
    ShowModal({commit},data){
        commit(types.SHOW_MODAL,data)
    },
    CloseModal({commit}){
        commit(types.CLOSE_MODAL)
    },
    GetUserInfo({commit}){
        return api.GetUserInfo().then(response=>{
            commit(types.GETUSERINFO,response.data.userinfo)
        },(response)=>{
            console.log(response)
        })
    },
    UserInfoState({commit}){
        commit(types.USERINFOSTATE)
    },
    Page({commit},spanLeft,spanRight){
        commit(types.PAGE,spanLeft,spanRight)
    },
    // Finance({commit}){
    //     return api.Finance().then(response=>{
    //         commit(types.FINANCE,response.data)
    //         console.log(response.data)
    //     },(response)=>{
    //         console.log(response)
    //     })
    // }
    Signout({commit}){
        return api.Signout().then(response=>{
            var promise=new Promise((resolve,reject)=>{
                commit(types.SIGNOUT)
                resolve(response)
            },(response)=>{
                console.log(response)
            })
            .then(response=>console.log(response))
            .catch(error=>console.log(error))
            return promise;
        })
        // return api.Signout().then(response=>{
        //     commit(types.SIGNOUT)
        //     console.log(response)
        // },(error)=>{
        //     console.log(error)
        // })
    },
    CreatedArticle({commit},data){
        if(!data.title||!data.types||!data.content){
            ShowModal(commit,{
                message:'内容还没有写完整！',
                type:'question'
            })
            return
        }
        return api.CreatedArticle(data).then(response=>{
            var promise=new Promise((resolve,reject)=>{
                commit(types.CREATEDARTICLE,response.data)
                resolve(response)
            }).then(response=>{
                if(response.data.state==1){
                    ShowModal(commit,{
                        message:response.data.msg + '是否去首页？',
                        type:'success',
                        ok:()=>{
                            window.location.pathname='/'
                        }
                    })
                    console.log(response.data)
                }else{
                    ShowModal(commit,{
                        message:response.data.msg,
                        type:'error'
                    })
                }
            })
            return promise;
        })
    },
    SaveArticle({commit},data){
        if(!data.title||!data.types||!data.content){
            ShowModal(commit,{
                message:'内容还没有写完整！',
                type:'question'
            })
            return
        }
        return api.SaveArticle(data).then(response=>{
            var promise=new Promise(function(resolve,reject){
                commit(types.SAVEARTICLE,data)
                resolve(response)
            })
            .then(response=>{
                ShowModal(commit,{
                    message:'已保存！',
                    type:'success'
                })
            })
            .catch(err=>{
                ShowModal(commit,{
                    message:'保存失败！',
                    type:'error'
                })
                console.log(err)
            })
            return promise;
        })
    },

    GetArticleList({commit},options){
        return api.GetArticleList(options).then(response=>{
            var promise=new Promise(function(resolve,reject){
            commit(types.GETARTICLELIST,response.data)
            resolve(response)
            })
            .then(response=>{
                console.log(response.data)
            })
            .catch(response=>{
                ShowModal(commit,{
                    message:response.data.msg,
                    type:'error'
                })
                console.log(response)
            })
            return promise;
        })
        // return api.GetArticleList(options).then(response=>{
        //     commit(types.GETARTICLELIST,response.data)
        // },response=>{
        //     showModal(commit,{
        //         message:"获取失败！",
        //         type:'error'
        //     })
        //     console.log(response)
        // })
    },
    SetCurrPage({commit},currPage){
        commit(types.SETCURRPAGE,currPage)
    },
    RemoveArticle({commit,state},index){
        let id=[...state.articleList][index]._id
        console.log(id)
        ShowModal(commit,{
            message:'确定要删除？',
            type:'question',
            ok:()=>{
                return api.RemoveArticle(id).then(response=>{
                    commit(types.REMOVEARTICLE,index)
                    // state.articleList.forEach(item=>{
                    //     item.date=formatDateTime(new Date(item.date))
                    //     console.log(item.date)
                    // })
                },response=>{
                    ShowModal(commit,{
                        message:'删除失败！',
                        type:'error'
                    })
                })
            }
        })
    },
    UpdateArticle({commit},data){
        if(!data.title||!data.types||!data.content){
            ShowModal(commit,{
                message:'内容还没有写完整！',
                type:'question'
            })
            return
        }
        return api.UpdateArticle(data).then(response=>{
            commit(types.UPDATEARTICLE,response.data)
            if(response.data.state===1){
                window.location.pathname='/backstage/article-list'
            }
        },response=>{
            console.log(response.data)
        })
    },
    SaveUpdateArticle({commit},index){
        commit(types.SAVEUPDATEARTICLE,index)
    },
    GetMarkDownValue({commit},simplemde){
        commit(types.GETMARKDOWNVALUE,simplemde)
    },
    GetHtmlValue({commit},markdown_value){
        commit(types.GETHTMLVALUE,markdown_value)
    },
    CreatedNav({commit},Navs){
        if(Navs){
            if(!Navs.title){
                ShowModal(commit,{
                    type:'error',
                    message:'请填写导航标题'
                })
                return 
            }else if(!Navs.type){
                ShowModal(commit,{
                    type:'error',
                    message:'请填写导航类型'
                })
                return
            }else if(!Navs.icon){
                ShowModal(commit,{
                    type:'error',
                    message:'请填写导航图标'
                })
                return
            }
        }
        return api.CreatedNav(Navs).then(response=>{
            commit(types.CREATEDNAV,response.data)
             ShowModal(commit,{
                type:'success',
                message:'创建导航成功！',
                ok:()=>{
                    console.log(Navs)
                }
            })
        },response=>{
            ShowModal(commit,{
                type:'error',
                message:response.data.msg
            })
        })
    },
    GetNavList({commit}){
        return api.GetNavList().then(response=>{
            // let NavLists=[]
            // for(let a=0;a<response.data.NavListCount;a++){
            //     if(response.data.NavLists[a].type==='first'){
            //         NavLists.push(response.data.NavLists[a])
            //     }
            // }
            // response.data={state:1,NavLists,NavListCount:NavLists.length}
            console.log(response.data)
            commit(types.GETNAVLIST,response.data)
            // console.log(response.data)
            // ShowModal(commit,{
            //     type:'success',
            //     message:'获取导航列表成功！'
            // })
        },response=>{
            console.log(response)
        })
    },
    // Nav_ChildList({commit}){
    //     return api.GetNavList().then(response=>{
    //         let NavLists=[]
    //         for(var a=0;a<response.data.NavListCount;a++){
    //             for (var b=0;b<response.data.NavListCount;b++){
    //                 if(response.data.NavLists[a].type===response.data.NavLists[b].title){
    //                     NavLists.push(response.data.NavLists[a])
    //                 }                        
    //             }
    //         }
    //         response.data={state:1,NavLists,NavListCount:NavLists.length}
    //         console.log(response.data)
    //         commit(types.NAV_CHILDLIST,response.data)
    //     },response=>{
    //         console.log(response)
    //     })   
    // },
    RemoveNavList({commit,state},index){
        let id=[...state.NavList][index]._id
        ShowModal(commit,{
            message:'确定删除么？',
            type:'question',
            ok:()=>{
                return api.RemoveNavList(id).then(response=>{
                    commit(types.REMOVENAVLIST,index)
                },response=>{
                    ShowModal(commit,{
                        message:'删除失败',
                        type:'error'
                    })
                })
            }
        })    
    },
    SaveUpdateNavList({commit,state},index){
        commit(types.SAVEUPDATENAVLIST,index)
    },
    UpdateNavList({commit},data){
        if(!data.title || !data.type || !data.icon){
            ShowModal(commit,{
                message:'内容还有填写完整！',
                type:'error'
            })
            return
        }
        return api.UpdateNavList(data).then(response=>{
            commit(types.UPDATENAVLIST,response.data)
        },response=>{
            ShowModal(commit,{
                message:'导航更新失败!',
                type:'error'
            })
        })
    },
    Detaile({commit},id){
        return api.Detaile(id).then(response=>{
            commit(types.DETAILE,response.data.article)
            console.log(response.data)
        })
        .catch(err=>{
            ShowModal(commit,{
                message:'get article detaile',
                type:'error'
            })
        })
    }
}