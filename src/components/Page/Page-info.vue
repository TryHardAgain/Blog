<template>
    <div class="page-info">
        <!-- <ul>
            <li class="sidebar-menu-li">
                <span class="sidebar-menu-ListName" @click='toggle(index)' v-if='item.type==="first"'>
                    <Icon :type="item.icon" :size="iconSize"></Icon>
                    <span v-if='spanLeft===5'>
                        <span class="layout-text">{{item.title}}</span>
                        <span class="ListName_Hide" v-if='item.type==="first"'>
                            <i id="Folder" class="fa pull-right" :class="[open?'fa-angle-down':'fa-angle-left']"></i>
                        </span>
                    </span>
                </span>
                <transition
                    name="slide-fade"
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut"
                >
                    <ul v-show='open' class='children-ul' v-if="this.spanLeft===5">
                        <pageinfo class="children-li"></pageinfo>
                    </ul>
                </transition>
            </li>
        </ul> -->
        <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <Col class="layout-menu-left">
                <Menu active-name="1" theme="dark" width="auto">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon :type="model.icon" :size="iconSize"></Icon>
                            <span class="layout-text">{{model.title}}</span>
                        </template>
                        <div v-for="(item1,index) in GetNav" :key='index'>
                            <router-link :to="item1.title">
                                <MenuItem :name="1-index++" v-if="item1.type===model.title" >{{item1.title}}</MenuItem>
                            </router-link>
                        </div>
                    </Submenu>
                </Menu>
            </Col>
        </Row>
    </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    
    export default {
        name:"pageinfo",
        data (){
            return {
                open:false
            }
        },
        props:['model'],
        computed:{
            GetNav(){
                return this.$store.state.NavList
            },
            isFolder(){
                // for(var a=0;a<this.GetNav.length;a++){
                //     return this.GetNav[a].type==='first'
                // }
            },
            spanLeft(){
                return this.$store.state.spanLeft
            },
            spanRight(){
                return this.$store.state.spanRight
            },
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        created(){
            console.log(this.model)
        },
        methods:{
            toggle(index){
                this.open=!this.open
                console.log(this.model)
            },
            // NavList_Click(){
            //     this.$store.dispatch('NavList_Click')
            // }
        }
    }

    
</script>

<style lang="scss">
    .page-info{
        .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover{
            background-color:RGB(26,34,38) !important;
        }
        .layout{
            border:0px !important;
        }
        .ivu-menu-submenu{
            background-color:RGB(34,45,50) !important;
        }
        .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        }
        .layout-breadcrumb{
            padding: 10px 15px 0;
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
        .layout-header{
            height: 60px;
            background: #fff;
            box-shadow: 0 1px 1px rgba(0,0,0,.1);
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