<template>
    <div class="articlelist">
        <div class="table-responsive">
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                    <th>标题</th>
                    <th>类型</th>
                    <th>发表日期</th>
                    <th>编辑</th>
                    </tr>
                </thead>
                <tbody class="table-striped">
                    <tr v-for='(item,index) in articleList' :key='item.id'>
                        <td>{{item.title}}</td>
                        <td class="type_td">
                            <span v-for='type in item.types' :key='type.id'>{{type}}</span>
                        </td>
                        <td>{{formatDate(new Date(item.date))}}</td>
                        <td>
                            <button class="btn btn-primary" @click="updateArticle(index)">更改</button>
                            <button class="btn btn-danger" @click="removeArticle(index)">删除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <PageList :limit='limit' ref='pager'></PageList>
    </div>
</template>

<script>
    import PageList from '../Common/Page_list.vue'
    import { formatDateTime } from '../filters/index.js'

    export default {
        data(){
            return{
                limit:10,
                NavTypes:''
            }
        },
        computed:{
            articleList(){
                return this.$store.getters.articleList
                // let newArticleList=[];
                // if(this.$store.state.articleList){
                //     this.$store.state.articleList.forEach((item)=>{
                //         item.date=formatDateTime(new Date(item.date))
                //         newArticleList.push(item)
                //     })
                // }
                // return newArticleList
            }
        },
        created(){
            this.GetArticleList(this.$store.state.currPage)
        },
        mounted(){
            console.log(this.$store.state.articleList)
        },
        methods:{
            formatDate(date){
                return formatDateTime(date)
            },
            GetArticleList(skip){
                this.$store.dispatch('GetArticleList',{limit:this.limit,skip:skip,NavTypes:this.NavTypes})
            },
            updateArticle(index){
                this.$store.dispatch('SaveUpdateArticle',index)
                this.$router.push('/backstage/write')
            },
            removeArticle(index){
                this.$store.dispatch('RemoveArticle',index);
                if(index=0){
                    let skip=this.$store.state.currPage-1;
                    this.GetArticleList(skip)
                    this.$refs.pager.prev()
                }
            }
        },
        components:{
            PageList
        }
    }
</script>

<style lang="css">
    
</style>