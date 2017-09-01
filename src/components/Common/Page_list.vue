<template>
    <nav v-if='isShow()' class='pagination-nav'>
        <div v-if='!isTotal()'>
            <h1>当前还没有数据</h1>
        </div>
        <ul v-if='isTotal()'>
            <li @click.prevent='prev()'><a>&laquo;</a></li>
            <li v-if='pageSize===1' class='active'>
                <a>1</a>
            </li>
                <template v-if='pageSize>1'>
                    <li :class="{active: currPage == 1}" @click.prevent='changePage(1)'><a>1</a></li>
                    <li v-if="currPage-3>1" @click.prevent='changePage(currPage-3)'><a>……</a></li>
                    <li v-if="currPage-2>1" @click.prevent='changePage(currPage-2)'><a>{{currPage-2}}</a></li>
                    <li v-if="currPage-1>1" @click.prevent='changePage(currPage-1)'><a>{{currPage-1}}</a></li>
                    <li class="active" v-if="currPage !== 1 && currPage !== pageSize" @click.prevent="changePage(currPage)"><a>{{ currPage }}</a></li>
                    <li v-if="currPage+1<pageSize" @click.prevent='changePage(currPage+1)'><a>{{currPage+1}}</a></li>
                    <li v-if="currPage+2<pageSize" @click.prevent='changePage(currPage+2)'><a>{{currPage+2}}</a></li>
                    <li v-if="currPage + 3 < pageSize" @click.prevent="changePage(currPage+3)"><a>……</a></li>
                    <li :class="{active:currPage===pageSize}" @click.prevent="changePage(pageSize)"><a>{{ pageSize }}</a></li>
                </template>
            <li @click.prevent="next()"><a>&raquo;</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props:['limit'],
        data(){
            return{
                isShow(){
                    return this.$store.state.pagerIsShow
                },
                isTotal(){
                    return this.$store.state.articlestotal!=0
                }
            }
        },
        computed:{
            pageSize(){
                return Math.ceil(this.$store.state.articlestotal / this.limit)
            },
            currPage(){
                return this.$store.state.currPage
            }
        },
        methods:{
            changePage(page){
                if(this.currPage!==page){
                    this.$store.dispatch('SetCurrPage',page)
                    this.$parent.GetArticleList(page)
                    document.body.scrollTop = 380
                }
            },
            next(){
                if(this.currPage<this.pageSize){
                    this.changePage(this.currPage+1)
                }
            },
            prev(){
                if(this.currPage>1){
                    this.changePage(this.currPage-1)
                }
            }
        }
    }
</script>

<style lang="scss">
.pagination-nav {
    li {
        float:left;
        border:1px solid #d7dde4;
        background:#fff;
        text-align:center;
        min-width:32px;
        height:32px;
        line-height:32px;
        border-radius:4px;
        color:#657180;
        margin-left:4px;
    }
    li.active {
        background:#39f;
        border-color:#39f;
        max-width:32px;
    }
    li.active>a{
        color:white;
    }
    li:hover{
        cursor:pointer;
        transition:all .2s ease-in-out;
        border-color:#39f;
        color:#39f;
    }
}
</style>