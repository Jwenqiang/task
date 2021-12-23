<template>
	<div class="container">
		<audio controls="controls" loop="loop" preload="preload" src="images/m.mp3" ref="music" hidden></audio>
		<audio controls="controls" loop="loop" preload="preload" src="images/nj.mp3" ref="music1" autoplay
			hidden></audio>
		<div class="load" v-show="!load">
			<div class="pic">
				<!-- <span></span> -->
				<!-- <b>{{loadNum}}%</b> -->
			</div>
		</div>
		<span id="music" :class="{'animatedR':roleM}" @click="bfPlay()" v-show="!showTip"></span>
		<!-- <full-page :options="options" ref="fullpage" v-show="load"> -->

			<div class="section">
				<nut-swiper
				    direction="horizontal"
				    :loop="true"
				    :canDragging="false"
				    :paginationVisible="false"
					 @slideChangeEnd="handleChange"
				>
				 <!-- @click="njPlay()" -->
				<div class="slide nut-swiper-slide page0">
					<div class="content">
						<div class="title">
						</div>
						<div class="ty">
						</div>
						<div class="p0-y1"></div>
						<div class="p0-y2"></div>
						<div class="p0-y3"></div>
						<div class="p0-btom">
							左划回顾2021
						</div>
					</div>
				</div>
				<!--  @touchstart="gtouchstart()" @touchmove="gtouchmove()"
					@touchend="gtouchend()" -->
				<div class="slide nut-swiper-slide page1">
					<div class="content">
						<!--  :class="{'go':go}" @click="goNext" -->
						<div class="man">
							<img width="100%" :src="`images/year/0000${idx}.png`" alt="">
						</div>
						<div class="p1-ty">
						</div>
						<div class="p1-y1"></div>
						<div class="p1-y2"></div>
						<div class="p1-y3"></div>
						<div class="mtext p1-text">
							<p>你是第<span>25454</span>位幸运鹅 </p>
							<p>成为了中原的一份子</p>
						</div>
						<div class="p1-nj1"></div>
						<div class="p1-nj2"></div>
					</div>
				</div>
				<div class="slide nut-swiper-slide page2">
					<div class="content">
						<div class="p2-ty">
						</div>
						<div class="p2-y1"></div>
						<div class="p2-y2"></div>
						<div class="p2-y3"></div>
						<div class="p2-text">
							<p>当你肩负<span>2454</span>人的购房梦想</p>
							<p>“星级”置业服务从此启航</p>
						</div>
						<div class="p2-man">
							<div class="p2-yin"></div>
							<div class="p2-m"></div>
						</div>
					</div>
				</div>
				<div class="slide nut-swiper-slide page3">
					<div class="content">
						<div class="p3-ty">
						</div>
						<div class="p3-y1"></div>
						<div class="p3-y2"></div>
						<div class="p3-y3"></div>
						<div class="p3-text">
							<p>今年你及时接听<span>2454</span>个客户的来电</p>
							<p>56个客户的购房疑问都因你的</p>
							<p>及时回复，得到了解决。优秀的你</p>
							<p>打败了中原98%的经纪人</p>
						</div>
						<div class="p3-man">
							<div class="p3-yin"></div>
							<div class="p3-m"></div>
						</div>
						<div class="p3-tm">
							<label class="tm1">现在看房有优惠吗</label>
							<label class="tm2">什么时候可看房</label>
							<label class="tm3">户型怎么样？</label>
							<label class="tm4">什么时候可看房</label>
							<label class="tm5">看房有优惠吗</label>
							<label class="tm6">户型怎么样？</label>
							<label class="tm7">看房有优惠吗</label>
						</div>
					</div>
				</div>
				<div class="slide nut-swiper-slide page4">
					<div class="content">
						<div class="p4-yz"></div>
						<div class="p4-text">
							<p>在深圳2019.95平方公里的土地上</p>
							<p>你替他点亮了一盏属于他的一盏灯</p>
							<p>替<span>56</span>个房源找到了它的新主人</p>
						</div>
						<div class="p4-mtl"></div>
						<div class="p4-lb"></div>
						<div class="man">
							<img width="100%" :src="`images/year/0000${idx}.png`" alt="">
						</div>
						
					</div>
				</div>
				<div class="slide nut-swiper-slide page5">
					<div class="content">
						<div class="p5-ty">
						</div>
						<div class="p5-y1"></div>
						<div class="p5-y2"></div>
						<div class="p5-y3"></div>
						<div class="p5-text">
							<p>进线不等待，成交就现在</p>
							<p>今年你促成了<span>562</span>万的成交额</p>
						</div>
						<div class="p5-man">
							<div class="p5-m">
								<div class="p5-hand"></div>
							</div>
						</div>
						
					</div>
				</div>
				<div class="slide nut-swiper-slide page6">
					<div class="content">
						<div class="p6-ty">
						</div>
						<div class="p6-y1"></div>
						<div class="p6-y2"></div>
						<div class="p6-y3"></div>
						<div class="p6-text">
							<p>xx月xx日，深圳体感温度</p>
							<p>高达38°带着客户到**小区看了</p>
							<p>个前前后后。真诚服务流出的</p>
							<p>汗足以浇灌出苍天大树。</p>
						</div>
						<div class="p6-man">
							<div class="p6-m">
							</div>
						</div>
					</div>
				</div>
				<div class="slide nut-swiper-slide page7">
					<div class="content">
						<div class="p7-ty">
						</div>
						<div class="p7-y1"></div>
						<div class="p7-y2"></div>
						<div class="p7-y3"></div>
						<div class="p7-text">
							<p>迈出一小步，成功一大步</p>
							<p>65人因为你的专业服务</p>
							<p>更加信任中原找房</p>
						</div>
						<div class="p7-man">
							<div class="p7-yin"></div>
							<div class="p7-m"></div>
						</div>
						<div class="p7-man1">
							<div class="p7-yin"></div>
							<div class="p7-m"></div>
						</div>
					</div>
				</div>
				<div class="slide nut-swiper-slide page8">
					<div class="content">
						<div class="p8-ty">
						</div>
						<div class="p8-y1"></div>
						<div class="p8-y2"></div>
						<div class="p8-y3"></div>
						<div class="p8-text">
							<p>在深圳，没有你不熟悉的地盘</p>
							<p>话说，你现在算是行走的GPS吧</p>
						</div>
						<div class="p8Map">
							<span class="ba"><img src="images/year/ba.png" width="100%" v-if="qy.indexOf('ba')<0"/><template v-else><img src="images/year/ba1.png" width="100%" class="qyD"/><img src="images/year/cicle.png" class="cicle"/></template></span>
							<span class="gm"><img src="images/year/gm.png" width="100%" v-if="qy.indexOf('gm')<0"/><template v-else><img src="images/year/gm1.png" width="100%" class="qyD"/><img src="images/year/cicle.png" class="cicle"/></template></span>
							<span class="ns"><img src="images/year/ns.png" width="100%" v-if="qy.indexOf('ns')<0"/><template v-else><img src="images/year/ns1.png" width="100%" class="qyD"/><img src="images/year/cicle.png" class="cicle"/></template></span>
							<span class="lh"><img src="images/year/lh.png" width="100%" v-if="qy.indexOf('lh')<0"/><template v-else><img src="images/year/lh1.png" width="100%" class="qyD"/><img src="images/year/cicle.png" class="cicle"/></template></span>
							<span class="ft"><img src="images/year/ft.png" width="100%" v-if="qy.indexOf('ft')<0"/><template v-else><img src="images/year/ft1.png" width="100%" class="qyD"/><img src="images/year/cicle.png" class="cicle"/></template></span>
							<span class="lg"><img src="images/year/lg.png" width="100%" v-if="qy.indexOf('lg')<0"/><template v-else><img src="images/year/lg1.png" width="100%" class="qyD"/><img src="images/year/cicle.png" class="cicle"/></template></span>
							<span class="lhu"><img src="images/year/lhu.png" width="100%" v-if="qy.indexOf('lhu')<0"/><template v-else><img src="images/year/lhu1.png" width="100%" class="qyD"/><img src="images/year/cicle.png" class="cicle"/></template></span>
							<span class="ps"><img src="images/year/ps.png" width="100%" v-if="qy.indexOf('ps')<0"/><template v-else><img src="images/year/ps1.png" width="100%" class="qyD"/><img src="images/year/cicle.png" class="cicle"/></template></span>
							<span class="yt"><img src="images/year/yt.png" width="100%" v-if="qy.indexOf('yt')<0"/><template v-else><img src="images/year/yt1.png" width="100%" class="qyD"/><img src="images/year/cicle.png" class="cicle"/></template></span>
							<span class="dp"><img src="images/year/dp.png" width="100%" v-if="qy.indexOf('dp')<0"/><template v-else><img src="images/year/dp1.png" width="100%" class="qyD"/><img src="images/year/cicle.png" class="cicle"/></template></span>
						</div>
						<div class="p4-mtl"></div>
						<div class="p4-lb"></div>
						<div class="man">
							<img width="100%" :src="`images/year/0000${idx}.png`" alt="">
						</div>
						
					</div>
				</div>
				<div class="slide nut-swiper-slide page9">
					<div class="content">
						<div class="p9-ty">
						</div>
						<div class="p9-y1"></div>
						<div class="p9-y2"></div>
						<div class="p9-y3"></div>
						<div class="p9-text">
							<p>2021年你最高</p>
							<p>一天走了3.5万步，</p>
							<p>全年共***步。</p>
							<p>别不信！这足以绕深圳50圈</p>
						</div>
						<div class="man">
							<img width="100%" :src="`images/year/0000${idx}.png`" alt="">
						</div>
					</div>
				</div>
				<div class="slide nut-swiper-slide page10">
					<div class="content">
						<div class="p10-ty">
						</div>
						<div class="p10-y1"></div>
						<div class="p10-y2"></div>
						<div class="p10-y3"></div>
						<div class="p10-text">
							<p>今年你及时接听<span>2454</span>个客户的来电</p>
							<p>56个客户的购房疑问都因你的</p>
							<p>及时回复，得到了解决。优秀的你</p>
							<p>打败了中原98%的经纪人</p>
						</div>
						<div class="p10-man">
							<div class="p10-yin"></div>
							<div class="p10-m"></div>
						</div>
					</div>
				</div>
				<div class="slide nut-swiper-slide page11">
					<div class="content">
						<div class="p11-ty">
						</div>
						<div class="p11-y1"></div>
						<div class="p11-y2"></div>
						<div class="p11-y3"></div>
						<div class="p11-text">
							<p>今年你及时接听<span>2454</span>个客户的来电</p>
							<p>56个客户的购房疑问都因你的</p>
							<p>及时回复，得到了解决。优秀的你</p>
							<p>打败了中原98%的经纪人</p>
						</div>
						<div class="man" :class="{'go':go}" @click="goNext">
							<img width="100%" :src="`images/year/0000${idx}.png`" alt="">
						</div>
						<div class="p11-btn">
							<label></label>
						</div>
					</div>
				</div>
				<div class="slide nut-swiper-slide page12">
					<div class="content">
						<div class="p12-y1"></div>
						<div class="p12-y2"></div>
						<div class="p12-y3"></div>
						<div class="p12-title">
							给2022年立个flag
						</div>
						<div class="p12-flag">
							<label class="flg1" :class="flag==1?'on':''" @click="setFlag(1,'做值得信赖的中原人')">
								<span>做值得信赖的中原人</span>
							</label>
							<label class="flg2" :class="flag==2?'on':''" @click="setFlag(2,'要陪在值得的人身边一年又一年十年又十年')">
								<span>要陪在值得的人身边一年又一年十年又十年</span>
							</label>
							<label class="flag3" :class="flag==3?'on':''" @click="setFlag(3,'万事顺意，美好相随')">
								<span>万事顺意，美好相随</span>
							</label>
							<label class="flg4" :class="flag==4?'on':''" @click="setFlag(4,'每一年都奔走自己的热爱里')">
								<span>每一年都奔走自己的热爱里</span>
							</label>
							<label class="flg5" :class="flag==5?'on':''" @click="setFlag(5,'赚它一个亿')">
								<span>赚它一个亿</span>
							</label>
							<label class="flg6" :class="flag==6?'on':''" @click="setFlag(6,'2022开单王')">
								<span>2022开单王</span>
							</label>
							<label class="flg7" :class="flag==7?'on':''" @click="setFlag(7,'成功脱单')">
								<span>成功脱单</span>
							</label>
						</div>
						<div class="p12-man">
						</div>
						<div class="p12-btn">
							点击Flag生成海报
						</div>
						<div class="p12-point"></div>
					</div>
				</div>
				<div class="slide nut-swiper-slide page13">
					<div class="content">
						<div class="p13Bj">
							<img src="images/year/p13.jpg" width="100%"/>
						</div>
						<div class="p13-btn">
							<label class="btn1" @click="showTip=true"></label>
							<label class="btn2" @click="showImg=true"></label>
						</div>
						<div class="p13-zy" v-show="showTip">
							<div class="p13-yy" @click="showTip=false"></div>
							<div class="p13-point"></div>
						</div>
						<div class="p13-zy" v-show="showImg">
							<div class="p13-yy" @click="showImg=false"></div>
							<div class="p13-img">
								<div class="pBox">
									<img src="images/year/p13.jpg" width="100%"/>
								</div>
								<label @click="showImg=false"></label>
							</div>
						</div>
					</div>
				</div>
				</nut-swiper>
			</div>
