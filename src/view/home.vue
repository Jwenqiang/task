<template>
	<div>
		<div :class="$style.box">
			<div :class="$style.top">
				<p>选房摇号排名查询</p>
				<h2>{{house.estateName}}</h2>
				<div :class="$style.seletContent">
				  <nut-textinput  class="my-input" type="search" v-model="num"  placeholder="请输入摇号编码" ref="myInput" maxLength="8" @keyup.enter="submit" />
				  <div :class="$style.searchBtn" @click="submit"><nut-icon type="search"></nut-icon>确定</div>
				</div>
			</div>
			<div :class="$style.content">
				<div :class="$style.card">
					<div :class="$style.cardTop" v-if="info">
						登记号<span>{{topNum}}</span>查询结果
					</div>
					<div :class="$style.mainBox">
						<template v-if="info.turns">
							<p :class="$style.p1">第<span>{{info.turns}}</span>轮</p>
							<p :class="$style.p2">第<span>{{info.orders}}</span>位</p>
						</template>
						<p :class="$style.p2" v-else-if="ready"><span>暂无搜索结果</span></p>
							<div :class="$style.tip">
								特别提醒：本系统查询结果仅供参考，最终摇号结果以公证处发布结果为准
							</div>
						<div :class="$style.ewm">
							<div><img src="../assets/img/ewm.png"/></div>
							<p>长按识别二维码，关注【深圳中原】</p>
							<p>新盘通知/楼市新政/降价笋盘</p>
							<p>第一时间告知你</p>
						</div>
					</div>
				</div>
				<div :class="$style.bottom">
					<div :class="$style.btn" v-if="$route.query.code">
						<a :href="'https://sz.centanet.com/xinfang/lp-'+$route.query.code+'/?sem='+$route.query.sem+'&hmpl='+$route.query.hmpl" target="_blank">
							查看楼盘最新动态
						</a>
					</div>
					<div :class="$style.footer" v-if="house.empName">
						<div :class="$style.tx"><img :src="tx" onerror="this.src='https://sz.centanet.com/partner/house/userImg/tx_none.png'"/></div>
						<div :class="$style.name">{{house.empName}}</div>
						<div :class="$style.call">
							<a :href="'tel:'+house.callNum" v-if="house.callNum">电话咨询</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	var shareLink = window.location.href;
	var shareObj = { //微信链接分享
		title: "最新选房摇号顺序已出炉",
		desc: '点击立即查询→',
		link: shareLink,
		imgUrl: "https://sz.centanet.com/partner/house/shareImg/yhcx.jpg",
	};	
	export default{
		name: 'home',
		data(){
			return{
				num:"",
				house:"",
				tx:"",
				info:"",
				topNum:"",
				ready:false
			}
		},
		computed:{
		},
		created() {
			this.$toast.loading();
			this.getData();
		},
		mounted() {
			//设置获取焦点
			this.$nextTick(function() {
					this.$refs.myInput.focus()
			})
		},
		beforeDestroy() {
		},
		methods:{
			onFocus() {
				console.log("focus事件触发！");
			},
			onBlur() {
				console.log("blur事件触发！");
			},
			// 微信分享
			setShare(){//
					this.$axios({
						method:"get",
						url:"https://m.sz.centanet.com/partner/weixin/jssdkjsonp?url=" + encodeURIComponent(location.href)
					})
					.then(res=>{
						let data=JSON.parse(res.data.replace('(','').replace(')',''));
						if (data) {
						    wx.config({
						        debug: false,
						        appId: data.AppId,
						        timestamp: data.Timestamp,
						        nonceStr: data.NonceStr,
						        signature: data.Signature,
						        jsApiList: [
									'updateAppMessageShareData',
									'updateTimelineShareData'
						        ]
						    });
						    wx.ready(function () {
						        //分享好友
						        wx.updateAppMessageShareData({ 
						            title: shareObj.title,
						            desc: shareObj.desc,
						            link: shareObj.link,
						            imgUrl: shareObj.imgUrl,
						            success: function () {
						              // 设置成功
						            }
						          });
						        //分享朋友圈
						        wx.updateTimelineShareData({
						           title: shareObj.title,
						           desc: shareObj.desc,
						           link: shareObj.link,
						           imgUrl: shareObj.imgUrl,
						           success: function () {
						             // 设置成功
						           }
						         });
						    });
						    wx.error(function (res) {});
						}
					})
			},
			getData() {
				return new Promise((resolve)=>{
						this.$axios({
							method:"get",
							url:"/api/NewHouseLottery/house",
							params:{
								code:this.$route.query.code,
								sem:this.$route.query.sem||"",
								hmpl:this.$route.query.hmpl||""
							}
						})
						.then(res=>{
							resolve(res);
							console.log(res)
							if(res.data.code==0){
								if(res.data){
									this.house=res.data.data;
									this.tx="https://pic.centanet.com/shenzhen/pic/agent/"+res.data.data.empNo+".jpg"
									var wx= navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
									shareObj.title='【'+res.data.data.estateName+'楼盘】选房摇号顺序已出炉'
									document.title='【'+res.data.data.estateName+'楼盘】选房摇号顺序结果查询'
									if(wx){
										this.setShare();
									}
									console.log(shareObj.title);
								}
							}
							setTimeout(()=>{
								this.$toast.loading().hide();
							},500)
						})
						.catch(error=>{
							this.$toast.loading().hide();
							this.$toast.text("网络错误，请稍后再试");
						})
				})
			},
			submit() {
				if(!this.num){
					this.$toast.text("请输入编号");
					return;
				}
				this.$toast.loading('查询中...');
				//失去焦点
					// this.$refs.myInput.blur()
				return new Promise((resolve)=>{
						this.$axios({
							method:"get",
							url:"/api/NewHouseLottery/Search",
							params:{
								code:this.$route.query.code,
								num:this.num
							}
						})
						.then(res=>{
							resolve(res);
							console.log(res);
							if(res.data.code==0){
								this.topNum=this.num;
								if(res.data.data){
									this.info=res.data.data;
								}else{
									this.$toast.text(res.data.msg);
								}
								this.ready=true;
							}
							setTimeout(()=>{
								this.$toast.loading().hide();
							},500)
						})
						.catch(error=>{
							this.$toast.loading().hide();
							this.$toast.text("网络错误，请稍后再试");
						})
				})
			}
		}
	}
