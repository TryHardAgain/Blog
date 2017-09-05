<template>
    <div class="page">
        <div class='layout'>
            <Row type="flex">
            <Col :span="spanLeft" class="page-menu-left">
                <Menu active-name="1" theme="dark" width="auto"  class='Menu_background'>
                    <div class="Header_left">
                        <div class="Header_left_logo" v-if="this.spanLeft===5"><b>Admin</b>LTE</div>
                        <div class="Header_left_logo" v-else><b>A</b>LT</div>
                    </div>
                    <div class="user-panel">
                        <div class="pull-left image">
                            <img :src="user_img" alt="User_Image" class="img-circle" />
                        </div>
                        <div class="pull-left info" v-if="this.spanLeft===5">
                            <div class="username">{{userinfo.username}}</div>
                            <div class="state" v-if="!UserInfoState">
                                <span class="border1"></span>
                                <router-link class="state" :to="{path:'/login'}">offline</router-link>
                            </div>
                            <div class="state" v-if="UserInfoState">
                                <span class="border2"></span>
                                <span>online</span>
                            </div>
                        </div>
                        <Search v-if="this.spanLeft===5"></Search>
                    </div>
                    <div class="nav-note" v-if="this.spanLeft===5">
                        MAIN NAVIGATION
                    </div>
                    <ul v-for="(item,index) in GetNav" v-if='item.type==="first"'>
                        <Pageinfo :model='item'></Pageinfo>
                    </ul>
                </Menu>
            </Col>
            <Col :span="spanRight" class='right'>
                <div class="layout-header" :class="{layoutactive:this.spanLeft===2}">
                    <HeaderComponent></HeaderComponent>
                </div>
                <div class="layout-right">
                    <router-view></router-view>
                </div>
                <div class="layout-copy">
                    Copyright © 2017 Trfzxq博客
                </div>
            </Col>
            <!-- <div class="row">
                
            </div> -->
        </Row>
        </div>
        
    </div>
</template>

<script>
    import Pageinfo from './Page-info.vue'
    import Search from '../common/Search.vue'
    import HeaderComponent from '../Common/Header.vue'

    export default {
        data(){
            return {
                user_img:require('../../assets/user.jpg'),
                index:0
            }
        },
        watch:{
            $route(){
                console.log('a')
            }
        },
        components:{
            Pageinfo,
            Search,
            HeaderComponent
        },
        mounted(){
            this.GetNavList()
        },
        computed:{
            GetNav(){
                return this.$store.getters.NavList
            },
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
            GetUserInfo(){
                this.$store.dispatch('GetUserInfo').then(()=>{
                    let userinfo=this.$store.state.userinfo
                    if(userinfo.token!=null){
                        this.$store.dispatch('UserInfoState')
                    }else{
                        this.$store.dispatch('GetUserInfo')
                    }
                })
            },
            GetNavList(){
                this.$store.dispatch('GetNavList')
            },
            toggle(index){
            //     var vm=this;
            //     var ul_F=document.getElementsByClassName('ul-Fa');
            //     var children_ul_F=document.getElementsByClassName('children-li');
            //     var ul_F_length=ul_F.length;
            //     var b=[];
            //     var c=[];
            //     for(let i=0;i<=children_ul_F.length;i++){
                    
            //         // if(index===i){
            //         //     Reflect.deleteProperty(b,index);
            //         //     this.addClass(ul_F[i],'test'); 
            //         // }
            //         b.push(i);
            //         Reflect.deleteProperty(b,index);
            //         c.push(b[i]);
            //     }

                // for(var [k,v] of c.entries()){
                //     if(v===0){
                //         this.addClass(ul_F[c[v]],'test'); 
                //     }else if(v===1){
                //         this.addClass(ul_F[c[v]],'test');
                //     }else if(v===2){
                //         this.addClass(ul_F[c[v]],'test');
                //     }else if(v===3){
                //         this.addClass(ul_F[c[v]],'test');
                //     }else if(v===4){
                //         this.addClass(ul_F[c[v]],'test');
                //     }
                // }
            },
            hasClass(obj,cls)  {
                return obj.className.match(new RegExp('(\\s|^)'+ cls + '(\\s|$)'));
            },
            addClass(obj,cls){
                if(!this.hasClass(obj,cls)) obj.className +=" " + cls;
            },
            removeClass(obj,cls){
                if(this.hasClass(obj,cls)){
                    var reg=new RegExp('(\\s|^)' + cls + '(\\s|$)');
                    obj.className=obj.className.replace(reg + ' ')
                }
            },
            toggleClass(obj,cls){
                if(this.hasClass(obj,cls)){
                    this.removeClass(obj,cls);
                }else{
                    this.addClass(obj,cls);
                }
            }

            // UlArl(){
            //     var UlAry=document.getElementsByClassName('UlAry')
            //     var i = 0;
            //     for (i = 0; i < UlAry.length; i++) UlAry[i].className=UlAry[i].className.replace(/\s?cur/,"")
            //     this.className += " cur";
            // },
            // test(){
            //     var UlAry=document.getElementsByClassName('UlAry')
            //     var i = 0;
            //     for (i = 0; i < UlAry.length; i++){		
            //         this.UlArl()
            //     }
            // }
        }
    }