<!-- 			<div class="section">
				<div class="box3">
					<div style="height: 100vh">
						<img height="100%"
							src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redminote9pro/section11-1.jpg"
							alt="">
					</div>
				</div>
			</div> -->
		<!-- </full-page> -->
		
		<div>
		</div>

	</div>
</template>

<script>
	import Vue from 'vue';
	import 'fullpage.js/vendors/scrolloverflow';
	import VueFullpage from 'vue-fullpage.js';
	Vue.use(VueFullpage);
	var timeOutEvent = 0; //定时器 
	export default {
		name: "year",
		data() {
			return {
				options: {
					licenseKey: "",
					//是否显示导航，默认为false
					navigation: false,
					//横向slide nut-swiper-slide幻灯片是否循环滚动
					loopHorizontal: false,
					//是否使用css3 transform来实现滚动效果
					css3: true,
					//是否显示两侧的箭头
					controlArrows: false,
					//是否循环滚动，不会出现跳动，效果很平滑
					continuousVertical: true,
					//是否使用插件滚动方式，设为false后，会出现浏览器自带的滚动条，将不会按页滚动
					autoScrolling: false,
					//是否包含滚动条，设为true，则浏览器自带的滚动条会出现，页面还是按页滚动，但是浏览器滚动条默认行为也有效
					// scrollBar: true,
					//定义锚链接，用户可以快速打开定位到某一页面；不需要加"#"，不要和页面中任意的id和name相同
					anchors: ["year", "year2", "year3", "year4", "year5"],
					//是否锁定锚链接
					lockAnchors: true,
					// //导航小圆点的位置，left或者right,默认为right
					// navigationPosition: 'left',
					// //是否可以使用键盘方向键导航（上下键翻页），默认为true
					// keyboardScrolling: true,
					// //是否显示两侧的箭头
					// controlArrows: false,
					// //每一页幻灯片的内容是否垂直居中，默认为true
					// verticalCentered: true,
					// //字体是否随着窗口缩放而缩放 默认为true
					// resize: true,
					// //页面滚动速度
					// scrollingSpeed: 700,
					// //定义锚链接，用户可以快速打开定位到某一页面；不需要加"#"，不要和页面中任意的id和name相同
					// anchors: ["page1", "page2", "page3"],
					// //是否锁定锚链接
					// lockAnchors: true,
					// //定义section页面的滚动方式，需要引入jquery.easings插件
					// easing:'',
					// //是否使用css3 transform来实现滚动效果
					// css3: false,
					// //滚动到最顶部后是否连续滚动到底部
					// loopTop: true,
					// //滚动到最底部后是否连续滚动到顶部
					// loopBottom: true,
					// //横向slide幻灯片是否循环滚动
					// loopHorizontal: false,
					// //是否循环滚动，不会出现跳动，效果很平滑
					// continuousVertical: true,
					// //是否使用插件滚动方式，设为false后，会出现浏览器自带的滚动条，将不会按页滚动
					// autoScrolling: false,
					// //是否包含滚动条，设为true，则浏览器自带的滚动条会出现，页面还是按页滚动，但是浏览器滚动条默认行为也有效
					// scrollBar: true,
					// //设置每个section顶部的padding，当我们要设置一个固定在顶部的菜单、导航、元素等时使用
					// paddingTop: "100px",
					// //设置每个section底部的padding，当我们要设置一个固定在底部的菜单、导航、元素等时使用
					// paddingBottom: "100px",
					// //固定的元素，为jquery选择器；可用于顶部导航等
					// fixedElements: ".nav",
					// //在移动设置中页面敏感性，最大为100，越大越难滑动
					// touchSensitivity: 5,
					// //设为false，则通过锚链接定位到某个页面不再有动画效果
					// animateAnchor: false,
					// //是否记录历史，可以通过浏览器的前进后退来导航
					// recordHistory: true,
					// //绑定菜单，设定相关属性和anchors的值对应后，菜单可以控制幻灯片滚动
					// menu: '.nav',
					// // 鼠标移动到小圆点上时显示出的提示信息
					// navigationTooltips: ["第一页","第二页","第三页"],
					// // 是否显示当前页面小圆点导航的提示信息，不需要鼠标移上
					// showActiveTooltip: true,
					// // 是否显示横向幻灯片的导航
					// slidesNavigation: true,
					// // 横向幻灯片导航的位置，可以为top或者bottom
					// slidesNavPosition: 'bottom',
					// // 内容超过满屏时是否显示滚动条，需要jquery.slimscroll插件
					// scrollOverflow: true,
					// // section选择器
					// sectionSelector: ".section",
					// // slide选择器
					// slideSelector: ".slide"


				},
				roleM: false,
				idx: 0,
				go: false,
				timer: "",
				loadNum:0,
				load:false,
				qy:"",
				flag:"",
				flagText:"",
				showTip:false,
				routerNum:"",
				showImg:false
			}
		},
		watch:{
			
		},
		created() {
			this.readyLoad();
		},
		mounted() {
			this.timer = setInterval(() => {
				if (this.idx == 9) {
					this.idx = 0
				}
				this.idx += 1;
			}, 200)
		},
		methods: {
			handleChange(){
				
			},
			setFlag(idx,text){
				this.flag=idx;
				this.flagText=text;
			},
			readyLoad(){
				// let t=setInterval(()=>{
				// 	this.loadNum+=3;
				// 	if(this.loadNum==99){
				// 		this.loadNum=100;
				// 		clearInterval(t);
				// 		setTimeout(()=>{
				// 			this.load=true;
				// 		},1000)
				// 	}
				// },10)
				setTimeout(()=>{
					this.load=true;
				},1500)
			},
			goNext() {
				this.go = true;
				setTimeout(() => {
					clearInterval(this.timer);
					this.go = false;
					this.$refs.fullpage.api.moveTo('year', 12);
				}, 1200)
			},
			// 触摸事件开始
			gtouchstart() {
				timeOutEvent = setTimeout(this.longPress, 500); //这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适   
				return false;
			},
			//手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件   
			gtouchend() {
				clearTimeout(timeOutEvent); //清除定时器   
				if (timeOutEvent != 0) {
					//这里写要执行的内容（尤如onclick事件）   
					alert("你这是点击，不是长按");
				}
				return false;
			},
			//如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按   
			gtouchmove() {
				clearTimeout(timeOutEvent); //清除定时器   
				timeOutEvent = 0;

			},

			//真正长按后应该执行的内容   
			longPress() {

				//执行长按要执行的内容，如弹出菜单   
				alert("长按事件触发发");
				timeOutEvent = 0;
			},
			next() {
				// 向下滚动一页
				this.$refs.fullpage.api.moveSectionDown();
			},
			njPlay() {
				var audio1 = this.$refs.music1;
				//audio1.play(); // 这个就是播放
			},
			bfPlay() {
				var audio = this.$refs.music;
				var audio1 = this.$refs.music1;
				audio.volume = 0.5;
				this.roleM = !this.roleM;
				if (this.roleM) {
					audio1.pause();
					audio.play(); // 这个就是播放 
				} else {
					audio.pause(); // 这个就是暂停
				}
			},

		}
	}