</script>

<style lang="less" module>
	@mainColor:#333;
@font-face {
	font-family: fangzheng;
	src: url('../../public/fonts/fzzdhjt.TTF');
}
.box{
	min-height: 100vh;
	background:#E92835;
	.top{
		height: 4.4rem;
		background: url("../assets/img/top.jpg") center no-repeat;
		background-size: 100%;
		padding: 0.55rem 0.3rem;
		position: relative;
		text-align: center;
		color: #fff;
		p{
			font-size: 0.48rem;
		}
		h2{
			font-size: 0.8rem;
			margin-top: 0.3rem;
			font-family: "fangzheng";
			font-weight: 500;
		}
	}
	.seletContent{
		position: absolute;
		width: 6.9rem;
		left: 0.3rem;
		bottom: 0.5rem;
		:global{
			.nut-textinput{
				width: 5.1rem;
				input{
					height: 0.88rem;
					font-size: 0.32rem;
				}
			}
			.nut-icon{
				color: #fff !important;
				width: 0.36rem;
				margin-right: 0.1rem;
				position: relative;
				top: 0.25rem;
			}
			.nut-textinput .nut-textinput-clear{
				width: 18px;
				height: 18px;
				right: 10px;
			}
		}
		.searchBtn{
			position: absolute;
			right: 2px;
			top: 0;
			display: block;
			width: 1.8rem;
			background: linear-gradient(0deg, #007EFE, #005DBB);
			line-height: 0.88rem;
			font-size: 0.36rem;
			text-align: center;
			color: #fff;
			border-radius: 0 0.08rem 0.08rem 0;
		}
	}
	.content{
		padding: 0 0.3rem;
	}
	.card{
		background-color: #fff;
		box-shadow: 0 0 3px #ccc;
		width: 100%;
		border-radius: 0.12rem;
		position: relative;
		margin-top: 0.6rem;
		padding: 0.1rem;
		.cardTop{
			width: 4.98rem;
			height: 0.99rem;
			background: url("../assets/img/cardTop.png") center no-repeat;
			background-size: 100%;
			position: absolute;
			top: -0.5rem;
			left: 0.95rem;
			line-height: 0.95rem;
			text-align: center;
			font-size: 0.3rem;
			span{
				font-size: 0.4rem;
				color: #FA1D0F;
				margin: 0 2px;
			}
		}
		.mainBox{
			border: 1px solid #F54038;
			height: 100%;
			color: #666;
			text-align: center;
			padding-top: 0.65rem;
			padding: 0.4rem 0 0.4rem;
			.p1{
				font-size: 0.36rem;
				span{
					color: #FA1D0F;
					margin: 0.25rem 0.1rem 0;
					font-size: 0.4rem;
				}
			}
			.p2{
				font-size: 0.36rem;
				margin-top: 0.2rem;
				margin-bottom: 0.4rem;
				span{
					color: #FA1D0F;
					font-size: 0.6rem;
					margin: 0 0.1rem;
				}
			}
			.tip{
				padding: 0 0.42rem 0.35rem;
				line-height: 1.6;
				border-bottom: 1px solid #E6E6E6;
			}
			.ewm{
				text-align: center;
				img{width: 2.08rem;margin: 0.2rem 0;}
				p{
					line-height: 1.6;
				}
			}
		}
		
	}
	
	.bottom{
		height: 4.48rem;
		background: url("../assets/img/bottom.jpg") center no-repeat;		background-size: 100%;
		padding: 1.8rem 0 1.28rem;
		margin-top: -1.4rem;
		.btn{
			a{
				display: block;
				width: 4rem;
				height: 0.88rem;
				line-height: 0.88rem;
				margin: 0 auto;
				background-color: #fff;
				font-size: 0.36rem;
				color: #FA1D0F;
				text-align: center;
				border-radius: 0.44rem;
				font-weight: bold;
			}
		}
		.footer{
			width: 7.5rem;
			height: 1.28rem;
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			padding: 0 0.35rem;
			background-color: #fff;
			line-height: 1.28rem;
			font-size: 0.3rem;
			border-radius: 0.4rem 0.4rem 0 0;
			box-shadow: 0px -3px 6px 0px rgba(45, 45, 45, 0.2);
			.tx{
				width: 0.8rem;
				height: 0.8rem;
				margin: 0.24rem 0.2rem 0.24rem 0;
				border-radius: 50%;
				overflow: hidden;
			}
			img{
				width: 100%;
			}
			.name{width: 4rem;}
			.call{
				flex: 1;
				text-align: right;
				a{
					display: inline-block;
					width: 2rem;
					height: 0.8rem;
					background: linear-gradient(-30deg, #FF0000, #FF6042);
					border-radius: 0.4rem;
					text-align: center;
					line-height: 0.8rem;
					color: #fff;
					margin: 0.24rem 0;
				}
			}
		}
	}
}
</style>
<style lang="less">
	
</style>
