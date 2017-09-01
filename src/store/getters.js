import * as types from './mutation-type.js'
// import { formatDateTime } from '../components/filters/index.js'

export default {
    articleList:state=>{
        let newArticleList=[];
            if(state.articleList){
                state.articleList.forEach((item)=>{
                    // item.date=formatDateTime(new Date(item.date))
                    newArticleList.push(item)
                })
            }
        return newArticleList
    },
    NavList:state=>{
        let newNavList=[];
        if(state.NavList){
            state.NavList.forEach((item)=>{
                newNavList.push(item)
            })
        }
        return newNavList
    }
}
