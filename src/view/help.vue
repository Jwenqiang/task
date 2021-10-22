<template>
	<div class="activity">
		<p>帮好友助力</p>
		<p><button @click="share" style="width: 100px;height: 40px;background-color: #F06431;">点击分享</button></buttom>
		</p>
		<p>分享回调接收到的值：{{test}}</p>
		<p>APP获取的信息</p>
		<p>电话：{{phone}}</p>
		<p>uid号码：{{uid}}</p>
		<div>{{msg}}</div>
		<div class="swiper-container sHx">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div class="title">
						<div class="ihot-msg">
							<p>G户型 建面41㎡</p>
						</div>
						<img src="https://sz.centanet.com/partner/house/shareImg/share715.png" preview="1"
							preview-text="G户型" />
					</div>
					<div class="hxTag">
						<label>户型方正 </label>
						<label>动静分离</label>
						<label>分区合理 </label>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="title">
						<div class="ihot-msg">
							<p>E户型 建面39㎡</p>
						</div>
						<img src="https://sz.centanet.com/partner/house/shareImg/share715.png" preview="1"
							preview-text="E户型" />
					</div>
					<div class="hxTag">
						<label>通风采光</label>
						<label>景观阳台</label>
						<label>居住舒适</label>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="title">
						<div class="ihot-msg">
							<p>F户型 建面56㎡</p>
						</div>
						<img src="https://sz.centanet.com/partner/house/shareImg/share715.png" preview="1"
							preview-text="F户型" />
					</div>
					<div class="hxTag">
						<label>舒适空间</label>
						<label>开阔视野</label>
						<label>分区合理</label>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="title">
						<div class="ihot-msg">
							<p>D户型 建面128㎡</p>
						</div>
						<img src="https://sz.centanet.com/partner/house/shareImg/share715.png" preview="1"
							preview-text="D户型" />
					</div>
					<div class="hxTag">
						<label>户型方正</label>
						<label>布局合理</label>
						<label>动静分区</label>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="title">
						<div class="ihot-msg">
							<p>D户型 建面128㎡</p>
						</div>
						<img src="https://sz.centanet.com/partner/house/shareImg/share715.png" preview="1"
							preview-text="D户型" />
					</div>
					<div class="hxTag">
						<label>户型方正</label>
						<label>布局合理</label>
						<label>动静分区</label>
					</div>
				</div>
			</div>
		</div>
		<div class="house">
			<div class="houseTab">
				<div :class="hType==1?'on':''">二手房</div>
				<div :class="hType==2?'on':''">新房</div>
			</div>
			<div class="schoolAll">
				<div class="jjrSection newHouse">
					<template v-if="soonHouse.length>0">
						<div class="clear jjrL" v-for="(item,index) in soonHouse">
							<div class="jrl">
								<a :href="'https://sz.centanet.com/ershoufang/'+item.AdsNo+'.html'">
									<img :src="item.FullImgPath" width="100%" />
								</a>
								<p class="hSale">{{item.ReductionTag}}</p>
							</div>
							<div class="jrr">
								<a :href="'https://sz.centanet.com/ershoufang/'+item.AdsNo+'.html'">
									<h4 class="jrt">{{item.Title}}</h4>
									<p>{{item.RoomAndHall}}丨{{item.GArea}}平丨{{item.Area}}丨{{item.EstateName}}</p>
									<p class='refer'>参考总价：<strong>{{item.GuidingSalePrice/10000 | fix}}</strong></p>
								</a>
								<p class="hBtn"><a class="btnZx">打电话</a><a class="btnZx">在线聊</a></p>
							</div>
						</div>
												<!-- <p style="text-align: center;font-size: 0.24rem;color: #ccc;line-height: 1rem;" @click="pSize+=10" v-if="count>pSize">———— 点击查看更多 ————</p> -->
							<p class="noList"><span></span>&nbsp;查看更多&nbsp;<span></span></p>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	const shareObject = {
		shareTitle: '中原找房送惊喜，下载App赢万元大奖',
		shareDesc: '有机会赢iPhone12，祝好运！',
		shareImage: 'https://sz.centanet.com/partner/house/shareImg/app0422.jpg'
	};
	import Swiper from 'swiper';
	// App分享
	import {
		openShare
	} from "../global/share.js"
	export default {
		name: 'help',
		data() {
			return {
				msg: "",
				phone: "",
				uid: "",
				inApp: false,
				soonHouse: "",
				hType:1,
				test:"暂无"
			}
		},
		filters:{
			fix(p){
				let price=Number(p).toFixed(0);
				if(price>0){
					return price+'万';
				}else{
					return '暂无';
				}
				
			},
		},
		mounted() {
			if (navigator.userAgent.indexOf('salehouse-webview') > -1) {
				this.inApp = true;
				this.jumpHelp();
			}
			window.observeUserInfo = this.observeUserInfo;
			window.shareWechatType = this.shareWechatType;
			this.initSwiper();
			this.getHouse();
		},
		methods: {
			goInfo(adsNo){
					adsNo=adsNo.trim();
					if(this.inApp){
						this.pushToNativePage('31',adsNo);
					}else{
						if(this.getUrlParam("sem")){
							window.location.href="https://sz.centanet.com/zufang/"+adsNo+".html?sem="+this.getUrlParam("sem")+"&hmpl="+this.getUrlParam("hmpl");
						}else{
							window.location.href="https://sz.centanet.com/zufang/"+adsNo+".html"
						}
					}
			},
			// 跳转App详情页
			pushToNativePage(typ, id){
			  const pushData = JSON.stringify({ type: typ, target: id })
			  return new Promise((resolve, reject) => {
			    if (isiOS) {
			      if (typeof (window.webkit.messageHandlers.pushToNativePage.postMessage) === 'function') {
			        window.webkit.messageHandlers.pushToNativePage.postMessage(pushData)
			        resolve()
			      } else {
			        reject(new Error('Cannot open native page in iOS.'))
			      }
			    } else if (typeof window.salehouse.pushToNativePage === 'function') {
			      window.salehouse.pushToNativePage(pushData)
			      resolve()
			    } else {
			      reject(new Error('Unknow device'))
			    }
			  })
			},
			getHouse() {
				this.$axios({
						method: "post",
						url: "https://sz.centanet.com/partner/huihansubmit/api/ZhuanTiGuideReduction/GetHouseList",
						data: {
							EndPrice: 0,
							PageIndex: 1,
							PageSize: 10,
							ReductionType: 2,
							RoomCount: [],
							StartPrice: 0,
							adsType: "售",
							area: "",
							region: ""
						}
					})
					.then(res => {
						if (res.data.isSuccess) {
							this.soonHouse = res.data.list;
						}
					})
			},
			//初始化swiper插件
			initSwiper() {
				var mySwiper = new Swiper(".sHx", {
					autoplay: true,
					direction: 'horizontal',
					loop: true, //循环
					loopFillGroupWithBlank: true,
					//一屏1.8个
					slidesPerView: 3,
					// 一次滑三个
					slidesPerGroup: 3,
					//每个的距离
					spaceBetween: 8,
					freeMode: true,
					freeModeFluid: true,
					//是否有拖动惯性
					freeModeMomentum: true,
					observer: true, //修改swiper自己或子元素时，自动初始化swiper
					observeParents: true, //修改swiper的父元素时，自动初始化swiper
					pagination: {
						el: '.swp1',
					},
				})


			},
			// 调起微信分享
			share() {
				openShare({
					shareInfo: shareObject
				})
			},
			// 获取分享按钮点击回调
			shareWechatType(type){//wxFriends微信好友  wxMoments微信朋友圈  staff经纪人
				this.test=type;
			},
			// 获取用户登录信息 回调
			observeUserInfo(userInfoStr) {
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
				var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

				var storage = window.localStorage;

				storage.removeItem('appUserInfo');
				userInfoStr = JSON.stringify(userInfoStr);
				// alert("接收的信息："+userInfoStr)
				this.msg = userInfoStr;
				if (userInfoStr) {
					//已登录则正常操作
					var a = JSON.parse(userInfoStr);
					if (isIOS) {
						this.phone = JSON.parse(a).data.Phone;
						this.uid = JSON.parse(a).data.UserId;
					} else {
						this.phone = a.data.Phone;
						this.uid = a.data.UserId;
					}
					storage.setItem('appUserInfo', userInfoStr);
				} else {
					this.msg = '没有值';
				}
			},
			jumpHelp() {
				var andrio = "",
					ios = "",
					suc = "",
					deviceId = "NA",
					userInfo = "NA";
				if (this.inApp) { //在APP
					if (isIOS) {
						if (window.webkit != undefined && window.webkit.messageHandlers.getPlatform != undefined) {
							ios = "这是IOS手机";
							window.webkit.messageHandlers.getPlatform.postMessage(null);; //方法1 ios
							window.webkit.messageHandlers.getDeviceId.postMessage(null); //方法2 XvmusjzRn8UDABVowT1F67/d
							window.webkit.messageHandlers.getUserInfo.postMessage(null); //方法3 只请求  不获取数据
						}
					} else {
						console.log("这是安卓手机");
						if (window.salehouse != undefined && window.salehouse.getPlatform != undefined) {
							andrio = "这是安卓手机";
							suc = window.salehouse.getPlatform(); //方法1 android
							deviceId = window.salehouse.getDeviceId(); //方法2 XvmusjzRn8UDABVowT1F67/d
							userInfo = window.salehouse.getUserInfo(); //方法3 只请求  不获取数据
						}
					}
				}
			},
		}
	}
