<template>
    <div class="Header">
        <div class="Header_right">
            <nav class="navbar navbar-static-top">
            <div class="Menu">
                <i class="fa fa-bars menu" @click='TogglePage'></i>
            </div>
                <ul class="nav nav-pills user">
                    <li class="dropdown">
                        <Message></Message>
                    </li>
                    <li class="dropdown">
                        <Mail></Mail>
                    </li>
                    <li class="dropdown">
                        <Notice></Notice>
                    </li>
                    <li class="dropdown">
                        <div v-if='!UserInfoState'>
                            <router-link class="login" :to="{path:'/login'}">登录</router-link>
                        </div>
                    </li>
                    <li class="dropdown"  v-if='UserInfoState'>
                        <a href="#" class="dropdown-toggle user_info" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <div class="login">{{userinfo.username}}</div>
                        <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                    
                </ul>
            </nav>
            
        </div>
    </div>
</template>

<script> 
    import Mail from '../Common/Mail.vue'
    import Message from '../Common/Message.vue'
    import Notice from '../Common/Notice.vue'
    
    export default {
        data(){
            return {
                isHide:false,
            }
        },
        created(){
            this.GetUserInfo()
        },
        computed:{
            userinfo(){
                return this.$store.state.userinfo
            },
            UserInfoState(){
                return this.$store.state.userinfostate
            },
            spanLeft(){
                return this.$store.state.spanLeft
            },
            spanRight(){
                return this.$store.state.spanRight
            }
        },
        methods:{
            TogglePage(){
                this.$store.dispatch('Page',{spanLeft:this.spanLeft,spanRight:this.spanRight})
                console.log(this.spanLeft)
            },
            GetUserInfo(){
                this.$store.dispatch('GetUserInfo').then(()=>{                    
                    let userinfo=this.$store.state.userinfo
                    if(userinfo.token!==null){
                        this.$store.dispatch('UserInfoState')
                    }else{
                        this.$store.dispatch('GetUserInfo')
                    }
                })
            }
        },
        components:{
            Mail,
            Message,
            Notice
        }
    }
</script>

<style lang="css">
    .user_info{
        height:50px;
    }
    a:hover{
        border-radius:1px;
    }
    .user{
        float:right;
    }
    .Header{
        height:50px;
        line-height:50px;
    }
    
    .Header_right{
        float:right;
        height:50px;
        width:100%;
        background-color:#3c8dbc;
    }
    .Header_right .Menu{
        float:left;
    }
    .Header_right .Menu .menu{
        float:left;
        margin-left:15px;
        color:white;
        line-height:50px;
    }
    .Menu:hover{
        float:left;
        width:45px;
        height:50px;
        background-color:#367fa9;
        cursor:pointer;
    }
    .login{
        float:right;
        color:white;
        z-index:100000;
        height:50px;
        width:45px;
        text-align:center;
        overflow:hidden;
    }
    .login:link{
        text-decoration:none;
    }
    .login:visited{
        text-decoration:none;
        color:white;
    }
    .login:hover{
        text-decoration:none;
        background-color:#367fa9;
    }
    
</style>