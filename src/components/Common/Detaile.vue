<template>
    <main class="detaile">
        <div>
            <article>
                <div class="Article">
                    <div class="Article_Title">
                        <h1>
                            <span>{{articles.title}}</span>
                        </h1>
                        <div class="Article_info">
                            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                            <span>{{articles.author}}</span>
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            <span>{{formatDate(new Date(articles.date))}}</span>
                            <i class="fa fa-eye" aria-hidden="true"></i>
                            <span>0</span>
                            <div class='hr_xx'></div>
                        </div>
                        <blockquote class='Article_Content'>
                            <section v-html='articles.content'></section> 
                        </blockquote>
                    </div>
                    <div class='hr'>
                        <i class="fa fa-tags" aria-hidden="true"></i>{{articles.types[0]}}
                    </div>
                </div>
            </article>
        </div> 
    </main>
</template>

<script>
    (function(){
     var html=document.documentElement;          
     var hwidth=html.getBoundingClientRect().width;    
     hwidth = hwidth > 750 ? 750 : hwidth;      
     html.style.fontSize=hwidth/15+'px'                
    })();

    
    import PageList from './Page_list.vue'
    import {formatDateTime} from '../filters/index.js'

    export default {
        data(){
            return{

            }
        },
        created(){
            this.GetDetaile()
        },
        computed:{
            articles(){
                return this.$store.state.articles
            }
        },
        methods:{
            formatDate(date){
                return formatDateTime(date)
            },
            GetDetaile(){
                this.$store.dispatch('Detaile',this.$route.params.id)
            },
        }
    }
</script>

<style lang='scss'>
    @import '../../assets/bower_components/atom-one-light.css';
    .detaile{
        padding-top:50px;
        .row{
            margin:0;
            padding:0;
            max-width:100%;
        }
        .Article_Title{
            padding-top:30px;
            color:RGB(44,62,80);
            font-size:0.36rem;
            padding-left:10%;
            padding-right:10%;
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
            margin-bottom:10px;
            margin-left:10%;
            margin-right:10%;
        }
        .Article_Content{
            margin-top:10px;
            color:#7f8c8d;
            font-size:16px;
            border-left: 4px solid #28a745;
            padding-left:15px;
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
