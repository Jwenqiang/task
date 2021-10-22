<template>
	<div :class="$style.box">
		<section :class="show==1?$style.on:''">
			<div :class="$style.title">1.请选择您的家庭情况<i>（单选）</i></div>
			<ul>
				<li v-for="item in list.one" :key="item.id" @click="select('one',item.score,item.val,2)"><span>{{item.val}}</span><label>+{{item.score}}<i>分</i></label></li>
			</ul>
			<div :class="$style.secBtom">
				<p :class="$style.tip">提示：</p>
				<div>
					<p>① 家庭意指意向购房人及配偶；</p>
					<p>② 成年未婚或者离异、丧偶等情况均视为单身。</p>
				</div>
			</div>
		</section>
		<section :class="show==2?$style.on:''">
			<div :class="$style.title">2.请选择您的未成年子女情况<i>（单选）</i></div>
			<ul>
				<li v-for="item in list.two" :key="item.id" @click="select('two',item.score,item.val,3)"><span>{{item.val}}</span><label>+{{item.score}}<i>分</i></label></li>
			</ul>
			<div :class="$style.secBtom">
				<p :class="$style.tip">提示：</p>
				<div>
					<p>① 子女情况包含家庭或单身的子女情况；</p>
					<p>② 如离异有未成年子女，需补充提供法院判决书、离婚协议等子女抚养证明文件。</p>
				</div>
				<nut-button shape="square" type="primary" @click="show=1">返回上一题</nut-button>
			</div>
		</section>
		<section :class="show==3?$style.on:''">
			<div :class="$style.title">3.请选择您在深圳的购房情况<i>（单选）</i></div>
			<ul>
				<li v-for="item in list.three" :key="item.id" @click="select('three',item.score,item.val,4)"><span>{{item.val}}</span><label>+{{item.score}}<i>分</i></label></li>
			</ul>
			<div :class="$style.secBtom">
				<p :class="$style.tip">提示：</p>
				<div>
					<p>① 住房转让记录包括买卖、赠与、互易、继承、遗赠等权利人变更记录；</p>
					<p>② 无房定义为申请家庭及其未成年子女名下查档显示无有效住房；</p>
					<p>③ 夫妻离异，追溯离异之日起3年夫妻双方及未成年子女名下查档显示无有效住房；</p>
					<p>④ 住房包括住宅、别墅、宿舍和公寓（商务公寓除外）。</p>
				</div>
				<nut-button shape="square" type="primary" @click="show=2">返回上一题</nut-button>
			</div>
		</section>
		<section :class="show==4?$style.on:''">
			<div :class="$style.title">4.您的社保缴纳情况</div>
				<div :class="$style.sContent">
					<p><strong>•</strong>社保或个税缴纳月数，计算系数为0.1/月</p>
					<p><strong>•</strong>社保或个税缴纳月数（认购为家庭单位，计算夫妻双方缴纳总月数）输入框（区间为【0-480】）</p>
					<p><input type="number" placeholder="请输入缴纳总月数" :class="$style.myMonth" maxlength="3" v-model="myMonth"/></p>
					<p style="text-align: center;">
						<nut-button shape="square" type="primary" @click="submit()">立即查询</nut-button>
					</p>
				</div>
			<div :class="$style.secBtom">
				<p :class="$style.tip">提示：</p>
				<div>
					<p>① 每人社保累计时间最长不超过20年(家庭需夫妻双方均有购房资格才能累加)；</p>
					<p>② 在深服役过的军人，在深服役时间视同在深社保(或个税)缴纳时间；</p>
					<p>③ 政府机关、事业单位编制人员缴纳的医疗保险视同社保缴纳时间；</p>
					<p>④ 港澳台、外籍人士以在深缴纳中华人民共和国个人所得税记录视同社保缴纳时间；</p>
					<p>⑤ 不同类型缴纳记录，不可互为补充或累加。</p>
				</div>
			</div>
		</section>
		<section :class="show==5?$style.on:''">
			<div :class="$style.bj"></div>
			<div :class="$style.overBox">
				<article>{{allCount}}</article>
				<h4 :class="$style.h4">高级置业专家</h4>
				<div :class="$style.mid">
					<div :class="$style.tx">
						<span><img :src="user.PhotoSrc" /></span>
						<label>{{user.EmpName}}</label>
					</div>
					<div :class="$style.btn">
						<a :href="'tel:'+Mobile">
							打电话
						</a>
						<a @click="setWl(user.EmpNo)" v-if="inApp">微聊</a>
					</div>
				</div>
				<div :class="$style.ewm">
					<div>
						<h4>更多楼市一手消息</h4>
						<p>扫码关注公众号</p>
					</div>
					<div :class="$style.img">
						<img :src="`${$_publicPath}img/ewm.jpg`" />
					</div>
				</div>
			</div>
			<button :class="$style.overBtn" @click="back">重新测评</button>

		</section>
	</div>