</script>
<style>
	
</style>
<style lang="less" scoped>
	@import url("~@/assets/css/animate.min.css");
	// 公共类
	.son{
		width: 1.88rem;
		height: 1.88rem;
		background: url(../images/year/p0-ty.png) center no-repeat;
		background-size: 100%;
		position: absolute;
	}
	.y1{
		width: 1.23rem;
		height: 0.71rem;
		background: url(../images/year/p1-y1.png) center no-repeat;
		background-size: 100%;
		position: absolute;
	}
	.y2{
		width: 1.23rem;
		height: 0.71rem;
		background: url(../images/year/p1-y2.png) center no-repeat;
		background-size: 100%;
		position: absolute;
	}
	.y3{
		width: 0.81rem;
		height: 0.46rem;
		background: url(../images/year/p1-y3.png) center no-repeat;
		background-size: 100%;
		position: absolute;
	}
	.text{
		position: absolute;
		font-size: 0.36rem;
		color: #333;
		opacity: 0;
		animation: fadeInDown linear 1s 0.5s forwards;
		p{
			margin-bottom: 0.2rem;
		}
		span{
			color: #E91F1F;
			margin: 0 0.06rem;
		}
	}
	.man {
		height: 3rem;
		width: 100%;
		position: absolute;
		bottom: 1.4rem;
		left: 0.2rem;
		transition: all 1s linear;
	
		img {
			width: 3.8rem;
		}
	}
	.go {
		img {
			animation: goX ease-in 1.5s infinite;
		}
	
	}
	// -----------------------------------------
	.container {
		display: block;
		position: relative;
		min-height: 100vh;
		max-width: 750px;
		min-width: 320px;
		margin: 0 auto;
		-webkit-box-sizing: border-box;
		transition: all linear 0.5s;
		.load {
			transition: all linear 0.5s;
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 100;
			background: url(../images/year/loadBj.jpg) center bottom no-repeat;
			background-size: cover;
			.pic {
				width: 4rem;
				height: 4rem;
				position: absolute;
				top: 50%;
				left: 50%;
				margin: -1.45rem 0 0 -2rem;
				font-size: 30px;
				text-align: center;
				padding-top: 2rem;
				background: url(../images/year/loading.gif) center top no-repeat;
				background-size: 2rem;
				b {
					font-size: 0.38rem;
					color: #666;
					font-weight: 500;
					padding-right: 0.1rem;
				}
			}
		}
		.section{
			background: rgb(211 225 240) !important;
			height: 100%;
			transition: all linear 0.5s;
		}

		.slide {
			transition: all linear 0.5s;
			overflow: hidden;
			height: 100%;
			.content{
				min-height: 100vh;
				height: 100%;
				position: relative;
				// 为了入场动画
				// display: none;
			}
		}
		.page0{
			background: url(../images/year/p0Bj.jpg) center bottom no-repeat;
			background-size: cover;
			.title{
				background: url(../images/year/p0-text.png) center bottom no-repeat;
				background-size: 100%;
				width: 1.42rem;
				height: 4.58rem;
				position: absolute;
				top: 20%;
				left: 50%;
				margin-left: -0.71rem;
			}
			.ty{
				.son;
				top: 0.8rem;
				right: 0.8rem;
			}
			.p0-y1{
				.y1;
				top: 1.57rem;
				right: 0.47rem;
			}
			.p0-y2{
				.y2;
				left: 1.82rem;
				top: 2.76rem;
			}
			.p0-y3{
				.y3;
				left: 0.59rem;
				top: 1.56rem;
			}
			.p0-btom{
				height: 0.8rem;
				width: 4rem;
				position: absolute;
				left: 2.05rem;
				bottom: 1.2rem;
				background: url(../images/year/p0-right.png) left center no-repeat;
				background-size: 0.98rem;
				padding-left: 1.2rem;
				line-height: 0.8rem;
				font-size: 0.36rem;
				color: #434242;
			}
		}
		.page1 {
			background: url(../images/year/p1Bj.jpg) center bottom no-repeat;
			background-size: cover;
			.p1-ty{
				.son;
				top: 0.8rem;
				right: 1.2rem;
			}
			.p1-y1{
				.y1;
				top: 1.57rem;
				right: 2.4rem;
			}
			.p1-y2{
				.y2;
				right: 0.3rem;
				top: 4rem;
			}
			.p1-y3{
				.y3;
				right: 6.16rem;
				top:0.26rem;
			}
			.p1-text{
				.text;
				top: 2.91rem;
				left: 0.6rem;
			}
			.p1-nj1{
				width: 1.19rem;
				height: 0.62rem;
				background: url(../images/year/p1-n1.png) center bottom no-repeat;
				background-size: 100%;
				position: absolute;
				top: 7.08rem;
				right: 4.13rem;
			}
			.p1-nj2{
				width: 1.11rem;
				height: 0.58rem;
				background: url(../images/year/p1-n2.png) center bottom no-repeat;
				background-size: 100%;
				position: absolute;
				top: 7.08rem;
				right: 2.85rem;
			}
		}
		.page2{
			background: url(../images/year/p2Bj.jpg) center bottom no-repeat;
			background-size: cover;
			.p2-ty{
				.son;
				top: 0.8rem;
				right: 1.2rem;
			}
			.p2-y1{
				.y1;
				top: 2rem;
				right: 0.47rem;
			}
			.p2-y2{
				.y2;
				right: 5.13rem;
				top: 1.7rem;
			}
			.p2-y3{
				.y3;
				right: 6.53rem;
				top:-0.1rem;
			}
			.p2-text{
				.text;
				top: 2.91rem;
				left: 0.6rem;
			}
			.p2-man{
				position: absolute;
				right: 2.88rem;
				bottom: 1.67rem;
				width: 1.91rem;
				height: 4.35rem;
				.p2-m{
					width: 1.71rem;
					height: 4.35rem;
					background: url(../images/year/p2-man.png) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: 0;
					bottom: 0;
					z-index: 2;
				}
				.p2-yin{
					width: 1.91rem;
					height: 0.35rem;
					background: url(../images/year/p2-y.png) center bottom no-repeat;
					background-size: 100%;
					bottom: 0;
					position: absolute;
					left: -0.4rem;
				}
			}
		}
		.page3{
			background: url(../images/year/p3Bj.jpg) center bottom no-repeat;
			background-size: cover;
			.p3-ty{
				.son;
				top: 0.8rem;
				right:3.6rem;
			}
			.p3-y1{
				.y1;
				top: 3.75rem;
				right: 0.3rem;
			}
			.p3-y2{
				.y2;
				right: 5.3rem;
				top: 1.7rem;
			}
			.p3-y3{
				.y3;
				right: 1.47rem;
				top:1.17rem;
			}
			.p3-text{
				.text;
				top: 2.91rem;
				left: 0.6rem;
			}
			.p3-man{
				width: 1.56rem;
				height: 4.75rem;
				position: absolute;
				right: 3.8rem;
				bottom: 1.4rem;
				.p3-m{
					width: 1.56rem;
					height: 4.72rem;
					background: url(../images/year/p3-man.png) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: 0;
					bottom: 0;
					z-index: 2;
				}
				.p3-yin{
					width: 1.91rem;
					height: 0.35rem;
					background: url(../images/year/p2-y.png) center bottom no-repeat;
					background-size: 100%;
					bottom: 0;
					position: absolute;
					left: -0.4rem;
				}
			}
			.p3-tm{
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				overflow: hidden;
				label{
					display: inline-block;
					height: 0.52rem;
					line-height: 0.52rem;
					color: #fff;
					font-size: 0.2rem;
					padding-left: 0.64rem;
					position: absolute;
					padding-right: 0.2rem;
					border-radius: 0.26rem;
					z-index: 9;
					opacity: 0;
					animation: toLeft linear 6s infinite;
				}
				.tm1{
					background: #566D94 url(../images/year/p3-t1.png) 5px center no-repeat;
					background-size: 0.46rem;
					right: -100px;
					top: 4.69rem;
					animation-delay: 4.5s;
				}
				.tm2{
					background: #566D94 url(../images/year/p3-t2.png) 5px center no-repeat;
					background-size: 0.46rem;
					right: 0;
					top: 6.43rem;
					animation-delay: 4s;
				}
				.tm3{
					background: #566D94 url(../images/year/p3-t3.png) 5px center no-repeat;
					background-size: 0.4rem;
					right: 0;
					top: 7.64rem;
					animation-delay: 3.4s;
				}
				.tm4{
					background: #566D94 url(../images/year/p3-t4.png) 5px center no-repeat;
					background-size: 0.46rem;
					right: 0;
					top: 5.35rem;
					animation-delay: 2.8s;
				}
				.tm5{
					background: #566D94 url(../images/year/p3-t5.png) 5px center no-repeat;
					background-size: 0.46rem;
					right: 0;
					top: 8.4rem;
					animation-delay:2s;
				}
				.tm6{
					background: #566D94 url(../images/year/p3-t6.png) 5px center no-repeat;
					background-size: 0.46rem;
					right: 0;
					top: 7rem;
					animation-delay: 1s;
				}
				.tm7{
					background: #566D94 url(../images/year/p3-t7.png) 5px center no-repeat;
					background-size: 0.46rem;
					right: 0;
					top: 5.99rem;
				}
			}
		}	
		.page4{
			background: url(../images/year/p4Bj.jpg) center bottom no-repeat;
			background-size: cover;
			.content{
				background: url(../images/year/p4-yu.gif) center bottom no-repeat;
				background-size: cover;
			}
			.p4-yz{
				width: 100%;
				height: 100%;
				background: url(../images/year/p4-ye.gif) center bottom no-repeat;
				background-size: cover;
				position: absolute;
				left: 0;
				top: 0;
			}
			.p4-text{
				.text;
				top: 1.6rem;
				left: 0.6rem;
			}
			.p4-mtl{
				width: 5.25rem;
				height: 6.2rem;
				background: url(../images/year/p4-mtl.gif) left center no-repeat;
				background-size: 5rem;
				position: absolute;
				right: 0;
				bottom: 3.6rem;
			}
			.p4-lb{
				width: 7.5rem;
				height: 1.95rem;
				background: url(../images/year/p4-lb.png) left center no-repeat;
				background-size: 7.5rem;
				position: absolute;
				left: 0;
				bottom: 2.6rem;
			}
		}
		.page5{
			background: url(../images/year/p5Bj.jpg) center bottom no-repeat;
			background-size: cover;
			.p5-ty{
				.son;
				top: 0.4rem;
				right: 2.8rem;
			}
			.p5-y1{
				.y1;
				top: 2rem;
				right: 1rem;
			}
			.p5-y2{
				.y2;
				right: 5.13rem;
				top:4.2rem;
			}
			.p5-y3{
				.y3;
				right: 6.53rem;
				top:0.3rem;
			}
			.p5-text{
				.text;
				top: 2.91rem;
				left: 0.6rem;
			}
			.p5-man{
				position: absolute;
				left: 0.43rem;
				bottom: 1.24rem;
				width: 1.91rem;
				height: 4.35rem;
				.p5-m{
					width: 3.47rem;
					height: 3.82rem;
					background: url(../images/year/p5-man.png) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: 0;
					bottom: 0;
					.p5-hand{
						width: 1.34rem;
						height: 0.97rem;
						background: url(../images/year/p5-hand.png) center bottom no-repeat;
						background-size: 100%;
						position: absolute;
						left: 1.07rem;
						bottom: 1.8rem;
						animation: toUp 0.5s 1s linear infinite alternate;
					}
				}
			}
		}
		.page6{
			background: url(../images/year/p6Bj.jpg) center bottom no-repeat;
			background-size: cover;
			.p6-ty{
				.son;
				top: 0.4rem;
				right: 4rem;
			}
			.p6-y1{
				.y1;
				top: 0.4rem;
				right: 1.2rem;
			}
			.p6-y2{
				.y2;
				right: 2.6rem;
				top: 1.8rem;
			}
			.p6-y3{
				.y3;
				right: 6.53rem;
				top:0.3rem;
			}
			.p6-text{
				.text;
				top: 2.91rem;
				left: 0.6rem;
			}
			.p6-man{
				position: absolute;
				left: 0.43rem;
				bottom: 1.24rem;
				width: 2rem;
				height: 4.8rem;
				.p6-m{
					width: 2rem;
					height: 4.8rem;
					background: url(../images/year/p6-man.gif) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: 0;
					bottom: 0;
				}
			}		
		}
		.page7{
			background: url(../images/year/p7Bj.jpg) center bottom no-repeat;
			background-size: cover;
			.p7-ty{
				.son;
				top: 0.4rem;
				right: 4rem;
			}
			.p7-y1{
				.y1;
				top: 0.4rem;
				right: 1.2rem;
			}
			.p7-y2{
				.y2;
				right: -0.4rem;
				top: 1.8rem;
			}
			.p7-y3{
				.y3;
				right: 6.53rem;
				top:0.3rem;
			}
			.p7-text{
				.text;
				top: 2.91rem;
				left: 0.6rem;
			}
			.p7-man{
				position: absolute;
				left: 1rem;
				bottom: 1.24rem;
				width: 1.56rem;
				height: 3.98rem;
				.p7-m{
					width: 1.56rem;
					height: 3.98rem;
					background: url(../images/year/p7-man.png) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: 0;
					bottom: 0;
				}
				.p7-yin{
					width: 1.91rem;
					height: 0.35rem;
					background: url(../images/year/p2-y.png) center bottom no-repeat;
					background-size: 100%;
					bottom: 0;
					position: absolute;
					left: -0.4rem;
				}
			}	
			.p7-man1{
				position: absolute;
				left: 3rem;
				bottom: 1.24rem;
				width: 1.02rem;
				height: 3.93rem;
				.p7-m{
					width: 1.02rem;
					height: 3.93rem;
					background: url(../images/year/p7-man1.png) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: 0;
					bottom: 0;
				}
				.p7-yin{
					width: 1.91rem;
					height: 0.35rem;
					background: url(../images/year/p2-y.png) center bottom no-repeat;
					background-size: 100%;
					bottom: 0;
					position: absolute;
					left: -0.1rem;
				}
			}	
		}
		.page8{
			background: url(../images/year/p8Bj.jpg) center bottom no-repeat;
			background-size: cover;
			.man{
				left: 2rem;
				bottom: 2rem;
			}
			.p8-ty{
				.son;
				top: 0.4rem;
				right: 5rem;
			}
			.p8-y1{
				.y1;
				top: 0.4rem;
				right: 1.2rem;
			}
			.p8-y2{
				.y2;
				right: -0.4rem;
				top: 1.8rem;
			}
			.p8-y3{
				.y3;
				right: 6.53rem;
				top:0.3rem;
			}
			.p8-text{
				.text;
				top: 2.91rem;
				left: 0.6rem;
			}
			.p8Map{
				position: absolute;
				width: 100%;
				height: 6rem;
				left: 0;
				top: 4rem;
				span{
					animation: bounceInRight 2s ease forwards;
					opacity: 0;
					img.cicle{
						width: 1rem;
						position: absolute;
						top: 0.2rem;
						left: 1.2rem;
						animation: sBig 1s 1s linear infinite;
					}
					img.qyD{animation: pulse 2s ease infinite;}
				}
				span.gm{
					position: absolute;
					left: 1.22rem;
					top: 2.31rem;
					width: 1.17rem;
					animation-delay: 0.7s;
				}
				
				span.ns{
					position: absolute;
					left: 1.2rem;
					top: 3.85rem;
					width: 1.27rem;
					animation-delay: 0.9s;
				}
				span.lh{
					position: absolute;
					left: 2rem;
					top: 2.9rem;
					width: 1.14rem;
					animation-delay: 1.1s;
				}
				span.ft{
					position: absolute;
					left: 2.18rem;
					top: 4.04rem;
					width: 0.89rem;
					animation-delay: 1.3s;
				}
				span.lg{
					position: absolute;
					left: 2.62rem;
					top: 2.56rem;
					width: 2.32rem;
					animation-delay: 1.5s;
				}
				span.lhu{
					position: absolute;
					left: 2.75rem;
				    top: 3.82rem;
					width: 1.18rem;
					animation-delay: 1.7s;
				}
				span.ps{
					position: absolute;
					left: 4.22rem;
				    top:2.8rem;
					width: 1.36rem;
					animation-delay: 1.9s;
				}
				span.yt{
					position: absolute;
					left: 3.76rem;
				    top: 3.6rem;
					width: 1.16rem;
					animation-delay:2.1s;
				}
				span.dp{
					position: absolute;
				    left: 4.74rem;
				    top: 3.7rem;
						width: 2.2rem;
						animation-delay: 2.1s;
				}
			}
		}
		.page9{
			background: url(../images/year/p9Bj.jpg) center bottom no-repeat;
			background-size: cover;
			.p9-ty{
				.son;
				top: 0.4rem;
				right: 4rem;
			}
			.p9-y1{
				.y1;
				top: 0.4rem;
				right: 1.2rem;
			}
			.p9-y2{
				.y2;
				right: -0.4rem;
				top: 1.8rem;
			}
			.p9-y3{
				.y3;
				right: 6.53rem;
				top:0.3rem;
			}
			.p9-text{
				.text;
				top: 2.91rem;
				left: 0.6rem;
			}
		}
		.page10{
			background: url(../images/year/p10Bj.jpg) center bottom no-repeat;
			background-size: cover;
			.p10-ty{
				.son;
				top: 0.2rem;
				right: 1rem;
				background: url(../images/year/p-yl.png) center bottom no-repeat;
				background-size: 0.83rem;
			}
			.p10-y1{
				.y1;
				top: 1.29rem;
				right: 0.69rem;
			}
			.p10-y2{
				.y2;
				right: 4.6rem;
				top: 1.8rem;
			}
			.p10-y3{
				.y3;
				right: 3.53rem;
				top:0.3rem;
			}
			.p10-text{
				.text;
				top: 2.91rem;
				left: 0.6rem;
				color: #fff;
			}
			.p10-man{
				position: absolute;
				left: 2.2rem;
				bottom: 0.4rem;
				width: 1.21rem;
				height: 4rem;
				.p10-m{
					width: 1.21rem;
					height: 3.65rem;
					background: url(../images/year/p10-man.png) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: 0;
					bottom: 0;
				}
				.p10-yin{
					width: 1.91rem;
					height: 0.35rem;
					background: url(../images/year/p10-yin.png) center bottom no-repeat;
					background-size: 100%;
					bottom: 0;
					position: absolute;
					left: -0.8rem;
				}
			}		
		}
		.page11{
			background: url(../images/year/p11Bj.jpg) center bottom no-repeat;
			background-size: cover;
			.p11-ty{
				.son;
				top: 0.2rem;
				right: 5.4rem;
			}
			.p11-y1{
				.y1;
				top: 1.29rem;
				right: 0.69rem;
			}
			.p11-y2{
				.y2;
				right: 4.6rem;
				top: 1.8rem;
			}
			.p11-y3{
				.y3;
				right: 3.53rem;
				top:0.3rem;
			}
			.p11-text{
				.text;
				top: 2.91rem;
				left: 0.6rem;
			}
			.man{
				bottom: 2.6rem;
			}
			.p11-btn{
				width: 100%;
				height: 0.84rem;
				background: url(../images/year/p11-btn.png) center bottom no-repeat;
				background-size: 3.33rem;
				position: absolute;
				bottom: 0.8rem;
				left: 0;
				label{
					display: block;
					width: 0.76rem;
					height: 0.59rem;
					background: url(../images/year/p11-point.png) center bottom no-repeat;
					background-size: 0.76rem;
					position: absolute;
					bottom: 0.6rem;
					left: 5rem;
					animation: bounceIn 2s 0.5s linear infinite alternate;
				}
			}
		}
		.page12{
			background: url(../images/year/p12Bj.jpg) center bottom no-repeat;
			background-size: cover;
			.p12-title{
				font-size: 0.48rem;
				color: #333;
				text-align: center;
				width: 100%;
				position: absolute;
				left: 0;
				top: 10%;
			}
			.p12-y1{
				.y1;
				top: 1.9rem;
				right: 0.2rem;
			}
			.p12-y2{
				.y2;
				right: 5.6rem;
				top: 1.8rem;
			}
			.p12-y3{
				.y3;
				right: 6.53rem;
				top:0.3rem;
			}
			.p12-flag{
				width: 100%;
				height: 5rem;
				position: absolute;
				left: 0;
				top: 4rem;
				label{
					display: inline-block;
					position: absolute;
					background-color: #A6DFFF;
					padding: 0 1px 0.1rem;
					border-radius: 0.5rem;
					height: 0.8rem;
					position: absolute;
					right: 0;
					animation: toLeft linear 5s infinite forwards;
					border: 1px solid #333;
					span{
						display: inline-block;
						text-align: center;
						padding: 0 0.3rem;
						border-radius: 0.5rem;
						background-color: #fff;
						color: #333;
						height: 100%;
						line-height: 0.64rem;
						border: 1px solid #333;
					}
				}
				.on{
					span{
						background-color: #E32323;
						color: #fff;
					}
				}
				.flg1{
					top:0;
				}
				.flg2{
					top:1rem;
					animation-delay:2.6s;
				}
				.flg3{
					top:1.4rem;
					animation-delay: 2s;
				}
				.flg4{
					top:2rem;
					animation-delay: 3s;
				}
				.flg5{
					top:3rem;
					animation-delay: 2.6s;
				}
				.flg6{
					top:0;
					animation-delay: 1.4s;
				}
				.flg7{
					top:2.6rem;
					animation-delay: 0.8s;
				}
			}
			.p12-man{
				position: absolute;
				width: 1.99rem;
				height: 3.54rem;
				bottom: 1.6rem;
				left: 0.6rem;
				background: url(../images/year/p12-man.png) center no-repeat;
				background-size: 1.99rem;
			}
			.p12-btn{
				width: 100%;
				height: 0.84rem;
				position: absolute;
				bottom: 0.8rem;
				left: 0;
				text-align: center;
				font-size: 0.36rem;
				color: #333;
				line-height: 0.84rem;
			}
			.p12-point{
				width: 0.53rem;
				height: 0.81rem;
				background: url(../images/year/p12-point.png) center no-repeat;
				background-size: 0.53rem;
				position: absolute;
				left: 3.5rem;
				bottom: 2rem;
				animation: fadeInUp linear 2s infinite;
			}
		}
		.page13{
			.p13Bj{
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				overflow-y: auto;
				img{
					display: block;
				}
			}
			.p13-btn{
				width: 100%;
				height: 1.2rem;
				position: absolute;
				bottom: 0.2rem;
				left: 0;
				text-align: center;
				.btn1{
					display: inline-block;
					width: 2.77rem;
					height: 0.84rem;
					background: url(../images/year/p13-btn2.png) center no-repeat;
					background-size: 2.77rem;
					margin: 0 0.8rem 0 0;
				}
				.btn2{
					display: inline-block;
					width: 2.77rem;
					height: 0.84rem;
					background: url(../images/year/p13-btn1.png) center no-repeat;
					background-size: 2.77rem;
				}
			}
			.p13-zy{
				width: 100%;
				height: 100vh;
				position: absolute;
				left: 0;
				top: 0;
				z-index: 97;
				.p13-yy{
					width: 100%;
					height: 100%;
					background: #000;
					opacity: 0.5;
					position: absolute;
					top: 0;
					left: 0;
					z-index: 98;
				}
				.p13-point{
					width: 3.38rem;
					height: 1.67rem;
					position: absolute;
					top: 0.2rem;
					right: 0.2rem;
					background: url(../images/year/p13-zy.png) center no-repeat;
					background-size: 3.38rem;
					z-index: 99;
					animation: flash ease-in 1s forwards;
				}
				.p13-img{
					width: 6rem;
					height: 8rem;
					padding: 0.2rem;
					background-color: #fff;
					position: absolute;
					border-radius: 0.1rem;
					top: 50%;
					left: 50%;
					margin: -4rem 0 0 -3rem;
					z-index: 99;
					animation: fadeInBig ease-in-out 0.5s;
					.pBox{
						height: 100%;
						width: 100%;
						overflow-y: auto;
					}
					label{
						display: block;
						width: 0.8rem;
						height: 0.8rem;
						background: url(../images/year/iclose.png) center no-repeat;
						background-size: 0.8rem;
						position: absolute;
						right: -0.2rem;
						top: -0.2rem;
					}
				}
			}
		}
		
		#music {
			transform-origin: center;
			display: block;
			width: 0.7rem;
			height: 0.7rem;
			background: url(../images/year/icon-music.png) center no-repeat;
			background-size: 100%;
			position: absolute;
			right: 0.4rem;
			top: 0.4rem;
			z-index: 9;
		}

		.animatedR {
			animation: rotate 3s infinite linear;
		}
	}
	
	
	.p8Map .ba{
		position: absolute;
		left: 0.41rem;
		top: 2.2rem;
		width: 1.74rem;
		animation-delay: 0.5s;
	}
	.ba img.cicle{
		top: 1.5rem;
		left: 0.3rem;
	}
	.gm img.cicle{
		top: 0.4rem;
		left: 0.1rem;
	}
	.lh img.cicle{
		top: 0.3rem;
		left: 0.05rem;
	}
	.lhu img.cicle{
		top: 0.4rem;
		left: 0.05rem;
	}
	.ft img.cicle{
		top: 0.4rem;
		left: 0rem;
	}
	.ns img.cicle{
		top: 0.8rem;
		left: 0rem;
	}
	.lg img.cicle{
		top: 0.9rem;
		left: 0.8rem;
	}
	.yt img.cicle{
	    top: 0.36rem;
	    left: 0.1rem;
	}
	.dp img.cicle{
	    top: 0.3rem;
	    left: 0.7rem;
	}
	.ps img.cicle{
		top: 0.16rem;
	    left: 0.26rem;
	}
	
	// 统一动画
	// 元素入场
	.p1-text,.p2-text,.p1-text,.p3-text,.p4-text,.p5-text,.p6-text,.p7-text,.p8-text,.p9-text,.p10-text,.p11-text,.p12-text{
		display: none;
	}
	.p8Map{
		display: none;
	}
	// 为了入场动画
		.nut-swiper-slide-selected{
			// .content{
			// 	display: block;
			// }
			// 元素入场
			.p1-text,.p2-text,.p1-text,.p3-text,.p4-text,.p5-text,.p6-text,.p7-text,.p8-text,.p9-text,.p10-text,.p11-text,.p12-text{
				display: block;
			}
			.p8Map{
				display: block;
			}
		}
	/deep/ .nut-swiper{
		height: 100%;
	}
	@keyframes sBig{
		from{transform: scale(1);}
		to{transform: scale(1.5);}
	}
	@keyframes toLeft {
		0% {
			opacity: 1;
			transform: translateX(0);
		}

		100% {
			opacity: 1;
			transform: translateX(-460px);
		}
	}
	@keyframes toUp {
		0% {
			transform: translateY(5px);
		}
	
		100% {
			transform: translateY(0);
		}
	}

	@keyframes rotate {
		0% {
			-webkit-transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes goX {
		0% {
			transform: translateX(0);
		}
		95%{
			opacity: 0;
		}
		100% {
			transform: translateX(500px)
		}
	}
	@keyframes fadeInBig{
		0% {
			transform:translateY(400px) scale(0);
		}
		
		100% {
			transform:translateY(0px) scale(1);
		}
	}
	
</style>
