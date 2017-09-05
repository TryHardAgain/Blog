<template>
    <form class='form_main'>
        <div class="form-group">
            <label>标题</label>
            <input class="form-control" placeholder="文章标题" v-model='tempArticle.title'/>
        </div>
        <div class="form-group">
            <label>类型</label>
            <input class="form-control" placeholder="不同类型用;隔开" v-model='tempArticle.types'/>
        </div>
        <div class="form-group">
            <label>正文</label>
            <Markdown ref="markdown" :sourceContent='tempArticle.sourceContent'></Markdown>
        </div>
        <div class="form-group btn_array">
            <button type='button' name='button' class="btn btn-danger" @click='clear'>清空</button>
            <button type='button' name="button" class="btn btn-primary" @click='save'>保存</button>
            <button type='button' class="btn btn-success" name="button" @click='add' v-if='!isUpdateArticle'>发布</button>
            <button type='button' class="btn btn-info" @click='update' v-if='isUpdateArticle'>更改</button>
        </div>
    </form>
</template>

<script>
    import Markdown from '../common/Markdown'
    export default {
        data(){
            return{
                temporaryArticle:{}
            }
        },
        computed:{
            tempArticle(){
                let article=this.$store.state.temporaryArticle || {};
                if(article.types instanceof Array){
                    article.types=article.types.join(';')
                }
                return article
            },
            isUpdateArticle(){
                return this.$store.state.isUpdateArticle;
            }
        },
        methods:{
            add:function(){  
                let data=this.tempArticle
                data.content=this.$refs.markdown.getHtmlValue()
                data.sourceContent=this.$refs.markdown.getMarkdownValue()
                this.$store.dispatch('CreatedArticle',data)
            },
            clear:function(){
                this.$store.state.temporaryArticle={}
                this.tempArticle={}
            },
            update:function(){
                let data=this.tempArticle
                data.content=this.$refs.markdown.getHtmlValue()
                data.sourceContent=this.$refs.markdown.getMarkdownValue()
                this.$store.dispatch('UpdateArticle',data)
            },
            save:function(){
                let data=this.tempArticle;
                data.content=this.$refs.markdown.getHtmlValue();
                data.sourceContent=this.$refs.markdown.getMarkdownValue();
                this.$store.dispatch('SaveArticle',data);
            }
        },
        components:{
            Markdown
        }
    }
</script>

<style lang="css">
    .btn_array{
        text-align:right
    }
    .form_main{
        width:100%;
    }
</style>