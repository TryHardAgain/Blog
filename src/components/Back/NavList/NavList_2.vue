<template>
    <div class='NavList_2'>
        <table class="table table-hover table-striped">
            <tbody class="table-striped">
                <tr>
                    <td>d</td>
                    <td class="type_td">d</td></td>
                    <td></td>
                    <td>
                        <button class="btn btn-primary" @click="updateNav(index)">更改</button>
                        <button class="btn btn-danger" @click="removeNav(index)">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            updateNav(index){

            },
            removeNav(index){

            }
        }
    }
</script>

<style lang="scss">
    .NavList_2{
        tr{
            width:1000px;
            padding:0;
            margin:0;
        }
        
    }
</style>