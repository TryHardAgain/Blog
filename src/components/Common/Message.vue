<template>
    <div class="message">
        <div class="Message">
            <span id="message" class="glyphicon glyphicon-envelope"></span>
        </div>
    </div>
</template>

<script>
    
</script>

<style lang="css">
    .message{
        float:right;
        overflow:hidden;
    }
    .Message{
        background-color:#3c8dbc;
        height:50px;
        overflow:hidden;
        width:45px;
    }
    #message{
        margin-left:15px;
        color:white;
        line-height:50px;
    }
    .Message:hover{
        float:right;
        width:45px;
        height:50px;
        background-color:#367fa9;
        cursor:pointer;
    }
</style>