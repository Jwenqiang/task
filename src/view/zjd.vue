<template>
	<div class="container" id="screenshotsSection">
		<section class="stage">
		    <img src="images/stage.jpg" />
		    <!--金蛋-->
		    <div class="goldenEgg Egg1">
		        <img src="images/egg.png" alt="" id="egg1" v-show="eggAll" @click="eggAll=false">
						<template v-if="eggAll==false">
							<img src="images/egg2.png" alt="" id="egg2">
							<img src="images/9.png" alt="" id="boom1" :class="eggAll==false?'show':''">
						</template>
		        <img src="images/1.png" id="czi1" class="czi main_jb2" v-show="eggAll"/>
		    </div>
<!-- 		    <div class="goldenEgg Egg2" onclick="zaidan(2)">
		        <img src="images/egg.png" alt="" id="egg2">
		        <img src="images/9.png" alt="" id="boom2">
		        <img src="images/1.png" id="czi2" class="czi"/>
		    </div>
		    <div class="goldenEgg Egg3" onclick="zaidan(3)">
		        <img src="images/egg.png" alt="" id="egg3">
		        <img src="images/9.png" alt="" id="boom3">
		        <img src="images/1.png" id="czi3" class="czi"/>
		    </div> -->
		    <!--锤子-->
		    <div class="hit" id="J_Hit"><img src="images/1.png" /></div>
		    <!-- <audio src="music/hit.mp3" id="J_HitAudio"></audio> -->
		    <!-- 背景音乐 -->
		    <!-- <audio id="bgAudio" type="audio/mpeg" src="music/default.mp3" loop="loop" hidden="true" autostart="true" autoplay="autoplay" ></audio> -->
		    <!-- <audio id="bgAudio" type="audio/mpeg" src="music/default.mp3" loop="loop" autostart="true" autoplay="autoplay"></audio> -->
		</section>
		
		
		<!-- 隐藏该链接 -->
		<a
		  id="exportImgLink"
		  class="export-img-link"
		  :download="exportName + '.png'"
			style="display: none;"
		>
		  <img id="exportImg" class="export-img" alt="cavas图" />
		</a>
		<button class="export-btn" @click="exportData">导出</button>
		
	</div>
</template>

<script>
	import html2canvas from 'html2canvas'
	export default{
		name:"egg",
		data(){
			return{
				eggAll:true,
				exportName:"1"
			}
		},
		created() {
			
			html2canvas(document.body).then(function(canvas) {
			    document.body.appendChild(canvas);
			});
		},
		methods:{
			exportData() {
			  html2canvas(document.querySelector('#screenshotsSection'), {
			    scale: 2, //放大一倍，使图像清晰一点
			  }).then((canvas) => {
			    const exportImgEle = document.querySelector('#exportImg');
			    const exportImgLinkEle = document.querySelector('#exportImgLink');
			    exportImgEle.src = canvas.toDataURL('image/png');
			    exportImgLinkEle.href = canvas.toDataURL('image/png');
			    exportImgLinkEle.click();  // 执行 <a> 元素的下载
			  });
			},
		}
	}
</script>

<style scoped>
	.container {
	    display: block;
	    position: relative;
	    min-height: 100vh;
	    max-width: 640px;
	    min-width: 320px;
	    margin: 0 auto;
	    background: url(../../public/images/bg.jpg) center 0 repeat-y;
	    -webkit-background-size: 100% auto;
	    -webkit-box-sizing: border-box;
	}
	.stage {
	    width: 100%;
	    -webkit-perspective: 800;
	    -webkit-perspective-origin: 50% 200px;
	    position: relative;
	}
	.stage > img {
	    width: 100%;
	    height: 8.4rem;
	    pointer-events: none;
	}
	img {
	    border: medium none;
	    vertical-align: middle;
			width:100%;
	}
	.Egg1 {
	    /* animation: animX 6s cubic-bezier(0.36, 0, 0.64, 1) -3s infinite alternate, animY 6s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate, scale 12s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate; */
	}
	.Egg2 {
	    animation: animX 6s cubic-bezier(0.36, 0, 0.64, 1) -7s infinite alternate, animY 6s cubic-bezier(0.36, 0, 0.64, 1) -4s infinite alternate, scale 12s cubic-bezier(0.36, 0, 0.64, 1) -4s infinite alternate;
	}
	.Egg3 {
	    animation: animX 6s cubic-bezier(0.36, 0, 0.64, 1) -11s infinite alternate, animY 6s cubic-bezier(0.36, 0, 0.64, 1) -8s infinite alternate, scale 12s cubic-bezier(0.36, 0, 0.64, 1) -8s infinite alternate;
	}
	#egg1{
		
	}
	.stage .hit {
	    display: none;
	    position: absolute;
	    z-index: 300;
	    left: 50%;
	    top: 50%;
	    margin-left: 0;
	    margin-top: -80px;
	    pointer-events: none;
	}
	#boom1, #boom2, #boom3 {
	    position: absolute;
	    width: 120%;
	    height: 120%;
	    bottom: .4rem;
	    left: 0;
	    /* display: none; */
	}
	.goldenEgg {
	    width: 2.4rem;
	    height: 2.4rem;
	    position: absolute;
	    transform-style: preserve-3d;
			left: 2.55rem;
			bottom: 1rem;
	}
	.goldenEgg .czi {
	    position: absolute;
	    top: -74px;
	    right: -89px;
	    /* display: none; */
	}
