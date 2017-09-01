<template>
    <div class="login-modules">
        <h2><router-link id="login-top" :to="{path:'/'}"><b>Admin</b>LTE</router-link></h2>
        <form class="form">
            <div class="login-content">
                <span>Sign in to start your session</span>
                <div class="feedback">
                    <div class="form-group has-feedback login_feedback">
                        <input type="text" class="form-control" placeholder='Username' v-model="UserInfo.username" />
                        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback login_feedback">
                        <input type="password" class="form-control" placeholder='Password' v-model="UserInfo.password" />
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                </div>   
                <div class="checkbox">
                    <label>
                        <input type="checkbox"> Remember me
                    </label>
                </div>
                <span class="sign" @click="login">Sign In</span>
                <span class="sign" @click="Registered">Registered</span>
            </div>      
        </form>
    </div>
</template>

<script>
    export default {
        name:'login',
        data(){
            return {
                UserInfo:{
                    username:null,
                    password:null
                }
            }

        },
        // watch:{
        //     userinfo:{
        //         handler(username,password){
        //             alert('a')
        //         },
        //         deep:true
        //     }
        // },
        methods:{
            login(){
                if(!this.UserInfo.username || !this.UserInfo.password){
                    this.$store.dispatch('ShowModal',{
                        message:'帐号、密码不能为空！',
                        type:'error'
                    })
                    return
                }
                let userinfo={
                    'username':this.UserInfo.username,
                    'password':this.UserInfo.password
                }
                this.$store.dispatch('GetUser',userinfo).then(()=>{
                    let Get_User=this.$store.state.GetUser
                    if(Get_User.state===1){
                        this.$router.push('/backstage')
                    }else{
                        this.$store.dispatch('ShowModal',{
                            message:Get_User.msg,
                            type:"error"
                        })
                    }
                })
            },
            Registered(){
                this.$store.dispatch('Registered',{username:this.UserInfo.username,password:this.UserInfo.password}).then(()=>{
                    let Registered_User=this.$store.state.Registered
                    if(Registered_User.state===1){
                        this.$store.dispatch('ShowModal',{
                            message:Registered_User.msg,
                            type:"success"
                        })
                    }else{
                        this.$store.dispatch('ShowModal',{
                            message:Registered_User.msg,
                            type:"error"
                        })
                    }
                })
            }
        }
    }
</script>

<style lang="css">
    .or{
        padding-top:20px;
        clear:both;
        display:block;
        font-size:12px;
    }
    .sign{
        background-color:rgb(51,122,183);
        color:white;
        float:right;
        margin-right:20px;
        border-radius:5px;
        width:80px;
        height:30px;
        line-height:30px;
        overflow:hidden;
        cursor:pointer;
    }
    .checkbox{
        float:left;
        margin-left:20px;
        overflow:hidden;
    }
    .feedback{
        margin-top:25px;
    }
    .login_feedback{
        position:relative;
        width:340px;
        margin-left:20px;
    }
    .form-group input{
        border-radius:1px;
    }
    .login-modules{
        background-color:#d2d6de;
        height:100%;
        position: fixed;
        width: 100%;
    }
    .login-modules h2{
        margin-top:100px;
        margin-left:-80px;
        left:50%;
        position:fixed;
    }
    #login-top{
        color:rgb(68,68,68);
    }
    #login-top:link{
        text-decoration:none;
    }
    #login-top:visited{
        text-decoration:none;
    }
    #login-top:hover{
        text-decoration:none;
    }
    .login-content{
        border:1px;
        width:380px;
        height:400px;
        position:fixed;
        margin-left:-190px;
        left:50%;
        margin-top:170px;
        background-color:white;
        font-size:13px;
        text-align:center;
        padding-top:20px;
        color:#666;
        text-align:center;
    }
</style>
