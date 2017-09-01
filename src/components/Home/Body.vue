<template>
    <div>
        <Page></Page>
        <div class="right-module-main">
                <HeaderComponent></HeaderComponent>
                <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import HeaderComponent from '../Common/Header.vue'
    import Page from '../Page/Page.vue'
    export default {
        data (){
            return {
                
            }
        },
        components:{
            HeaderComponent,
            Page
        }
    }
</script>

<style lang="css">
    
</style>