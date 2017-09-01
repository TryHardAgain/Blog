<template>
    <textarea ref="markdownDOM" id='markdownDOM'></textarea>
</template>

<script>
    import SimpleMDE from 'simplemde'
    import SimpleMDECSS from '../../assets/bower_components/simplemde/dist/simplemde.min.css'
    import hljs from '../../assets/bower_components/atom-one-light.css'

    export default {
        name:'markdown',
        props:['sourceContent'],
        data(){
            return {
                // simplemde:null
            }
        },
        mounted(){
            this.created()
            if (this.sourceContent) {
                this.simplemde.value(this.sourceContent)
            }else{
                this.simplemde.value('')
            }
        },
        computed:{
            // simplemde(){
            //     return this.$store.state.simplemde
            // },
            // markdown_value(){
            //     return this.$store.state.markdown_value
            // }
        },
        methods:{
            // getMarkdownValue:function(){
            //     console.log(this.simplemde.value());
            //     // return this.simplemde.value()
            // },
            // getHtmlValue:function(){
            //     console.log(this.simplemde.value());
            //     let value=this.simplemde.value()
            //     return this.simplemde.markdown(value)
            // },
            getMarkdownValue:function(){
                this.$store.dispatch('GetMarkDownValue',{simplemde:this.simplemde.value()})
                return this.$store.state.simplemde
            },
            getHtmlValue:function(){
                this.$store.dispatch('GetHtmlValue',{markdown_value:this.simplemde.markdown(this.simplemde.value())})
                return this.$store.state.markdown_value
            },
            created(){
                const simplemdeDOM=this.$refs.markdownDOM;
                window.hljs=hljs;
                this.simplemde=new SimpleMDE({
                    autodownloadfontawesome:false,
                    element:simplemdeDOM,
                    spellChecker:false,
                    forceSync:true,
                    autosave:{
                        enabled:true,
                        unique_id:'#markdownDOM' 
                    },
                    placeholder:'Type here...',
                    renderingConfig:{
                        singleLineBreaks:false,
                        codeSyntaxHighlighting:true
                    } 
                })
            }
        },
        
    }
</script>

<style lang="css">
    
</style>