</template>

<script>
	var shareLink = window.location.href;
	var shareObj = { //微信链接分享
		title: "打新必看！深圳最新积分规则",
		desc: '一键测试',
		link: shareLink,
		imgUrl: "https://sz.centanet.com/partner/house/shareImg/share-score.png",
	};	
	// import { createApp } from 'vue';
	// // vue
	// import { Input } from '@nutui/nutui';
	// const app = createApp();
	// app.use(Input);
	var URL="https://sz.centanet.com/partner/actapi/"
	var URL1 = 'https://sz.centanet.com/partner/jifen/';
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	export default{
		name: 'home',
		data(){
			return{
				num:"",
				house:"",
				tx:"",
				info:"",
				topNum:"",
				ready:false,
				show:1,
				list:{
					one:[
						{id:1,val:"夫妻双方均为深户",score:10},
						{id:2,val:"夫妻双方仅一方为深户",score:5},
						{id:3,val:"深户单身",score:5},
						{id:4,val:"非深户家庭/单身",score:2}
					],
					two:[
						{id:1,val:"有",score:5},
						{id:2,val:"无",score:0},
					],
					three:[
						{id:1,val:"现名下无房，且10年内(含10年)在深无住房转让记录",score:40},
						{id:2,val:"现名下无房，且5-10年内(含5年)在深有住房转让记录",score:30},
						{id:3,val:"现名下无房，且2-5年内(含2年)在深有住房转让记录",score:20},
						{id:4,val:"现名下无房，2内在深有住房转让记录",score:10},
						{id:5,val:"在深拥有一套及以上住房",score:0},
					],
				},
				scoreList:[],
				myMonth:"",
				allCount:"",
				user:"",
				inApp:false,
				Mobile:""
			}
		},
		computed:{
		},
		watch:{

		},
		created() {
			// this.$toast.loading();
			if(navigator.userAgent.indexOf('salehouse-webview') > -1){
				this.inApp=true
			}
			var wx = navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;//获取判断用的对象
			if (wx) {
				//在微信中打开
				this.setShare();
			}
			this.getData();
		},
		mounted() {
		},
		beforeDestroy() {
		},
		methods:{
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
			select(name,score,content,nextNum){
				let obj={};
				switch(name){
					case 'one':
						obj.Question="1.请选择您的家庭情况";
						obj.ItemContent=content;
						obj.ItemScore=score;
						this.scoreList[0]=obj;
						break;
					case 'two':
						obj.Question="2.请选择您的未成年子女情况";
						obj.ItemContent=content;
						obj.ItemScore=score;
						this.scoreList[1]=obj;
						break;	
					case 'three':
						obj.Question="3.请选择您在深圳的购房情况";
						obj.ItemContent=content;
						obj.ItemScore=score;
						this.scoreList[2]=obj;
						break;
				}
				this.show=nextNum;
			},
			getData() {
				return new Promise((resolve)=>{
						this.$axios({
							method:"get",
							url:`${URL}api/NewHouseSelect/GetEmpAsync`
						})
						.then(res=>{
							resolve(res);
							console.log(res)
							if(res.data.IsSuccess){
								this.user=res.data.Src[0];
								this.getCall(res.data.Src[0].EmpNo)
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
			getCall(gh) {
				return new Promise((resolve)=>{
						this.$axios({
							method:"get",
							url:`${URL1}topic/getempcall`,
							params:{
								empNo:gh,
								msg:"积分测算",
								code:"",
								type:1,
								sem:this.$route.query.sem||'',
								hmpl:this.$route.query.hmpl||''
							}
						})
						.then(res=>{
							resolve(res);
							console.log(res)
								this.Mobile=res.data.data.Mobile;
						})
						.catch(error=>{
							this.$toast.loading().hide();
							this.$toast.text("网络错误，请稍后再试");
						})
				})
			},
			submit() {
				if(!this.myMonth){
					this.$toast.text("请输入社保缴纳总月份");
					return;
				}else if(this.myMonth<0){
					this.$toast.text("请输月份入正整数");
					return;
				}
				this.myMonth=Math.floor(this.myMonth);
				this.allCount=Number(this.scoreList[0].ItemScore) + Number(this.scoreList[1].ItemScore)+Number(this.scoreList[2].ItemScore)+this.myMonth*0.1
				this.scoreList[3]={
					"ItemScore":this.myMonth*0.1,
					"Question":"4.您的社保缴纳情况",
					"ItemContent":`社保缴纳总月份：${this.myMonth}`
				};
				this.$toast.loading('查询中...');
				//失去焦点
					// this.$refs.myInput.blur()
				return new Promise((resolve)=>{
						this.$axios({
							method:"post",
							url:`${URL}api/NewHouseSelect/SubmitLogAsync`,
							data:{
								  "UserId": "",
								  "Mobile": "",
								  "GrossScore": this.allCount,
									"Month":this.myMonth,
								  "SelectDetials": this.scoreList
							}
						})
						.then(res=>{
							resolve(res);
							console.log(res);
							if(res.data.IsSuccess){
								this.show=5;
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
			back(){
				this.scoreList=[];
				this.myMonth="";
				this.allCount="";
				this.show=1;
			},
			setWl(gh){
				var msg = JSON.stringify({
					"staffNo": gh,
					"cityCode": "0755",
					"message": "您好，想了解更多关于深圳积分的规则"
				})
				console.log(msg)
				var point={
					 "isStaff400": false,
					 "eventId": "conversion",
					 "vars": {
					  // 要传的参数
					  "bh_channel":"积分查询",
					  "bh_location":"积分查询_微聊",
					  "bh_page":"积分查询",
					  "cr_type":"微聊"
					 }				 
				}
				point=JSON.stringify(point);
				if (isiOS) {
					window.webkit.messageHandlers.pushAgentChat.postMessage(msg); //IOS
					window.webkit.messageHandlers.addFunctionPoint.postMessage(point);//IOS
				} else {
					window.salehouse.pushAgentChat(msg); //安卓
					window.salehouse.addFunctionPoint(point); //安卓
				}
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
	background:#fff;
	padding: 0 0.3rem;
	width: 7.5rem;
	overflow: hidden;
	section{
		padding: 0.6rem 0 0.4rem;
		display: none;
		opacity: 0;
		min-height: 100vh;
		position: relative;
		transition: all 0.5s ease-in;
		.title{
			font-size: 0.45rem;
			color: #333;
			i{
				font-style: normal;
				font-size: 0.28rem;
			}
		}
		ul{
			margin: 0.4rem 0 0.3rem;
		}
		li{
			width: 6.9rem;
			height: 2rem;
			padding: 0 0.3rem;
			background: url(../../public/img/scoreBj.png) center no-repeat;
			background-size: 6.9rem;
			color: #fff;
			margin-bottom: 0.3rem;
			border-radius: 0.1rem;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			p{
				width: 100%;
				font-size: 0.32rem;
				margin: 0.2rem 0 0.1rem;
				input{
					width: 1.4rem;
					height: 0.6rem;
					border: 1px solid #ddd;
					outline: medium;
					padding-left: 0.2rem;
				}
			}
			span{
				width: 4.5rem;
				font-size: 0.36rem;
			}
			label{
				flex: 1;
				text-align: right;
				font-size: 0.6rem;
				color: #fff;
				i{
					font-size: 0.3rem;
					font-style: normal;
					margin-left: 0.1rem;
				}
			}
		}
		.sContent{
			padding: 0.6rem 0.65rem 0.3rem;
			background: linear-gradient(135deg, #5C81AE 0%, #375579 100%);
			color: #fff;
			margin-top: 0.4rem;
			border-radius: 0.1rem;
			margin-bottom: 0.3rem;
			text-align:justify;
			p{
				margin-bottom: 0.2rem;
				font-size: 0.36rem;
				position: relative;
				strong{
					position: absolute;
					left: -0.3rem;
					top: 0;
				}
			}
			.myMonth{
				width: 5.6rem;
				height: 0.88rem;
				background-color: #fff;
				border: 0;
				outline: medium;
				padding-left: 0.2rem;
				font-size: 0.34rem;
				text-align: center;
				border-radius: 0.1rem;
				margin: 0.4rem 0 0;
			}
		}
		.secBtom{
			.tip{
				padding-left: 0.42rem;
				background: url(../assets/img/tip.png) left center no-repeat;
				background-size: 0.32rem;
				margin-bottom: 0.16rem;
				font-size: 0.3rem;
			}
			div{
				padding: 0 0.2rem;
				p{
					margin-bottom: 0.1rem;
					font-size: 0.28rem;
					color: #666;
					padding-left: 6px;
				}
			}
		}
		:global{
			.nut-button{
				display: block;
				width: 5.6rem;
				height: 1.23rem;
				margin: 0.4rem auto;
				background: url(../../public/img/sBtn.png) center no-repeat;
				background-size: 5.6rem;
				font-size: 0.36rem;
			}
			@keyframes fadeLeft{
				from{transform: scale(0);}
				to{transform: scale(1);opacity: 1;}
			}
		}
		.overBox{
			background: url(../../public/img/seBj.png) center no-repeat;
			background-size: 6.9rem;
			padding: 2.12rem 0.8rem 0.4rem;
			position: relative;
			z-index: 1;
			width: 6.9rem;
			height: 9.41rem;
			article{
				text-align: center;
				font-size: 1.8rem;
				margin-bottom: 0.6rem;
				color: #F42A10;
				min-height: 2.38rem;
			}
			.h4{
				font-size: 0.38rem;
				font-weight: 500;
			}
			.mid{
				margin-top: 0.4rem;
				display: flex;
				min-height: 0.8rem;
				.tx{
					flex: 1;
					display: flex;
					span{
						display: inline-block;
						width: 0.8rem;
						height: 0.8rem;
						overflow: hidden;
						border-radius: 50%;
					}
					label{
						padding-left: 0.1rem;
						display: inline-block;
						line-height: 0.8rem;
						color: #666;
					}
					img{
						width: 100%;
						vertical-align: middle;
					}
				}
				.btn{
					flex: 1;
					display: flex;
					justify-content: flex-end;
					a{
						width: 1.4rem;
						height: 0.72rem;
						display: inline-block;
						text-align: center;
						line-height: 0.72rem;
						background: linear-gradient(135deg, #3CB9F9 0%, #1C83F0 100%);
						margin-left: 0.2rem;
						color: #fff;
						font-size: 0.34rem;
						border-radius: 0.06rem;
						&:nth-of-type(2){
							background: linear-gradient(135deg, #FB6F52 0%, #F3240A 100%);
						}
					}
				}
			}
			.overTip{
				padding: 0.2rem;
				background-color: #A3866C;
				display: flex;
				align-items: center;
				label{
					flex: 2;
					color: #fff;
					font-size: 0.32rem;
				}
				span{
					flex: 1;
					font-size: 0.5rem;
					color: #FF0000;
					font-weight: bold;
					text-align: center;
				}
			}
			.ewm{
				display: flex;
				margin-top: 0.8rem;
				align-items: center;
				div{
					flex: 1.8;
					h4{
						font-size: 0.38rem;
						margin-bottom: 0.12rem;
					}
					p{font-size: 0.28rem;color: #666;}
				}
				.img{
					text-align: right;
					flex: 1;
					img{
						width: 1.4rem;
					}
				}
			}
		}
		
	}
	section.on{
		display: block;
		animation: fadeLeft 0.5s ease 1 forwards;
	}
	.bj{
		position: absolute;
		width: 7.5rem;
		height: 100%;
		left: -0.3rem;
		top: 0;
		background: url(../../public/img/seaBj.png) center top no-repeat;
		background-size: cover;
		z-index: 0;
	}
	.overBtn{
		display: block;
		width: 5.6rem;
		height: 1.23rem;
		margin: 0.6rem auto 0.2rem;
		background: url(../../public/img/sBtn.png) center no-repeat;
		background-size: 5.6rem;
		font-size: 0.36rem;
		position: relative;
		z-index: 1;
		color: #fff;
	}
}
</style>
<style lang="less">
	
</style>
