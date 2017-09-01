<template>
    <div class="index">
        <div class="code_fail">
            <img class='img_size' src="../assets/3@2x.png" alt="">
            <p class="fail_text">二维码已失效</p>
            <p class="rescan">重新扫描二维码</p>
        </div>
    </div>
</template>

<script>
    (function(){
	
		var html = document.documentElement;
		
		var hWidth = html.getBoundingClientRect().width;
		
		html.style.fontSize = hWidth/15 + "px";
		
	})();
</script>

<style lang="">
    .code_fail{
        position:fixed;
        width:100%;
        height:100%;
        text-align:center;
    }
    .img_size{
        height:2.8rem;
        width:2.8rem;
        margin-top:7.4rem;
    }
    .fail_text{
        font-size:0.84rem;
        margin-top:1.2rem;
        color:#f7a82f;
        font-family:'PingFang-SC-Medium';
    }
    .rescan{
        font-size:0.64rem;
        margin-top:0.8rem;
        color:#121417;
        font-family:'PingFang-SC-Medium';
    }
</style>