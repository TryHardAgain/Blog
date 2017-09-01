<template>
    <div class="backstage-main">
        <div class="layout">
            <div class="header">
                <div class="header_left">Tryzxq's Blog Backstage</div>
                <div class='header_right'>
                    <span>{{getTime}}好{{userinfo.username}}</span>
                    <button class="btn btn-default" @click='Signout'>
                        <Icon type="power"></Icon>
                    </button>
                </div>
            </div>
            <Row type="flex" class='Row'>
                <i-col span="5" class="layout-menu-left">
                    <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                        <div class="layout-logo-left">欢迎访问博客后台!</div>
                        <Menu-item v-for='(item,index) in navList' :name='item.name' :key='item.key' >
                            <router-link :to="item.path" class="Page_Path">
                                <div class="menu_list">
                                    <Icon :type="item.icon"></Icon>
                                    <span class="layout-text">{{item.text}}</span>
                                </div>  
                            </router-link>
                        </Menu-item>
                    </Menu>
                </i-col>
                <div class="right-module-main">
                    <router-view></router-view>
                </div>
            </Row>
        </div>
    </div>
</template>
<script>
    import moment from 'moment'
    export default {
        data(){
            return {
                navList:[
                    {
                        text:'发表博客',
                        path:'/backstage/write',
                        icon:'android-send',
                        name:'1'
                    },
                    {
                        text:'文章列表',
                        path:'/backstage/article-list',
                        icon:'ios-keypad',
                        name:'2'
                    },
                    {
                        text:'导航列表',
                        path:'/backstage/nav-list',
                        icon:'ios-navigate',
                        name:'3'
                    },
                    {
                        text:'更改密码',
                        path:'/backstage/reset-passwd',
                        icon:'ios-analytics',
                        name:'4'
                    }
                ]
            }
        },
        computed:{
            getTime(){
                return moment().locale('zh-cn').format('a')
            },
            userinfo(){
                return this.$store.state.userinfo
            }
        },
        created(){
            this.getUserInfo()
            // this.getPath()
        },
        methods:{
            getUserInfo(){
                this.$store.dispatch('GetUserInfo')
            },
            Signout(){
                this.$store.dispatch('Signout').then(()=>{
                    this.$router.push({path:'/login'})
                })
            },
            // getPath(){
            //     var path=this.$route.path
            // }
        },
        // watch:{
        //     "$route":"getPath"
        // }
    }
</script>
<style scoped>
    .Row{
        position:fixed;
        height:100%;
        width:100%;
    }
    .header{
        width:100%;
        height:40px;
        background-color:rgb(70,76,91);
        border-bottom:1px solid rgb(91,98,112);
    }
    .header_left{
        color:white;
        float:left;
        height:40px;
        line-height:40px;
        font-size:16px;
        padding-left:10px;
    }
    .header_right{
        color:white;
        float:right;
        padding-right:10px;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-logo-left{
        width: 100%;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
        line-height:30px;
        color:rgb(198,200,205);
        padding-left:10px;
    }
    .Page_Path:link{
        color:#fff;
        text-decoration:none;
    }
    .Page_Path:visited{
        color:#fff;
        text-decoration:none;
    }
    .Page_Path:hover{
        color:#fff;
        text-decoration:none;
    }
    .right-module-main{
        padding:20px 20px 20px 20px;
        width:79%;
        overflow:auto;
    }
</style>