</script>

<style lang="scss">
.page{
    .page-menu-left{
        position:fixed;
        height:100%;
    }
    .Menu_background{
        min-height:100%;
        background-color:#222d32;
    }
    .right{
        float:right;
    }
    .layout-header{
        position: fixed;
        top:0;
        width:80%;
    }
    .layoutactive{
        width:92%;
    }
    .layout-right{
        overflow:auto;
    }
    .active{
        display:block;
        text-align:center;
        width:100%;
    }
    .cur{
        background-color:red;
    }
    .ivu-row-flex{
        display:block;
    }
    
    .page-ceiling-main a{
        color: #9ba7b5;
    }
    .page-hide-text .page-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .Header_left{
        height:50px;
        color:white;
        background-color:#367fa9;
        width:100%;
        line-height:50px;
        position:relative;
    }
    .Header_left:hover{
        background-color:#357ca5;
        cursor:pointer;
    }
    .Header_left_logo{
        text-align:center;
        font-size:20px;
        overflow:hidden;
    }
    .image{
        padding:10px 0 0 8px;
        position:relative;
    }
    .user-panel>.image>img{
        width:100px;
        max-width:45px;
        height:auto;
    }
    .user-panel>.image>img{
        width:100px;
        max-width:45px;
        height:auto;
    }
    .img-circle{
        border-radius:50%;
    }
    .user-panel{
        display:block;
        position:relative;
        height:100%;
        background-color:#222d32;
        overflow:hidden;
    }
    .nav-note{
        padding-left:10px;
        font-size:12px;
        height:35px;
        line-height:35px;
        display:block;
        color:#4b646f;
        background-color:#1a2226;
    }
    
    .user-panel>.info{
        margin-left:10px;
        height:70px;
    }
    .user-panel>.info>.username{
        margin-left:10px;
        color:white;
        height:35px;
        line-height:50px;
        font-size:14px;
    }
    .user-panel>.info>.state{
        color:white;
        display:block;
        height:35px;
        padding-left:20px;
    }
    .user-panel>.info>.state>.border1{
        position:absolute;
        top:40px;
        left:70px;
        background-color:red;
        border-radius:50%;
        width:10px;
        height:10px;
    }
    .user-panel>.info>.state>.border2{
        position:absolute;
        top:40px;
        left:70px;
        background-color:green;
        border-radius:50%;
        width:10px;
        height:10px;
    }
    .state:link{
        text-decoration:none;
    }
    .state:visited{
        text-decoration:none;
        color:white;
    }
    .state:hover{
        text-decoration:none;
    }
    
    .layout{
        
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }

    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
}
</style>