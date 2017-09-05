<template>
    <div class='Nav_index'>
        <!-- <CSS v-if="$route.params.Nav1Title==='Function',item.title==='Function'"></CSS>
        <Javascript></Javascript>
        <JQuery></JQuery> -->
        <!-- <div v-for="(item,index) in NavList" :key='index' v-if='item.title===NavListURL'>
            <div class="list-group">
                <a href="#" class="list-group-item disabled">
                    {{item.title}}
                </a>
                <div  v-for="(Article,index) in ArticleList" :key='index' v-if='Article.types[0]===item.title'>
                    <a href="#" class="list-group-item">{{Article.title}}</a>
                    <PageList :limit='limit' ref='pager'></PageList>
                </div>
            </div>
            
        </div> -->
        <main>
            <article v-for="(item,index) in NavList" :key='index' v-if='item.title===NavListURL'>
                <div class="row Article" v-for="(Article,index) in ArticleList" :key='index' v-if='Article.types[0]===item.title'>
                    <div class="Article_Title">
                        <h1>
                            <router-link :to='"/Detaile/"+Article._id'>
                                <span>{{Article.title}}</span>
                            </router-link>
                        </h1>
                        <div class="Article_info">
                            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                            <span>{{Article.author}}</span>
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            <span>{{formatDate(new Date(Article.date))}}</span>
                            <i class="fa fa-eye" aria-hidden="true"></i>
                            <span>0</span>
                            <div class='hr_xx'></div>
                        </div>
                        <blockquote class='Article_Content'>
                            <section v-html='Article.content'></section> 
                        </blockquote>
                    </div>
                    <div class='hr'>
                        <i class="fa fa-tags" aria-hidden="true"></i>{{Article.types[0]}}
                    </div>
                </div>
                <div class='PageList'>
                    <PageList :limit='limit' ref='pager'></PageList>
                </div>
            </article>
        </main>

    </div>
</template>

<script>
    import CSS from './CSS/css.vue'
    import PageList from '../Common/Page_list.vue'
    import Javascript from './Javascript/javascript.vue'
    import JQuery from './JQuery/jquery.vue'
    import {formatDateTime} from '../filters/index.js'

    export default {
        data(){
            return {
                limit:2
            }
        },
        watch:{
            
        },
        computed:{
            NavList(){
                return this.$store.getters.NavList
            },
            NavListURL(){
                return this.$route.params.Nav1Title
            },
            ArticleList(){
                let ArticleList = this.$store.getters.articleList
                if(ArticleList.types instanceof Array){
                    ArticleList.types=ArticleList.types.split(';')
                }
                return ArticleList
            }
        },
        created(){
            this.GetArticleList(this.$store.state.currPage)
        },
        methods:{
            formatDate(date){
                return formatDateTime(date)
            },
            
            GetArticleList(skip){
                this.$store.dispatch('GetArticleList',{limit:this.limit,skip:skip,NavTypes:this.NavListURL})
            },
            types(){
                let {keys, values, entries} = Object;
                for(let [key,value] of entries(this.ArticleList[0])){
                    console.log(key,value)
                }
            }
        },
        components:{
            CSS,
            Javascript,
            JQuery,
            PageList
        }
    }
</script>

<style lang='scss'>
    .Nav_index{
        margin-top:50px;
        main{
        }
        .row{
            margin:0;
            padding:0;
            max-width:100%;
        }
        .Article_Title{
            padding-top:30px;
            color:RGB(44,62,80);
            font-size:inherit;
            padding-left:15%;
            padding-right:15%;
            min-height:360px;
        }
        .Article_Title>h1>span{
            font-weight:bolder;
        }
        h1{
            text-align:center;
        }
        .Article_info{
            line-height:30px;
            font-size:15px !important;
            color:grey;
            padding-top:20px;
            text-align:center;
        }
        .fa{
            padding:0 5px 0 20px;
        }
        .hr_xx{
            margin-top:5px;
            border:1px dashed #ADADAD;
        }
        .fa-tags{
            color:grey !important;
            font-size:16px !important;
            margin-bottom:10px !important;
        }
        .hr{
            border-bottom:4px solid grey;
            margin-top:10px;
            margin-left:15%;
            margin-right:15%;
            margin-bottom:10px;
        }
        .Article_Content{
            margin-top:10px;
            color:#7f8c8d;
            font-size:16px;
            border-left: 4px solid #28a745;
            padding-left:15px;
            max-height:200px;
            overflow:hidden;
        }
        .Article_Content>section{
                line-height:30px;
        }
        .PageList{
            display: flex;
            justify-content:center;
        }
    }
</style>
