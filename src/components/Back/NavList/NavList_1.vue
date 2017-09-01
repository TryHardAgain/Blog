<template>
    <div class='NavList_1'>
        <Form ref="navs" :model="tempNav" :rules="ruleInline" inline>
            <FormItem prop="title">
                <Input type="text" v-model="tempNav.title" placeholder="Nav Title">
                    <Icon type="edit" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="type">
                <Input type="text" v-model="tempNav.type" placeholder="Nav Type">
                    <Icon type="edit" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="icon">
                <Input type="text" v-model="tempNav.icon" placeholder="Nav Icon">
                    <Icon type="edit" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="AddNav" v-if='!isUpdateNav'>新增</Button>
                <Button type="primary" @click="UpdateNav" v-if='isUpdateNav'>更改</Button>
                <Button type="primary" @click="ClearNav">清除</Button>
            </FormItem>
        </Form>
        <Row>
            <Col>
                <Menu >
                    <table class='nav_title'>
                        <tr>
                            <th>标题</th>
                            <th>类型</th>
                            <th>导航图标</th>
                            <th>发表日期</th>
                            <th>编辑</th>
                        </tr>
                    </table>
                    <Submenu name="index" v-if='item.type==="first"'  v-for="(item,index) in GetNav" :key='item.id'>
                        <template slot="title">
                            <table>
                                <tr>
                                    <td>{{item.title}}</td>
                                    <td class="type_td">{{item.type}}</td>
                                    <td>{{item.icon}}</td>
                                    <td>{{format(new Date(item.date))}}</td>
                                    <td>
                                        <button class="btn btn-primary" @click="SaveUpdateNav(index)">更改</button>
                                        <button class="btn btn-danger" @click="removeNav(index)">删除</button>
                                    </td>
                                </tr>
                            </table>
                        </template>
                        <MenuItem name="1-1" v-if="item1.type===item.title" v-for="(item1,index) in GetNav" :key='item1.id'>
                            <table>
                                <tr>
                                    <td>{{item1.title}}</td>
                                    <td class="type_td">{{item1.type}}</td>
                                    <td>{{item1.icon}}</td>
                                    <td>{{format(new Date(item1.date))}}</td>
                                    <td>
                                        <button class="btn btn-primary" @click="SaveUpdateNav(index)">更改</button>
                                        <button class="btn btn-danger" @click="removeNav(index)">删除</button>
                                    </td>
                                </tr>
                            </table>
                        </MenuItem>
                    </Submenu>
                </Menu>
            </Col>
        </Row>
    </div>
</template>

<script>
    import {formatDateTime} from '../../filters/index.js'

    export default {
        data(){
            return {
                temporaryNav:{},
                ruleInline: {
                    title: [
                        { required: true, message: '请填写导航标题', trigger: 'blur' }
                    ],
                    type: [
                        { required: true, message: '请填写导航类型', trigger: 'blur' },
                    ],
                    icon: [
                        { required: true, message: '请填写导航图标', trigger: 'blur' },
                    ]
                }
            }
        },        
        computed:{
            GetNav(){
                return this.$store.getters.NavList
            },
            isUpdateNav(){
                return this.$store.state.isUpdateNav
            },
            tempNav(){
                let Nav=this.$store.state.temporaryNav || {}
                return Nav
            }
        },
        mounted(){
            this.GetNavList()
        },
        methods:{
            format(date){
                return formatDateTime(date)
            },
            GetNavList(){
                this.$store.dispatch('GetNavList')
            },
            ClearNav(){
                this.$store.state.temporaryNav={}
            },
            removeNav (index) {
                this.$store.dispatch('RemoveNavList',index)
                console.log(index)
            },
            AddNav(){
                let Navs=this.tempNav
                this.$store.dispatch('CreatedNav',Navs)
            },
            SaveUpdateNav(index){
                this.$store.dispatch('SaveUpdateNavList',index)
            },
            UpdateNav(){
                let Navs=this.tempNav
                this.$store.dispatch('UpdateNavList',Navs)
            }
        },
        components:{

        }
    }
</script>

<style lang="scss">
    .NavList_1{
        ul{
            width:1000px !important;
        }
        .ivu-menu-submenu-title i{
            display:none !important;
        }
        td,th{
            width:200px;
            margin:0;
            padding:10px 0 10px 0;
        }
        .nav_title{
            max-width:1000px;
            margin-left:24px !important;
            background-color:RGB(51,153,255);
            height:30px;
            line-height:30px;
            padding:30px;
            border-bottom:2px solid gray;
        }
        .nav_title>tr>th:first-child{
            padding-left:10px;
        }
        .ivu-menu-submenu-title{
            padding:0 0 5px 0 !important;
            margin-left:24px !important;
            border:1px solid #F0F0F0;
        }
        .ivu-menu-submenu-title>table>tr>td:first-child{
            padding-left:10px;
        }
        .ivu-menu-item{
            padding:0px !important;
            max-width:1000px !important;
            margin-left:24px !important;
            border-left:2px solid black;
        }
        .ivu-menu-item>table>tr>td:first-child{
            padding-left:10px;
        }
        .ivu-form{
            margin-left:24px !important;
        }
    }
    
</style>