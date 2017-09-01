<template>
    <div class="search">
        <form class="form sidebar-form">
            <div class="feedback">
                <div class="form-group has-feedback search-feedback">
                    <input type="text" class="form-control Search-input" placeholder='Search...'/>
                    <span class="glyphicon glyphicon-search form-control-feedback"></span>
                </div>
            </div>   
        </form>
    </div>
    
</template>

<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>

<style lang="css">
    .search{
        position:relative;
        display:block;
        clear:both;
        height:40px;
    }
    .sidebar-form{
        height:40px;
        background-color:#222d32;
        padding-left:10px;
    }

    .Search-input{
        display:block;
        clear:both;
        border-radius:5px;
        background-color:#374850;
        border:1px solid transparent;
    }
    .search-feedback{
        position:absolute;
        width:95%;
    }
</style>