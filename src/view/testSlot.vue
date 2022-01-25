<template>
	<div class="container" id="test">
	  <header>
	    <slot name="header"></slot>
	  </header>
	  <main>
	    <slot></slot>
	  </main>
	  <footer>
	    <slot name="footer"></slot>
	  </footer>
		<img src="images/logo.png" id="tx"/>
	</div>
</template>

<script>
	export default{
		name:"testSlot",
		data(){
			return{
				
			}
		},
		mounted() {
			this.setHb()
		},
		methods:{
			setHb(){
				var cav=document.createElement('canvas');
				cav.height='1000';
				cav.width='300';
				var ctx=cav.getContext('2d'); 
				document.getElementById('test').appendChild(cav);
				cav.style="border:1px solid #ddd;"
				
				var img = document.getElementById('tx');
				ctx.font="24px PingFangSC-Regular"
				ctx.fillStyle = "#000";
				ctx.fillText('ddd',20,20)
				
				
				// ctx.lineJoin = "round";
				// ctx.lineWidth = 20;
				ctx.strokeRect(50, 600, 100, 50);
				ctx.fillRect(50, 800, 150, 100);
				
				ctx.fillStyle="red";//1
				ctx.fillRect(40,40,150,100);//1
				
				ctx.font="24px PingFangSC-Regular"
				ctx.fillStyle = "blue";
				ctx.fillText('clip()之后画的东西',60,200)

				ctx.arc(60,400,40,0,2*Math.PI);
				ctx.strokeStyle = "#fff";
				ctx.stroke();
				ctx.save();//在使用 clip() 方法前通过使用 save() 方法对当前画布区域进行保存 不保存以后1的动作画不了 
				ctx.clip();//之后画的东西只在这个区域显示 坐标还是原始坐标 所以使用它  其他画布建议在前面画
				img.onload=()=>{
					ctx.drawImage(img,20,360,80,80)
				}
				//ctx.restore();//恢复因clip限定的裁剪区域 恢复后圆角失效
				// ctx.arc(60,400,40,0,2*Math.PI)
				// ctx.stroke();
				// ctx.clip();


			}
		}
		
	}
</script>

<style>
</style>
