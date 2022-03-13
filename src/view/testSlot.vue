<template>
	<div class="container" id="test">
		测试字体
		<button @click="draw()" style="margin-right: 20px;border: 1px solid #ccc;">生成海报</button>
		<!-- <button @click="setHb()" style="margin-right: 20px;border: 1px solid #ccc;">测试海报</button> -->
		<button  @click="clearCanvas()">清除海报</button>
	  <header>
	    <slot name="header"></slot>
	  </header>
	  <main>
	    <slot></slot>
	  </main>
	  <footer>
	    <slot name="footer"></slot>
	  </footer>
		<canvas ref="canvaShare" width="750" height="1664" style="width: 100%;"></canvas>
		<img src="images/cbj.png" id="bj" ref="bj"/>
		<vue-qr :text="downloadData.url" :margin="0" colorDark="#000" colorLight="#fff"
			:logoSrc="imageUrl" :logoScale="0.25" :size="112" ref="Qrcode" style="display: none;">
		</vue-qr>
		<img src="https://pic.centanet.com/shenzhen/pic/agent/103524.jpg" id="tx" ref="tx"/>
	</div>
</template>

<script>
	import Vue from 'vue';
	import vueQr from 'vue-qr' //第二种绘制  可以加logo
	 import lrz from 'lrz' 
	
	export default{
		name:"testSlot",
		data(){
			return{
				imageUrl:"images/logo.png",
				downloadData: {
					url: 'https://pic.centanet.com/shenzhen/pic/agent/103524.jpg',
					icon: '随便一张图片的地址也行'
				},
				img:""
			}
		},
		components: {
			vueQr
		},
		mounted() {
			// this.setHb()
		},
		methods:{
			downFileNo(src){
				var down=document.createElement('a');
				down.download = '下载图片';
				down.style.display = "none";
				// down.setAttribute("href",src);
				down.href = URL.createObjectURL(src);
				document.body.appendChild(down);
				down.click();
			},
			downFile(file,options){
				var that=this;
				lrz( file, [ options ] )
								.then(function(rst) {
										console.log(rst);
										//成功时执行
										var down=document.createElement('a');
										down.download = '下载图片';
										down.style.display = "none";
										// down.setAttribute("href",rst.base64);
										console.log(rst.file)
										down.href = URL.createObjectURL(rst.file);
										// document.body.appendChild(down);
										down.click();
										// 下载完成后后清除海报
										URL.revokeObjectURL(down.href); // 释放URL 对象
										// document.body.removeChild(down);
				
								}).catch(function(error) {
				
										//失败时执行
				
								}).always(function() {
				
										//不管成功或失败，都会执行
				
								})
			},
			
			clearCanvas(){
				var cav = this.$refs.canvaShare;
				var ctx=cav.getContext('2d'); 
				ctx.restore();//防止之前用了clip()限制区域
				// cav.height='1664';
				// cav.width='750';
				ctx.fillStyle="#fff";
				ctx.fillRect(0,0,750,1664);
				console.log(cav);
			},
			// setHb(){
			// 	var cav=document.createElement('canvas');
			// 	cav.height='1664';
			// 	cav.width='750';
			// 	var ctx=cav.getContext('2d'); 
			// 	document.getElementById('test').appendChild(cav);
			// 	cav.style="width:100%";		
			// 	cav.id="cav";		
			// 	var bj = document.getElementById('bj');
			// 	const nowDate=new Date().toLocaleDateString().replace(/\//g,'-');
			// 	console.log(nowDate)
			// 	var imgBj=new Image();
			// 	imgBj.onload=()=>{
			// 		// 画背景
			// 		ctx.drawImage(imgBj, 0, 0);
			// 		// 画文字
			// 		ctx.font="36px PingFangSC-Regular"
			// 		ctx.fillStyle = "#1F577C";
			// 		ctx.fillText('连续早起',80,519)
			// 		ctx.fillText('天丨',300,519)
			// 		ctx.fillText(nowDate,368,519)
			// 		ctx.font="60px PingFangSC-Semibold"
			// 		ctx.fillText('21',232,526)
			// 		// 画换行的文字 鸡汤
			// 		var str = '要有最朴素的生活，与最遥远的梦想;起床享受这个愉悦的清晨吧，朋友。';
			// 		var a = 64;
			// 		var b = 600;
			// 		var lineheight = 45;
			// 		var lines = str.split(';');//用分号标识换行
					
			// 		ctx.font="32px fz,PingFangSC-Regular"
			// 		ctx.fillStyle = "#fff";
			// 		console.log("用特殊字体")
			// 		for (var j = 0; j<lines.length; j++){
			// 			ctx.fillText(lines[j], a, b + (j*lineheight) );
			// 		}
			// 		// 画二维码
			// 		// 二维码
			// 		ctx.fillStyle="#fff";
			// 		ctx.fillRect(568, 1434, 120, 120)//矩形底色
			// 		var ewm = this.$refs.Qrcode.$el;
			// 		var imgEwm=new Image();
			// 		imgEwm.onload=()=>{
			// 			console.log('二维码加载完成')
			// 			ctx.drawImage(imgEwm, 572, 1438, 112, 112);
						
			// 		}
			// 		imgEwm.src=ewm.src;
			// 		this.drTx(ctx);
			// 		// 画个人信息
			// 		ctx.font="bold 34px PingFangSC-Semibold"
			// 		ctx.fillStyle = "#333333";
			// 		ctx.fillText('蒋文强',171,1477)
			// 		ctx.font="24px PingFangSC-Regular"
			// 		ctx.fillStyle = "#333333";
			// 		ctx.fillText('前端开发工程师',171,1512)
			// 		ctx.font="20px PingFangSC-Regular"
			// 		ctx.fillStyle = "#666";
			// 		ctx.fillText('通过中原找房成长系统生成',171,1540)
			// 	}
			// 	imgBj.src=bj.src;	
			// },
			// drTx(ctx){
			// 	// 画头像
			// 	ctx.save();//在使用 clip() 方法前通过使用 save() 方法对当前画布区域进行保存 不保存clip()之后的动作画不了
			// 	ctx.arc(104,1494,44,0,2*Math.PI);
			// 	ctx.fillStyle = "#ccc";
			// 	ctx.fill();
			// 	ctx.clip();//之后画的东西只在这个区域显示 坐标还是原始坐标 所以使用它  其他画布建议在前面画
			// 	var tx = document.getElementById('tx');
			// 	ctx.drawImage(tx,60,1450,88,88)
				
			// 	ctx.restore();
			// },
			draw () {//canvas生成海报
			    const that = this
			    const canvas = this.$refs.canvaShare
			    const ctx = canvas.getContext('2d')
			    // 绘制图片以及信息
			    this.renderImage(ctx)
			    // 把canvas转化成图片
			    setTimeout(function() {
						console.log("生成图片")
			        that.convertCanvasToImage(canvas)
			    }, 500)
			},
			renderImage(ctx){// 绘制图片以及信息
				var that=this;
				console.log(ctx)
				var ewm = this.$refs.Qrcode.$el;
				console.log(ewm)
				// 所有图片加载完再画图
				Promise.all([
				           this.loadImage(this.$refs.bj.src),
				           this.loadImage(ewm.src),
				           this.loadImage(this.$refs.tx.src),

				       ]).then((imgs)=>{
								 console.log(imgs)
				       // imgs就是图片队列
				       // 按照顺序依次绘制图片
				       ctx.drawImage(imgs[0], 0, 0, 750, 1664);//画背景
				       ctx.drawImage(imgs[1], 572, 1438, 112, 112);//画二维码
				       that.drawAvatar(ctx, imgs[2], 60,1450,88)//画头像
							console.log("---------画文字-------")
							const nowDate=new Date().toLocaleDateString().replace(/\//g,'-');
				       // 画文字
				       ctx.font="36px PingFangSC-Regular"
				       ctx.fillStyle = "#1F577C";
				       ctx.fillText('连续早起',80,519)
				       ctx.fillText('天丨',300,519)
				       ctx.fillText(nowDate,368,519)
				       ctx.font="60px PingFangSC-Semibold"
				       ctx.fillText('21',232,526)
				       
				       // 画换行的文字 鸡汤
				       var str = '要有最朴素的生活，与最遥远的梦想;起床享受这个愉悦的清晨吧，朋友。';
				       var a = 64;
				       var b = 600;
				       var lineheight = 45;
				       var lines = str.split(';');//用分号标识换行
				       
				       ctx.font="32px fz,PingFangSC-Regular"
				       ctx.fillStyle = "#fff";
				       console.log("用特殊字体")
				       for (var j = 0; j<lines.length; j++){
				       	ctx.fillText(lines[j], a, b + (j*lineheight) );
				       }
				       // 画个人信息
				       ctx.font="bold 34px PingFangSC-Semibold"
				       ctx.fillStyle = "#333333";
				       ctx.fillText('蒋文强',171,1477)
				       ctx.font="24px PingFangSC-Regular"
				       ctx.fillStyle = "#333333";
				       ctx.fillText('前端开发工程师',171,1512)
				       ctx.font="20px PingFangSC-Regular"
				       ctx.fillStyle = "#666";
				       ctx.fillText('通过中原找房成长系统生成',171,1540)
				   })
			},
			// 预加载图片，最后返回一个promise对象
			loadImage(url) {
				console.log(url)
			    return new Promise((resolve)=>{
			        const img = new Image();
							img.setAttribute("crossOrigin",'Anonymous')//解决canvas.toDataURL报错  图片跨域
			        img.onload = ()=>{
								resolve(img);
							}
			        img.src = url;
			    })
			},
			// 绘制用户头像（圆形）
			drawAvatar (ctx, img, x, y, w) {
			    //cavas 图片地址 位置x 位置y w宽高
			    const r = w / 2 
			    ctx.save()
			    ctx.arc(x + r, y + r, r, 0, 2 * Math.PI, false)
			    ctx.clip()
			    ctx.drawImage(img, x, y, w, w)
			    ctx.restore()
			},
			// 将canvas转化成image，才可以进行下载，必须等canvas绘制完成
			convertCanvasToImage(canvas) {
			    var image = new Image();
			    image.src = canvas.toDataURL("image/png");
			    this.img = image.src;
					this.downFile(this.img);
					// this.downFileNo(this.img);
			}
			
		}
		
	}
</script>

<style lang="less" scoped>
	.container{
		font-family: "fz";
	}
	#bj,#tx{
		display: none;
	}

</style>
