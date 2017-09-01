<template>
    <div id="app">
        <transition>
            <router-view></router-view>
        </transition>
        <ui-modal></ui-modal>    
    </div>
</template>
<script>
    export default {
        data() {
            return {
            
            };
        }
    };
</script>

<style lang="css">
    #app{
        font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width:100%;
        height: 100%;
        background: rgba(112, 110, 110, 0.01);
    }
    ul,li{
        list-style:none;
        margin:0;
        padding:0
    }
</style>