/* 添加z砸蛋动画样式 */
.main_jb2{
    animation-name:wobble;
    -webkit-animation-name:wobble;
    -o-animation-name:wobble;
    -ms-animation-name:wobble;
    -moz-animation-name:wobble;
    animation-duration:1s;
    -webkit-animation-duration:1s;
    animation-timing-function: linear;
     -webkit-animation-timing-function: linear;
     -o-animation-timing-function: linear;-ms-animation-timing-function: linear;
     -moz-animation-timing-function: linear;animation-delay: 0;
     -webkit-animation-delay: 0;-o-animation-delay: 0;-ms-animation-delay: 0;
     -moz-animation-delay: 0;animation-iteration-count: infinite; -webkit-animation-iteration-count: infinite;-o-animation-iteration-count: infinite;-ms-animation-iteration-count: infinite; -moz-animation-iteration-count: infinite;}

.show{
	animation: big 1s ease 1 forwards,down 2s 1s ease 1 forwards;
}
@keyframes big{
	0%{transform: scale(0);}
	50%{opacity: 1;}
	to{transform: translate3d( 0,-60px,-40px) scale(1.5);}
}
@keyframes down{
	0%{}
	to{transform: translate3d( 0,-50px,320px) scale(1.2);opacity: 0;}
}
  @keyframes wobble{
    0% {
    transform:translate(0px,0) rotate(0);
    }
    25% {
   transform:rotate(-20deg) translate(-20px,0);
   /* transform:rotate(-30deg); */
    }
    50% {
        /* transform:translate(0,0); */
				/* transform:rotate(-45deg); */
    }
    75% {
        transform:rotate(30deg) translate(10px,0);
				/* transform:rotate(30deg); */
    }
    100% {
        /* transform:translate(-20px,0) rotate(0); */
				transform:translate(0,0) rotate(0);
				/* transform:rotate(45deg); */
    }
   }


	 @keyframes scale {
	 
	    0% {
	      transform: scale(0.7)
	    }
	    50% {
	      transform: scale(1)
	    }
	    100% {
	      transform: scale(0.7)
	   }
	 }
	 @keyframes animX{
	    0% {left: 8%;}
	  100% {left: 60%;}
	}
	@keyframes animY{
	    0% {bottom: 15.48%;z-index: 1;}
	  100% {bottom: 9.52%;z-index: 100;}
	}
	/* 奖品弹框 */
	.win1{ 
	    background:rgba(0,0,0,0.8);
	    background:-webkit-rgba(0,0,0,0.8);
	    width:100%;
	    height:100%;
	    top:0px;
	    left:0px;
	    z-index:1000; 
	    position:fixed;
	    display:none;
	    overflow-x:hidden
	}
	.box3{
	    width:70%; 
	    height:8rem;
	    border-radius: .2rem;
	    transform: translate(-50%,-50%);
	    background: url(../../public/images/trophyBg.jpg) no-repeat;
	    background-size: 100% 100%;  
	    position: absolute;
	    left: 50%;
	    top: 50%;
	}
	.info{
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	    margin:0.5rem .3rem 0;
	    position: relative;
	    height:0.6rem;
	    line-height: 0.6rem;
	    box-sizing:border-box
	}
	.box3 .shop{
	    margin-top: 1.1rem;
	}
	.info span{
	    display: block;
	    font-size: .32rem;
	    width: 2rem;
	    text-align: right;
	}
	.info input{
	    border-radius: .1rem;
	    width: 3rem;
	    padding: .12rem .16rem;
	    border: none;
	    font-size: .3rem;
	    outline:none;
	    background: #dfdfdf;
	    height:0.6rem;
	    line-height: 0.6rem;
	    box-sizing:border-box
	}
	#submit{
	    border: none;
	    padding: .1rem .6rem;
	    border-radius: .16rem;
	    background: #C68E3A;
	    display: block;
	    margin: 0 auto;
	    margin-top: 1rem;
	}
	.sj {
	    border:.12rem solid #fff;
	    border-color:#999 transparent transparent transparent;
	    border-style:solid dashed dashed dashed;
	    position: absolute;
	    right: .4rem;
	    top: 0.25rem;
	    z-index: 3;
	    height:0.6rem;
	    line-height: 0.6rem;
	    box-sizing:border-box
	}
	#shopId,#siteId{
	    width: 3rem;
	    padding: 0 .16rem;
	    position: absolute;
	    background: #f3ae47;
	    right: .3rem;
	    top: 0.6rem;
	    z-index: 99999;
	    display: none;/*none*/
	}
	#shopId div,#siteId div{
	    width: 100%;
	    height: .6rem;
	    line-height: .6rem;
	    font-size: 0.3rem;
	    border-bottom: #ccc 1px solid;
	}
	#shopId div:last-child{
	    border-bottom: none;
	}
	#draw{
	    border: none;
	    padding: .1rem .6rem;
	    border-radius: .16rem;
	    background: rgb(49, 117, 248);
	    display: block;
	    margin: 0 auto;
	    margin-bottom: .4rem;
	    color: #fff;
	}
	.item{
	    width: 100%
	}
	.code-sj{
	    position: absolute;
	    right:0.3rem;
	    z-index: 3;
	    font-size:0.2rem;
	    background:rgba(100, 40, 40, 0.3);
	    border-top-right-radius: .1rem;
	    border-bottom-right-radius: .1rem;
	    border:none;
	    width:1.4rem;
	    text-align:center;
	    height:0.6rem;
	    line-height: 0.6rem;
	    box-sizing:border-box
	}
	.si-pic{
	    /* width:2rem; */
	    background:#dfdfdf;
	    position: absolute;
	    right:0.3rem;
	    z-index: 3;
	    padding:0;
	    height:0.5rem;
	    line-height:0.5rem;
	    border-top-right-radius: .1rem;
	    border-bottom-right-radius: .1rem;
	}
</style>
