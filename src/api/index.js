import axios from './axios.js'

export default {
    GetUser:function(data){
        let url='/api/login/GetUser'
        return axios.post(url,data)
    },
    Registered:function(data){
        let url='/api/login/Registered'
        return axios.post(url,data)
    },
    GetUserInfo:function(){
        let url='/api/GetUserInfo'
        return axios.get(url)
    },
    Signout:function(){
        let url='/api/signout'
        return axios.get(url)
    },
    CreatedArticle:function(data){
        let url='/api/CreatedArticle'
        return axios.post(url,data)
    },
    SaveArticle:function(data){
        let url='/api/SaveArticle'
        return axios.post(url,data)
    },
    GetArticleList:function(options){
        let url='/api/GetArticleList'
        return axios.get(url,{
            params:{limit:options.limit,skip:options.skip,name:options.name}
        })
    },
    RemoveArticle:function(id){
        let url='/api/RemoveArticle'
        return axios.delete(url,{
            params:{id:id}
        })
    },
    UpdateArticle:function(data){
        let url='/api/UpdateArticle'
        return axios.put(url,data)
    },
    CreatedNav:function(data){
        let url='/api/CreatedNav'
        return axios.post(url,data)
    },
    GetNavList:function(){
        let url='/api/GetNavList'
        return axios.get(url)
    },
    RemoveNavList:function(id){
        let url='/api/RemoveNavList'
        return axios.delete(url,{
            params:{id:id}
        })
    },
    UpdateNavList:function(data){
        let url='/api/UpdateNavList'
        return axios.put(url,data)
    }
}