</script>
<style>
	@import "../../node_modules/swiper/css/swiper.min.css";

	.schoolAll {
		padding-bottom: 1.6rem;
		padding: 0.4rem 0 0.6rem;
	}

	.noList {
		color: #f5f5f5;
		font-size: 0.26rem;
		text-align: center;
		margin-top: 0.8rem;
	}

	.noList span {
		display: inline-block;
		margin: 0 0.1rem;
		height: 1px;
		width: 1.6rem;
		background-color: #f5f5f5;
		position: relative;
		top: -3px;
	}

	.jjrL {
		background-color: #fff;
		margin-bottom: 0.3rem;
		border-radius: 0.1rem;
		position: relative;
		padding: 0.3rem 0.2rem;
		border-bottom: 1px solid #eee;
	}

	.jjrL:last-child {
		margin-bottom: 0;
	}

	.jrl {
		width: 2.85rem;
		float: left;
		margin-right: 0.2rem;
		min-height: 2.1rem;
		overflow: hidden;
		position: relative;
	}

	.jrl img {
		width: 100%;
	}

	.nStatus {
		padding: 2px 0.1rem;
		color: #fff;
		background-color: #F3240A;
		position: absolute;
		left: 0;
		top: 0;
		font-size: 0.24rem;
	}

	.jrr {
		float: left;
		width: 3.75rem;
	}

	.jrr h4 {
		font-weight: bolder;
		color: #203140;
		font-size: 0.3rem;
		margin-bottom: 0.1rem;

		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		position: relative;
	}

	.jrr p {
		color: #666;
		font-size: 0.24rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.jrr p strong {
		color: #FF2D19;
		font-size: 0.36rem;
	}

	.newHouse button.hbShare {
		margin-top: 0.2rem;
	}

	.jrr p.newTag {
		font-size: 0.2rem;
		margin-top: 0.1rem;
		margin-bottom: 0.2rem;
	}

	.jrr span,
	.jrr label {
		padding: 2px 0.1rem;
		background-color: #ededed;
		color: #999;
		margin-left: 0.06rem;
		border-radius: 0.1rem;
	}

	.jrr span {
		margin-left: 0;
		color: #fff;
		background-color: #FF2D19;
	}

	.newHouse .jrr h4 {
		line-height: 1.4;
	}

	.newHouse .hbhBtn {
		text-align: right;
	}

	.jrr h4 strong {
		display: inline-block;
		width: 2.3rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.jrr h4 i {
		font-style: normal;
		font-weight: 500;
		color: #FF2D19;
		position: absolute;
		right: 0;
		top: 0.04rem;
		font-size: 0.28rem;
	}

	.btnZx {
		width: 1.42rem;
		height: 0.62rem;
		display: inline-block;
		border: 1px solid #FF5C30;
		font-size: 0.28rem;
		color: #FF5C30;
		text-align: center;
		line-height: 0.6rem;
		border-radius: 3px;
		margin-left: 0.2rem;
	}
	.hBtn{
		text-align: right;
		margin-top: 0.2rem;
	}
	.btnZx:last-child{
		background-color: #FF5C30;
		color: #fff;
	}
	.hSale{
		font-size: 0.2rem;
		color: #C5684D;
		background: #FFFAF1 url("~@/assets/img/icon-sale.png") left center no-repeat;
		background-size: 0.2rem;
		padding-left: 0.3rem;
		margin-top: 0.1rem;
	}
	.refer{
		margin-top: 0.1rem;
	}
	.houseTab{
		height:1.11rem;
		background-color: #fff;
		font-size: 0.36rem;
		display: flex;
		border-radius: 2px;
	}
	.houseTab div{
		flex: 1;
		text-align: center;
		line-height: 1.11rem;
	}
	.houseTab div.on{
		color: #FF5C30;
	}
</style>
<style lang="less" scoped>
	// @import "~@/assets/css/szzx.css";
	.activity{
		background: #59C4F6;
		.house{
			padding: 0 0.15rem;
		}
	}
	.swiper-container {
		--swiper-theme-color: #fff;
		/* 设置Swiper风格 */
		--swiper-navigation-color: #ACACAE;
		/* 单独设置按钮颜色 */
		--swiper-navigation-size: 0.4rem;
		/* 设置按钮大小 */
	}

	.swiperBtn:focus {
		outline: #fff auto 0 !important;
	}

	.swiperBtn:active,
	.swiperBtn:hover {
		background: none !important;
		border: 0 !important;
	}

	.swiper-slide {
		width: 4rem;
		margin: 0 auto;
		padding: 2px;
	}

	.title {
		position: relative;
		border: 1px solid #eee;
		text-align: center;
		border-radius: 2px;
		margin-bottom: 0.16rem;
	}

	.title img {
		width: 100%;
	}

	.title img {
		display: block;
		border-radius: 0.04rem;
		z-index: 3;
		width: 100%;
		height: 3rem;
		object-fit: cover;
	}
</style>
