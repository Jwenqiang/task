<template>
	<div class="container">
		<audio controls="controls" loop="loop" preload="preload" src="images/game/music-game.mp3" ref="music" id="music"
			hidden></audio>
		<audio controls="controls" loop="loop" preload="preload" src="images/game/nj.mp3" ref="music1" id="music1" autoplay="false"
			hidden></audio>
		<audio controls="controls" loop="loop" preload="preload" src="images/leisheng.mp3" ref="music2" id="music2"
			hidden></audio>
			
			
			
		<template v-if="ready">
			<nut-popup v-model="showLogin" :close-on-click-overlay="false">
				<div class="lgBox">
					<div class="lgBtn-dl" @click="goLogin()"></div>
					<div class="lgBtn-dp" @click="goStore()"></div>
				</div>
			</nut-popup>
		</template>
		<div class="load" v-if="!ready">
			<div class="pic">
				<!-- <span></span> -->
				<!-- <b>{{loadNum}}%</b> -->
			</div>
		</div>
		<span id="icon-music" :class="{'animatedR':roleM}" @click="bfPlay()" v-show="!showTip"></span>
		<!-- <p id="logo-text">中原找房 荣誉出品</p> -->
		<full-page :options="options" ref="fullpage" v-show="ready">
			<div class="section">
				<div class="slide page0" @touchstart="start()">
					<div class="content">
						<!-- <div style="padding:0.2rem;">{{ local }}</div> -->
						<label class="p0-t" :class="{'p0-t-1':isHe}"></label>
						<label class="p0-point"></label>
						<div class="title" :class="{'title-1':isHe}"></div>
						<div class="t2" :class="{'t2-1':isHe}"></div>
						<!-- <div class="t3"></div> -->
						<div class="t4" @click="goPage1()"></div>
						<div class="t5"></div>
						<div class="t6" :class="{'t6-1':isHe}"></div>
					</div>
				</div>
				<!--  @touchstart="njEnd()" -->
				<div class="slide page1">
					<div class="content">
						<div class="p1-top">
							<span>网络意识:</span>
							<template v-if="my.IntentionStar>0">
								<label class="p1-s"></label>
								<label class="p1-s" v-if="my.IntentionStar>1"></label>
								<label class="p1-s" v-if="my.IntentionStar>2"></label>
								<label class="p1-s" v-if="my.IntentionStar>3"></label>
								<label class="p1-s" v-if="my.IntentionStar==5"></label>
							</template>
							<!-- 无星级 -->
							<div class="star-none" v-else></div>
						</div>
						<div class="p1-title"><template v-if="!isHe">Hi，</template>{{my.EmpCnName}}</div>
						<div class="mtext p1-text">
							<p>{{my.FirstLoginYear}}年 {{my.FirstLoginMonth}}月{{my.FirstLoginDate}}日</p>
							<p>{{isHe?my.EmpCnName:'你'}}第一次登陆成长系统，</p>
							<p>成为第<span>{{my.LoginSort}}</span>位用户，</p>
							<p>转眼，已经<span>{{my.LoginDays}}</span>天了。</p>
						</div>
						<div class="p1-btom">
							<div class="p1-msg"></div>
							<div class="p1-wl"></div>
							<div class="p1-yb"></div>
							<div class="p1-man">
								<div class="p1-h"></div>
								<div class="p1-b"></div>
							</div>
						</div>	
						<div class="go-r"></div>
					<!-- 						<div class="p1-nj1"></div>
						<div class="p1-nj2"></div> -->
					</div>
				</div>
				<div class="slide page2">
					<div class="content">
						<div class="p2-top">
							<span>元宝资产:</span>
							<template v-if="my.PropertyStar>0">
								<label class="p1-s"></label>
								<label class="p1-s" v-if="my.PropertyStar>1"></label>
								<label class="p1-s" v-if="my.PropertyStar>2"></label>
								<label class="p1-s" v-if="my.PropertyStar>3"></label>
								<label class="p1-s" v-if="my.PropertyStar==5"></label>
							</template>
							<!-- 无星级 -->
							<div class="star-none" v-else></div>
						</div>
						<div class="p2-text">
							<p>{{isHe?my.EmpCnName:'你'}}赚过<span>{{my.EarnYuanBao}}</span>个元宝，</p>
							<p>也花过<span>{{my.ConsumeYuanBao}}</span>个元宝。</p>
						</div>
						<div class="p2-yb0"></div>
						<div class="p2-mid">花元宝赢客户，人间值得！</div>
						<div class="p2-cat">
							<div class="p2-hander"></div>
						</div>
						<div class="p2-yby"></div>
						<div class="p2-yb1"></div>
						<div class="go-r"></div>
					</div>
				</div>
				<div class="slide page3">
					
					<div class="content">
						<div class="go-r"></div>
						<div class="p3-top">
							<span>获客效率:</span>
							<template v-if="my.CompeteStar>0">
								<label class="p1-s"></label>
								<label class="p1-s" v-if="my.CompeteStar>1"></label>
								<label class="p1-s" v-if="my.CompeteStar>2"></label>
								<label class="p1-s" v-if="my.CompeteStar>3"></label>
								<label class="p1-s" v-if="my.CompeteStar==5"></label>
							</template>
							<!-- 无星级 -->
							<div class="star-none" v-else></div>
						</div>
						<div class="p3-text">
							<template v-if="my.Competes>0">
								<p>{{isHe?my.EmpCnName:'你'}}抢了<span>{{ my.Competes }}</span>个商机，</p>
								<p>获得<span>{{my.CompeteGetPhones}}</span>个客户留电，</p>
								<p>{{isHe?my.EmpCnName:'你'}}更钟情于<span>{{my.BusinessType}}客</span>，</p>
								<p><span style="margin-left:0;">{{my.CompeteMonth}}月</span>是{{isHe?'TA':'你'}}商机解锁最高的月份。</p>					
							</template>
							<template v-else>
								<p>{{isHe?my.EmpCnName:'你'}}还没有抢到过商机哦，还要继续努力，</p>
								<p>成功不是等待机会，而是创造机会，</p>
								<p>激发潜力，做个主动出击的战士！</p>
							</template>
						</div>
						<div class="p3-mid">风尘仆仆，收获满满！</div>
						<div class="p3-bottom">
							<div class="p3-woman"></div>
							<div class="p3-hander"></div>
							<div class="p3-man"></div>
						</div>
					</div>
				</div>
				<!--  @click="lsPlay()" @touchmove="lsEnd()" -->
				<div class="slide page4">
					
					<div class="content">
						<div class="p4-top">
							<span>服务:</span>
							<template v-if="my.ServiceStar>0">
								<label class="p1-s"></label>
								<label class="p1-s" v-if="my.ServiceStar>1"></label>
								<label class="p1-s" v-if="my.ServiceStar>2"></label>
								<label class="p1-s" v-if="my.ServiceStar>3"></label>
								<label class="p1-s" v-if="my.ServiceStar==5"></label>
							</template>
							<!-- 无星级 -->
							<div class="star-none" v-else></div>
						</div>
						<div class="p4-text">
							<template v-if="my.EarliestTime">
								<p>曾最早<span>{{my.EarliestTime}}</span>上线答疑客户，</p>
								<p>在<label style="color:#FF4141">{{my.NightServices}}</label>个深夜为客户淘笋盘、匹房源。</p>
							</template>
							<template v-else>
								<p>噢哦！{{isHe?my.EmpCnName:'你'}}还没有相关数据~</p>
								<p>这不仅仅是一份工作，</p>
								<p>更是一种态度~</p>
							</template>
						</div>
						<div class="p4-mid">这么拼的{{isHe?'TA':'自己'}},要永远记得呀！</div>
						<div class="p4-bottom">
							<div class="p4-msg"></div>
							<div class="p4-msg1"></div>
							<div class="p4-man"></div>
							<div class="p4-man1"></div>
						</div>
						<div class="go-r"></div>
					</div>
				</div>
				<!--  @touchstart="lsEnd()" -->
				<div class="slide page5">
					<div class="content">
						<div class="p5-top">
							<span>沟通:</span>
							<template v-if="my.LinkStar>0">
								<label class="p1-s"></label>
								<label class="p1-s" v-if="my.LinkStar>1"></label>
								<label class="p1-s" v-if="my.LinkStar>2"></label>
								<label class="p1-s" v-if="my.LinkStar>3"></label>
								<label class="p1-s" v-if="my.LinkStar==5"></label>
							</template>
							<!-- 无星级 -->
							<div class="star-none" v-else></div>
						</div>
						<div class="p5-text">
							<template v-if="my.LinkCount>0">
								<p>尾号<label style="color:#FF4141">{{my.LastNumber}}</label>的客户，</p>
								<p>{{isHe?my.EmpCnName:'你'}}曾与TA频繁联系了<span>{{my.LinkCount}}</span>次，</p>
								<p>通话长达到<span>{{my.LinkMaxMins}}</span>分钟。</p>
							</template>
							<template v-else>
								<p>噢哦！{{isHe?my.EmpCnName:'你'}}还没有相关数据~</p>
								<p>坚持不懈，拼尽全力，</p>
								<p>只有这样才能占据一席之地！</p>
							</template>
						</div>
						<div class="p5-mid">我想，TA一定是{{isHe?my.EmpCnName:'你'}}最重要的客户吧。</div>
						<div class="p5-bottom">
							<div class="p5-msg"></div>
							<div class="p5-man"></div>
						</div>
						<div class="go-r"></div>
					</div>
				</div>
				<div class="slide page6">
					<div class="content">
						<div class="p6-top">
							<span>营销:</span>
							<template v-if="my.MarketStar>0">
								<label class="p1-s"></label>
								<label class="p1-s" v-if="my.MarketStar>1"></label>
								<label class="p1-s" v-if="my.MarketStar>2"></label>
								<label class="p1-s" v-if="my.MarketStar>3"></label>
								<label class="p1-s" v-if="my.MarketStar==5"></label>
							</template>
							<!-- 无星级 -->
							<div class="star-none" v-else></div>
						</div>
						<div class="p6-text">
							<template v-if="my.ShareCount>0">
								<p>{{isHe?my.EmpCnName:'你'}}从成长系统累计分享了<span>{{my.ShareCount}}</span>次，</p>
								<p style="margin:0.2rem 0">产生了<label style="color:#FF4141">{{my.ViewCount}}</label>次浏览，</p>
								<p>客户从魔镜、笔记、店铺、海报中</p>
								<p>足不出户看尽了<label style="color:#FF4141">{{my.FirstRegion}}</label>与<label style="color:#FF4141">{{my.SecondRegion}}</label>的笋盘。</p>
							</template>
							<template v-else>
								<p>{{isHe?my.EmpCnName:'你'}}在成长系统还没有分享过哦，请加油！</p>
								<p>拥有真诚和耐心，没有什么是解决不了的难题，</p>
								<p>把每一次机会都当做一次成长的机会！</p>
							</template>
						</div>
						<div class="p6-mid">
							<p>为客户挡住了高温酷暑，</p>
							<p>也避开了凛凛寒冬！</p>
							<!-- <p>共为客户节省出<label style="color:#FF4141">{{my.SaveMins}}</label>分钟</p>
							<p>足够他们来一次说走就走的旅行</p> -->
						</div>
						<div class="p6-bottom">
							<div class="p6-man"></div>
							<div class="p6-phone"></div>
							<div class="p6-msg"></div>
						</div>
						<div class="go-r"></div>
					</div>
				</div>
				<div class="slide page7">
					<div class="content">
						<div class="p7-1">{{isHe?my.EmpCnName:'你'}}在成长系统的段位值</div>
						<div class="p7-2">{{my.Level}}</div>
						<div class="p7-3">
							<div class="p7-wl p">
								<label class="tag">网络意识:</label>
								<div class="star-box" v-if="my.IntentionStar>0">
									<label class="p1-s"></label>
									<label class="p1-s" v-if="my.IntentionStar>1"></label>
									<label class="p1-s" v-if="my.IntentionStar>2"></label>
									<label class="p1-s" v-if="my.IntentionStar>3"></label>
									<label class="p1-s" v-if="my.IntentionStar==5"></label>
								</div>
								<!-- 无星级 -->
								<div class="star-none" v-else></div>
							</div>
							<div class="p7-yb p">
								<label class="tag">元宝资产:</label>
								<div class="star-box" v-if="my.PropertyStar>0">
									<label class="p1-s"></label>
									<label class="p1-s" v-if="my.PropertyStar>1"></label>
									<label class="p1-s" v-if="my.PropertyStar>2"></label>
									<label class="p1-s" v-if="my.PropertyStar>3"></label>
									<label class="p1-s" v-if="my.PropertyStar==5"></label>
								</div>
								<!-- 无星级 -->
								<div class="star-none" v-else></div>
							</div>
							<div class="p7-fu p">
								<label class="tag"><span>服</span><span>务:</span></label>
								<div class="star-box" v-if="my.ServiceStar>0">
									<label class="p1-s"></label>
									<label class="p1-s" v-if="my.ServiceStar>1"></label>
									<label class="p1-s" v-if="my.ServiceStar>2"></label>
									<label class="p1-s" v-if="my.ServiceStar>3"></label>
									<label class="p1-s" v-if="my.ServiceStar==5"></label>
								</div>
								<!-- 无星级 -->
								<div class="star-none" v-else></div>
							</div>
							<div class="p7-yx p">
								<label class="tag"><span>营</span><span>销:</span></label>
								<div class="star-box" v-if="my.MarketStar>0">
									<label class="p1-s"></label>
									<label class="p1-s" v-if="my.MarketStar>1"></label>
									<label class="p1-s" v-if="my.MarketStar>2"></label>
									<label class="p1-s" v-if="my.MarketStar>3"></label>
									<label class="p1-s" v-if="my.MarketStar==5"></label>
								</div>
								<!-- 无星级 -->
								<div class="star-none" v-else></div>
							</div>
							<div class="p7-tip">
								<h3>{{isHe?my.EmpCnName:'你'}}的段位击败了中原<span>{{my.DefeatRatio}}</span>的经纪人</h3>
								<p>再拼一拼，{{isHe?my.EmpCnName:'你'}}的未来无限可能</p>
							</div>
						</div>
						<div class="p7-btn" @click="goNext"></div>
						<div class="go-r"></div>
					</div>
				</div>
				<div class="slide page8" v-if="!isHe">
					<div class="content">
						<div class="p8-1"></div>
						<!-- 提交过一次成功后 有祝福词 -->
						<div class="p8-2 p8-2-1" v-if="my.Content">
							<div class="msg">
								{{my.Content}}
							</div>
							<div class="p8-tip">{{ my.SubmitTime }}</div>
						</div>
						<!-- 提交过一次成功后 -->
						<div class="p8-2" v-else-if="!isHe">
							<textarea placeholder="分享你与中原找房的故事或写下给中原找房的祝福..." maxlength="300" v-model="myMsg"></textarea>
							<div class="p8-tip">50-300</div>
						</div>
						<div class="p8-btn" v-if="!my.Content&&!isHe" @click="setLucky"></div>
						<!-- 提交过一次成功后 -->
						<div class="p8-btn1" v-if="my.Content" @click="goNext"></div>
						<div class="p8-point" v-if="!my.Content&&!isHe"></div>
						<div class="p8-point1" v-if="my.Content"></div>
						<div class="p8-btip">
							<p>说明：</p>
							<p>1、每人只可提交1次；限50-300字；提交成功，即可获200元宝奖励；另评选上最佳参与者额外奖励1000元宝；</p>
							<p>2、提交内容需与中原找房相关，审核过程中如发现违规且情节严重者，将扣罚500元宝起，上不封顶！</p>
						</div>
<!-- 祝福提交成功弹窗 -->
						<div class="p8-zy" v-show="showSend">
							<div class="p8-yy" @click="showSend=false"></div>
							<div class="p8-img" @click="sucClick">
								<p>恭喜获得200元宝奖励</p>
									<p>感谢参与！</p>
							</div>
						</div>
					</div>
				</div>
				<div class="slide page9" v-if="!isHe&&!my.Content">
					<div class="content">
						<div class="p9-1"></div>
						<div class="p9-2"></div>
						<div class="p9-btn" @click="goNext"></div>
						<div class="p9-point"></div>
						<div class="p9-man"></div>
						<div class="go-r"></div>
					</div>
				</div>

				<div class="slide page13">
					<div class="content">
						<div class="p13Bj">
							<img src="images/game/hbBj.jpg" width="100%" id="scream" style="display: none;" crossOrigin='anonymous' />
							<img src="images/game/hb-my.png" width="100%" id="hb-my" style="display: none;" crossOrigin='anonymous'/>
							<img src="images/game/hb-he.png" width="100%" id="hb-he" style="display: none;" crossOrigin='anonymous'/>
							<img :src="my.LuckyWordsUrl" width="100%" id="word" style="display: none;" crossOrigin='anonymous' v-if="my.LuckyWordsUrl" />
							<img :src="tx" id="tx" style="display: none;" crossOrigin='anonymous' v-if="tx" />
							<img :src="ewm" id="ewm" style="display: none;" crossOrigin='anonymous' v-if="ewm" />
							<!-- <vue-qr :text="downloadData.url" :margin="0" colorDark="#000" colorLight="#fff"
								:logoSrc="imageUrl" :logoScale="0.2" :size="220" ref="Qrcode" style="display: none;">
							</vue-qr> -->
							<canvas id="hb" width="750" height="1496" style="width: 100%;"></canvas>
						</div>
						<div class="p13-rule" @click="showTip=true"></div>
						<div class="p13-btn">
							<label class="btn2" @click="setHb"></label>
							<label class="point"></label>
						</div>
						<div class="p13-zy" v-show="showTip">
							<div class="p13-yy" @click="showTip=false"></div>
							<div class="p13-ruleMsg">
								<h3>奖励规则</h3>
								<div class="msgAll">
									<p class="weight">1、分享有奖</p>
									<p>成功分享，奖励100元宝/次，每人只能获得一次奖励；</p>
									<p class="weight">2、浏览有奖</p>
									<p>①客户浏览经纪人分享内容，经纪人获奖励10元宝/客户/天，每天最高奖励100元宝；</p>
									<p>②活动期内每人最高奖励500元宝。</p>
									<p></p>
								</div>
								<label @click="showTip=false"></label>
							</div>
						</div>
						<div class="p13-zy" v-show="showImg">
							<div class="p13-yy" @click="showImg=false"></div>
							<div class="p13-img">
								<div class="pBox">
									<img :src="hbUrl" width="100%" v-if="hbUrl" />
								</div>
								<!-- <div class="saveBtn" v-if="hbUrl" @click="saveHb">
									<div class="save-ponit"></div> 
								</div> -->
								<p v-if="hbUrl">长按图片保存</p>
								<p v-else>图片生成失败，请刷新页面重试</p>
								<label @click="showImg=false"></label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</full-page>
		<div>
		</div>

	</div>
</template>

<script>
	// var shareLink = window.location.href;
	// var shareObj = { //微信链接分享
	// 	title: "网络小白or精英领袖？快来测一测你属于哪个段位！",
	// 	desc: '中原找房成长系统4周年，看见你的成长',
	// 	link: shareLink,
	// 	imgUrl: "https://sz.centanet.com/partner/house/assets/imgs/main/game/share-game.png",
	// };
	import wx from 'weixin-js-sdk';
	import Vue from 'vue';
	import vueQr from 'vue-qr' //第二种绘制  可以加logo
	import 'fullpage.js/vendors/scrolloverflow';
	import VueFullpage from 'vue-fullpage.js';
	Vue.use(VueFullpage);
	var timeOutEvent = 0; //定时器
	export default {
		name: "year",
		data() {
			const vm =this
			return {
				options: {
					licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
					//是否显示导航，默认为false
					navigation: false,
					//横向slide幻灯片是否循环滚动
					loopHorizontal: false,
					//是否使用css3 transform来实现滚动效果
					// css3: true,
					//是否显示两侧的箭头
					controlArrows: false,
					//是否循环滚动，不会出现跳动，效果很平滑
					continuousVertical: false,
					//是否使用插件滚动方式，设为false后，会出现浏览器自带的滚动条，将不会按页滚动
					// autoScrolling: true,
					//是否包含滚动条，设为true，则浏览器自带的滚动条会出现，页面还是按页滚动，但是浏览器滚动条默认行为也有效
					// scrollBar: true,
					//定义锚链接，用户可以快速打开定位到某一页面；不需要加"#"，不要和页面中任意的id和name相同
					anchors: ["year", "year2", "year3", "year4", "year5"],
					//是否锁定锚链接
					lockAnchors: true,
					// afterSlideLoad:this.afterSlideLoad  slide滑动之后的回调
					afterSlideLoad: function(section, origin, destination, direction, trigger){
							if(destination.index==2){
								vm.njPlay();
							}else{
								vm.njEnd();
							}
						}
				},
				roleM: false,
				idx: 0,
				go: false,
				timer: "",
				loadNum: 0,
				ready: false,
				qy: "",
				flag: 5,
				flagText: "做值得信赖的中原人",
				showTip: false,
				routerNum: "",
				showImg: false,
				showLogin: true,
				name: "",
				empNo: "",
				my: "",
				goFast: false,
				goTime: 0,
				timeJS: "",
				isPP: false,
				tx: "",
				imageUrl: "images/logo.png",
				downloadData: {
					url: '',
					icon: '随便一张图片的地址也行'
				},
				hbUrl: "",
				isHe: false,
				myMsg:"",//祝福语
				showSend:false, //提交成功弹窗
				send:true, //是否提交过
				baseUrl:"https://sz.centanet.com/partner/jifen",
				id:"",
				code:"",
				jjr:"",
				ewm:""
			}
		},

		components: {
			vueQr
		},

		filters: {
			twoFixed(n) {
				let num = n / 10000;
				num = num.toFixed(2);
				return num;
			},
			changeName(n) {
				var niki = n.substring(n.length - 2);
				return niki;
			}
		},

		created() {
			this.local=window.location.href;
			this.readyLoad();
			// 有this.$route.query.id存在  表示浏览 他人  不存在表示制作人 
			if(this.$route.query.token){//经纪人自己 制作
				this.token=this.$route.query.token;
				this.showLogin=false;
				this.getData()
			}else if(this.$route.query.id&&this.$route.query.code){
				this.isHe = true;
				this.id=this.$route.query.id
				this.code=this.$route.query.code
				this.getAdmin();
				this.getPic();
			}
		},

		methods: {
			// afterSlideLoad( anchorLink, index, slideAnchor, slideIndex){
			// 	console.log("1",anchorLink, '2',index, '3',slideAnchor, '4',slideIndex)
			// },
			setBase() {
				const canvas = document.querySelector('canvas')
				const ctx = canvas.getContext('2d')
				const imgs = [
					'https://static.centanet.com/wap/main/img/logo.png',
					'https://static.centanet.com/wap/main/img/download.png',
					'https://pic.centanet.com/shenzhen/pic/agent/103365.jpg',
					'https://sz.centanet.com/partner/house/test/year1/images/year/canvas.jpg'
				]

				Promise.all(imgs.map(src => url2base64(src))).then(imgs => {
					imgs.forEach((url, i) => {
						const img = new Image()
						img.onload = () => {
							ctx.drawImage(img, i * 20, i * 20, 50, 50)
						}
						img.src = url
					})
					const url = canvas.toDataURL('image/jpeg', 0.8)
					console.log(url)
				})

				function url2base64(src, format = 'image/jpeg', qualicy = 1) {
					return new Promise((resolve, reject) => {
						const img = new Image()
						img.setAttribute('crossOrigin', 'anonymous')
						img.onload = () => {
							const canvas = document.createElement('canvas')
							const ctx = canvas.getContext('2d')
							canvas.width = img.naturalWidth
							canvas.height = img.naturalHeight
							ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight)
							resolve(canvas.toDataURL(format, qualicy))
						}

						img.onerror = evt => {
							console.log(evt)
							reject(evt)
						}
						img.src = src
					})
				}
			},

			// 画海报
			posterHb() {
				var d = document.getElementById('hb');
				var ctx = d.getContext('2d');
				// 背景图
				var bj = document.getElementById("scream");
				// 幸运词语
				var word = document.getElementById("word");
				var title1=document.getElementById("hb-my");
				var title2=document.getElementById("hb-he");
				// 头像
				var tx = document.getElementById("tx");
				// 二维码
				// var ewm = this.$refs.Qrcode.$el;
				var ewm = document.getElementById("ewm");
				ctx.drawImage(bj, 0, 0);
				if(this.isHe){
					ctx.drawImage(title2, 77, 212, 589, 92);
				}else{
					ctx.drawImage(title1, 77, 212, 589, 92);
				}
				ctx.drawImage(ewm, 51, 869, 160, 160);
				ctx.drawImage(word, 105, 341, 542, 132);
				// var img =new Image();
				// img.onload=()=>{
				// 	ctx.drawImage(img,98,924,126,172);
				// }
				// // img.setAttribute('crossOrigin','anonymous')	;
				// img.src=this.tx;
				// 
				// ctx.font = "24px PingFangSC-Regular";
				// ctx.fillStyle = "#fff";
				// ctx.fillText(`我在中原找房App共接待${this.my.CustomerCount}位客户`, 131, 685);
				// if (this.my.SalesCount > 0) {
				// 	if(this.my.SalesCount > 80){
				// 		ctx.fillText(`我帮超过80位新深圳人，实现安家梦`, 131, 728);
				// 	}else{
				// 		ctx.fillText(`我帮${this.my.SalesCount}位新深圳人，实现安家梦`, 131, 728);
				// 	}
				// } else {
				// 	ctx.fillText(`我肩负着每一位新深圳人的安家梦`, 131, 728);
				// }
				// ctx.fillText(`我全年共走了${this.my.StepNumber*360}步，足以绕深圳${this.my.TurnsNumber}圈`, 131, 768);
				// ctx.fillText(`......`, 131, 794);
				//
				ctx.font = "bold 40px FZLTCHJW--GB1-0";
				ctx.fillStyle = "#fff";
				ctx.fillText(this.jjr.EmpCnName, 256, 1187);
				//
				
					ctx.font = "30px SourceHanSansCN-Regular";
				ctx.fillStyle = "#fff";
				if(this.jjr.StoreName){
					ctx.fillText(this.jjr.StoreName, 256, 1261);
				}else{
					ctx.fillText('高级顾问', 256, 1261);
				}

				// ctx.font = "32px PingFangSC-Regular";
				// ctx.fillStyle = "rgba(231, 21, 51, 1)";
				// ctx.fillText(`燃力值击败了中原`, 109, 854);
				// ctx.fillText('的经纪人', 504, 852);
				// ctx.font = "bold 42px PingFangSC-Regular";
				// ctx.fillStyle = "rgba(231, 21, 51, 1)";
				// ctx.fillText(`${this.my.EmpRateStr}%`, 371, 856);
				// ctx.font = "30px Arial";
				// ctx.fillStyle = "#fff";
				// ctx.fillText(`2022年Flag：${this.flagText}`, 112, 1188);
				// 画头像
				// ctx.drawImage(img, 86.5, 1136.5, 126, 172);
				// let avatar =new Image();
				// avatar.src=this.tx;
				// avatar.onload=()=>{
				// 	this.drawCircleImage(ctx, avatar, 146.5, 1196.5, 63,172);
				// }
				this.drawCircleImage(ctx, tx, 142, 1208, 62,172);


				if(!this.isHe){
					this.$sensors.track('sc_click_activity', {
						sc_business_type:'other',
						sc_activity_name:document.title,
						sc_activity_url:window.location.href,
						sc_click_area:'底部区域',
						sc_button_name:'生成海报',
						sc_button_position:'(1,1)',
						sc_value:this.flagText
					});
				}
				
			},
			drawCircleImage(ctx, img, x, y, radius,imgHeight) {
				// 画圆头像
            ctx.save();
            let size = 2 * radius;//radius表示半径
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.clip();				
            ctx.drawImage(img, x - radius, y - radius, size, imgHeight);
            ctx.restore();
        },
				setHb(){
					var d = document.getElementById('hb');
					// 生成base64链接
					this.hbUrl = d.toDataURL('image/jpeg')
					this.showImg=true;
					this.setShare();
				},
				saveHb(){
					wx.miniProgram.postMessage({
						data: {
							imgData: this.hbUrl,
						},
					});
				},
			// 企业微信分享兼容微信分享  url接口必需去掉#号encodeURIComponent一下
			setShareQY() {
				this.$axios({
						method: "get",
						url: "https://m.sz.centanet.com/partner/weixin/qyweixinjssdkjsonp?url="+ encodeURIComponent(window.location.href.split('#')[0])
					})
					.then(res => {
						console.log('获取到接口返回值2',res);
						const params = new URLSearchParams({
							empName: this.my.EmpName,
							empNo: this.my.EmpNo
						})
						
						let url = [window.location.href, params.toString()].join(this.$route.fullPath.includes('?') ?
							'&' : '?')
							if(this.$route.query.empNo){
								url=window.location.href;
							}
							shareObj.title="网络小白or精英领袖？快来测一测你属于哪个段位！";
						let data = JSON.parse(res.data.replace('(', '').replace(')', ''));
						// console.log(data);
						if (data) {
							wx.config({
								debug: false,
								appId: "wx2730a10487f9df56",
								timestamp: data.Timestamp,
								nonceStr: data.NonceStr,
								signature: data.Signature,
								jsApiList: ['onMenuShareAppMessage',  'onMenuShareTimeline', 'onMenuShareWechat'],
								openTagList: ['wx-open-launch-app'] // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
							});
			
							wx.ready(function() {
								// console.log('企业微信分享', shareObj)
								// 老接口分享给朋友圈
								wx.onMenuShareTimeline({
								    title: shareObj.title,
								    link: url,
								    imgUrl: shareObj.imgUrl,
								    success: function(s) {
								    	console.log('[ suc ]', s)
								    },
								    fail: (e) => {
								    	console.log('[ err ]', e)
								    }
								}),
								// 企业微信
								// 获取“转发”按钮点击状态及自定义分享
								wx.onMenuShareAppMessage({
								    title: shareObj.title,
								    desc: shareObj.desc,
								    link: url,
								    imgUrl: shareObj.imgUrl,
								    success: function(s) {
								    	console.log('[ suc ]', s)
								    },
								    fail: (e) => {
								    	console.log('[ err ]', e)
								    }
								})
								// 获取“微信”按钮点击状态及自定义分享
								wx.onMenuShareWechat({
								    title: shareObj.title,
								    desc: shareObj.desc,
								    link: url,
								    imgUrl: shareObj.imgUrl,
								    success: function(s) {
								    	console.log('[ suc ]', s)
								    },
								    fail: (e) => {
								    	console.log('[ err ]', e)
								    }
								})
							})
							wx.error(function(res) {
								console.log(res)
							})
						}
					})
					.catch(err => {
						console.log('[ err ]', err)
					})
			},
			// 地址栏上有id的时候  认为是分享出去的浏览客
			getAdmin(){
				this.$axios({
						method: "get",
						url: this.baseUrl+"/Activity/PersonalStatsvisit",
						params: {
							id:this.id,
							js_code:this.code
						}
					})
					.then(res => {
						if(res.data.code==0){
							this.empNo=res.data.data.EmpNo;
							if(res.data.data&&res.data.data.IsEmp){
								this.my=res.data.data;
								this.showLogin=false;
							}else{
								this.showLogin=true;
							}
						}else{
							this.showLogin=true;
						}
						
					})
			},
			getPic(){
				this.$axios({
						method: "get",
						url: this.baseUrl+"/Activity/LoadingPoster",
						headers:{"token":this.$route.query.token},
						params: {
							page:'pages/game/index',
							scene:this.id
						}
					})
					.then(res => {
						if(res.data.code==0){
							this.jjr=res.data.data;
							this.tx=res.data.data.AvatarUrl;
							this.ewm='data:image/jpg;base64,'+res.data.data.Base64Img;
							// 几秒后画海报
							setTimeout(() => {
								this.posterHb();
							}, 5000)
						}else{
							console.log("获取图片失败")
						}
						
					})
			},
			setShare(){
				this.$axios({
						method: "post",
						url: this.baseUrl+"/Activity/Share",
						headers:{"token":this.$route.query.token},
						data: {Id:this.id}
					})
					.then(res => {
						
					})
			},
			// 获取祝福语
			// getLucky(){
			// 	this.$axios({
			// 			method: "get",
			// 			url: this.baseUrl+"",
			// 			params: {
							
			// 			}
			// 		})
			// 		.then(res => {
			// 			if(res.data.code==0){
							
			// 			}else{
							
			// 			}
						
			// 		})
			// },	
			// 提交祝福
			setLucky(){
				if (this.myMsg.length<50) {
					this.$toast.text("最少要写50个字哦");
					return;
				}
				this.$axios({
						method: "post",
						url: this.baseUrl+"/Activity/Submit",
						headers:{"token":this.$route.query.token},
						data: {
							"Content": this.myMsg,
							"Id": this.id
						}
					})
					.then(res => {
						if(res.data.data.IsSuccess){
							this.showSend=true;
						}else{
							this.$toast.text(res.data.data.Reamark);
						}
					})
			},
					//经纪人进来制作 
			getData() {
				this.$axios({
						method: "get",
						url: this.baseUrl+"/Activity/PersonalStats",
						headers:{"token":this.$route.query.token}
					})
					.then(res => {
						// console.log(res);
						if (res.data.code==0) {
							// this.showLogin = false;
							// this.downloadData.url =
							// 	`https://sz.centanet.com/partner/house/app/year/#/year?empName=${encodeURIComponent(res.data.Src.EmpName)}&empNo=${res.data.Src.EmpNo}`;
							// 	console.log(this.downloadData.url)
							// this.my = res.data.Src;
							// this.tx = res.data.Src.HeaderImage;
							// if (res.data.Src.RegionCode) {
							// 	this.qy = res.data.Src.RegionCode;
							// }
							// if (res.data.Src.EmpNo.length > 6) {
							// 	this.isPP = true;
							// }
							// sessionStorage.setItem("name", res.data.Src.EmpName);
							// sessionStorage.setItem("empNo", res.data.Src.EmpNo);
							this.my=res.data.data;
							this.id=res.data.data.Id;
							// 根据id获取图片海报二维码等信息
							this.getPic();
							// 几秒后画海报
							setTimeout(() => {
								this.posterHb();
							}, 5000)
							// var wx = navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1; //获取判断用的对象
							// console.log("UA",navigator.userAgent)
							// wx && this.setShareQY();
							// document.title="网络小白or精英领袖？快来测一测你属于哪个段位！"+res.data.Src.EmpName;
							if(res.data.data.EmpNo){
								this.$sensors.login(res.data.data.EmpNo);
								this.$sensors.track('sc_registration_login_result', {
									sc_type:"登录",
									sc_registration_login_way:"2",
									sc_is_success:true,
									sc_failure_reason:""
								});
							}else{
								this.$toast.text("你暂无权限");
							}
						} else {
							this.showLogin = true;
							this.$toast.text("数据获取失败");
						}
					})
					.catch(error => {
						this.$toast.text("网络错误，请稍后再试");
					})
			},
			sucClick(){
				this.showSend=false;
				this.goNext();
			},
			goLogin(){
				wx.miniProgram.reLaunch({
					url: '/pages/logWechat/logWechat',
					fail (e) {
						alert(JSON.stringify(e))
					}
				})
			},
			goStore(){
				wx.miniProgram.reLaunch({
					url: `/pages/mine_other/store/index?empNo=${this.empNo}&cityen=sz`,
					fail (e) {
						alert(JSON.stringify(e))
					}
				}
				)
			},
			setFlag(idx, text) {
				this.flag = idx;
				this.flagText = text;
			},
			readyLoad() {
				this.$nextTick(() => {
					let loaded = 0
					const imgs = this.$el.querySelectorAll('img');
					console.log(imgs);
					imgs.forEach(img => {
						if (img.complete) {
							// 图片加载完成
							console.log('[ 完成进度 ]', ++loaded, imgs.length);
							if (loaded / imgs.length > 0.7) {
								setTimeout(() => {
									this.ready = true;
								}, 1000)
							}
						} else {
							// 图片加载
							img.onload = () => {
								console.log('[ 加载进度 ]', ++loaded, loaded / imgs.length)
								//全部加载完成
								if (loaded / imgs.length > 0.7) {
									setTimeout(() => {
										this.ready = true;
									}, 1000)
								}
							}
						}
					})
					setTimeout(() => {
						this.ready = true;
					}, 4000)
				})
			},
			goPage1() {
				this.$refs.fullpage.api.moveTo('year', 1);
			},
			goNext1() {
				this.go = true;
				setTimeout(() => {
					setTimeout(() => {
						this.go = false;
					}, 500)
					this.$refs.fullpage.api.moveTo('year', 2);
				}, 1200)
			},
			goNext5() {
				this.$refs.fullpage.api.moveTo('year', 5);
			},
			goNext9() {
				this.go = true;
				setTimeout(() => {
					setTimeout(() => {
						this.go = false;
					}, 500)
					this.$refs.fullpage.api.moveTo('year', 9);
				}, 1200)
			},
			goNext12() {
				this.$refs.fullpage.api.moveTo('year', 12);
			},
			goNext13() {
				var theCanvas = document.getElementById('hb');
				theCanvas.width = 750;
				theCanvas.height = 1496;
				this.$refs.fullpage.api.moveTo('year', 13);
				this.posterHb();
			},
			goNext() {
				this.$refs.fullpage.api.moveSlideRight();
			},
			// 触摸事件开始
			gtouchstart() {
				timeOutEvent = setTimeout(this.longPress, 500); //这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适
				return false;
			},
			//手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
			gtouchend() {
				clearTimeout(timeOutEvent); //清除定时器
				this.goFast = false;
				clearInterval(this.timeJS);
				if (this.goTime > 1) {
					this.goNext5();
				}

				if (timeOutEvent != 0) {
					//这里写要执行的内容（尤如onclick事件）
					// alert("你这是点击，不是长按");
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
				// alert("长按事件触发发");
				this.goFast = true;
				timeOutEvent = 0;
				this.goTime = 0;
				this.timeJS = setInterval(() => {
					this.goTime++;
					if (this.goTime > 1) {
						clearInterval(this.timeJS);
						this.goNext5();
					}
				}, 500)
			},
			next() {
				// 向下滚动一页
				this.$refs.fullpage.api.moveSectionDown();
			},
			start() {
				setTimeout(() => {
					var audio = document.getElementById("music");
					// var audio1 = document.getElementById("music1");
					if(audio.paused){
						audio.play();
					}
					// if(audio1.paused){
					// 	audio1.play();
					// }
					this.roleM = true;
				}, 500)
			},
			njPlay() {
				
				var audio1 = this.$refs.music1;
				//paused 判断是否为暂停状态
				if (audio1.paused) { // 如果是暂停状态, 让其播放, 反之暂停
					audio1.play();
				} else {
					audio1.pause();
				}
			},
			njEnd() {
				var audio1 = this.$refs.music1;
				audio1.pause(); // 这个就是播放
			},
			lsPlay(n) {
				var audio2 = this.$refs.music2;
				//paused 判断是否为暂停状态
				if (audio2.paused) { // 如果是暂停状态, 让其播放, 反之暂停
					audio2.play();
				} else {
					audio2.pause();
				}
			},
			lsEnd() {
				var audio2 = this.$refs.music2;
				audio2.pause(); // 这个就是播放
			},
			starBF(){
				// 播放音乐
				var audio = this.$refs.music;
				if (audio.paused) {
					audio.play(); // 这个就是播放
					this.roleM = true;
				} 
			},
			bfPlay() {
				var audio = this.$refs.music;
				// audio.volume = 0.5;
				if (audio.paused) {
					audio.play(); // 这个就是播放
					this.roleM = true;
				} else {
					audio.pause(); // 这个就是暂停
					this.roleM = false;
				}
			},
			login(){
				this.loginGo();
				this.starBF();
			}
		}
	}
</script>
<style>

</style>
<style lang="less" scoped>
	@import url("~@/assets/css/animate.min.css");
  body{
    color:#000;
  }
	// 公共类
  .star {
    display:inline-block;
  	width: 0.6rem;
  	height: 0.64rem;
  	background: url(../images/game/p1-star.png) center no-repeat;
  	background-size: 100%;
    animation:swing ease 1s infinite;
  	// position: absolute;
  }
  .star-none{
    display:inline-block;
    width: 3.58rem;
    height: 0.64rem;
    background: url(../images/game/star-none.png) center no-repeat;
    background-size: 100%;
    margin-left:0.15rem;
    position: relative;
    top: 0.16rem;
  }
	.son {
		width: 3.34rem;
		height: 3.34rem;
		background: url(../images/year/p0-ty.png?v=2) center no-repeat;
		background-size: 100%;
		position: absolute;
	}

	.y1 {
		width: 1.23rem;
		height: 0.71rem;
		background: url(../images/year/p1-y1.png) center no-repeat;
		background-size: 100%;
		position: absolute;
		animation: toLeft1 linear 30s 2s infinite alternate;
	}

	.y2 {
		width: 1.23rem;
		height: 0.71rem;
		background: url(../images/year/p1-y2.png) center no-repeat;
		background-size: 100%;
		position: absolute;
		animation: toLeft1 linear 20s 1s infinite alternate;
	}

	.y3 {
		width: 0.81rem;
		height: 0.46rem;
		background: url(../images/year/p1-y3.png) center no-repeat;
		background-size: 100%;
		position: absolute;
		animation: toLeft1 linear 15s infinite alternate;
	}

	.text {
		position: absolute;
		font-size: 0.3rem;
    font-weight:600;
		opacity: 1;

		p {
			opacity: 0;
			animation: fadeIn linear 1s 0.5s forwards;
			margin-bottom: 0.1rem;

			&:nth-of-type(1) {
				animation-delay: 1.2s;
			}

			&:nth-of-type(2) {
				animation-delay: 1.5s;
			}

			&:nth-of-type(3) {
				animation-delay: 1.8s;
			}

			&:nth-of-type(4) {
				animation-delay: 2.1s;
			}

			&:nth-of-type(5) {
				animation-delay: 2.4s;
			}
			&:nth-of-type(6) {
				animation-delay: 2.7s;
			}
			span {
        padding:0 0.1rem;
        line-height:1.2;
        background:#fff;
        font-size:0.32rem;
				color: #FF5932;
				margin: 0 0.1rem;
        border-radius: 0.05rem;
			}
		}
	}

	.man {
		height: 3.5rem;
		width: 3.5rem;
		position: absolute;
		bottom: 1.2rem;
		left: 0.2rem;
		transition: all 1s linear;
		background: url(../images/year/man0.gif) center no-repeat;
		background-size: 3.5rem;
	}

	.woman {
		height: 3.5rem;
		width: 3.5rem;
		position: absolute;
		bottom: 1.2rem;
		left: 0.2rem;
		transition: all 1s linear;
		background: url(../images/year/woman0.gif) center no-repeat;
		background-size: 3.5rem;

	}

	.go {
		animation: goX linear 1.5s infinite forwards;
	}

	// -----------------------------------------
  .popup-box{
    background:none;
    overflow-y: visible;
  }
  .popup-center {
      transform: translate(-50%,-70%);
  }
	.lgBox {
		padding: 0.4rem 0.4rem;
    width: 6.2rem;
    height: 5.88rem;
    background: url(../images/game/login-bj.png) center no-repeat;
    background-size: 100%;
    position: relative;
    .lgBtn-dl{
      width: 2.68rem;
      height: 1.35rem;
      background: url(../images/game/login-qdl.png) center no-repeat;
      background-size: 100%;
      position: absolute;
      left:0.1rem;
      bottom:-1.1rem
    }
    .lgBtn-dp{
      width: 2.66rem;
      height: 1.35rem;
      background: url(../images/game/login-qdp.png) center no-repeat;
      background-size: 100%;
      position: absolute;
      right:0.28rem;
      bottom:-1.1rem
    }
		p {
			text-align: center;
			color: #434242;
			font-size: 0.36rem;
			margin-bottom: 0.4rem;
		}

		/deep/.nut-textinput {
			margin-bottom: 0.4rem;
			width: 5rem;
			height: 0.88rem;
			// background: #F2F2F2;
			color: #434242;

			input {
				height: 0.88rem;
				font-size: 0.3rem;
			}

			.nut-textinput-clear {
				width: 0.3rem;
				height: 0.3rem;
			}
		}

		/deep/ .nut-button {
			width: 100%;
			height: 0.88rem;
			font-size: 0.36rem;
			background: #F95353;
			line-height: 0.8rem;
		}

	}

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
			z-index: 2002;
			background: url(../images/game/loadBj.jpg?v=3) center bottom no-repeat;
			background-size: cover;

			.pic {
				width: 4rem;
				height: 4rem;
				position: absolute;
				top: 50%;
				left: 50%;
				margin: -1.8rem 0 0 -2rem;
				font-size: 30px;
				text-align: center;
				padding-top: 2rem;
				background: url(../images/game/loading.gif) center top no-repeat;
				background-size: 2rem;

				b {
					font-size: 0.38rem;
					color: #666;
					font-weight: 500;
					padding-right: 0.1rem;
				}
			}
		}

		.section {
			background: url(../images/game/pBj.jpg) center no-repeat !important;
			background-size: cover !important;
			height: 100%;
			transition: all linear 0.5s;
		}

		.slide {
			transition: all linear 0.5s;
			overflow: hidden;
			height: 100%;

			.content {
				min-height: 100vh;
				height: 100%;
				position: relative;
				// 为了入场动画
				// display: none;
			}
		}
		.go-r{
			background: url(../images/game/p1-right.png) center bottom no-repeat;
			background-size: 100%;
			width: 0.77rem;
			height: 0.4rem;
			position: absolute;
			bottom: 0.4rem;
			right: 0.34rem;
			z-index: 9;
			animation: goR linear 2s infinite;
			
		}
		.page0 {
			// background: url(../images/year/p0Bj.jpg?v=1) center bottom no-repeat;
			// background-size: cover;
      .p0-t{
        width: 3.91rem;
        height:1.65rem;
        position: absolute;
        left: 0.36rem;
        top: 1.11rem;
        z-index: 6;
        background: url(../images/game/p0-1.png) center bottom no-repeat;
        background-size: 100%;
        animation:bounce linear 2s 2S infinite;
      }
			.p0-t-1{
        background: url(../images/game/p0-1-1.png) center bottom no-repeat;
        background-size: 100%;
      }
      .p0-point{
        width: 1.49rem;
        height:1.02rem;
        position: absolute;
        left: 4.12rem;
        top: 1.26rem;
        z-index: 6;
        background: url(../images/game/p0-2.png) center bottom no-repeat;
        background-size: 100%;
        animation:shakeX linear 2s;
      }
			// .ty {
			// 	.son;
			// 	top: 0;
			// 	right: 0;
			// }
      
			// .p0-y1 {
			// 	.y1;
			// 	top: 1.57rem;
			// 	right: 0.47rem;
			// }

			// .p0-y2 {
			// 	.y2;
			// 	left: 1.82rem;
			// 	top: 2.4rem;
			// }

			// .p0-y3 {
			// 	.y3;
			// 	left: 0.59rem;
			// 	top: 1.56rem;
			// }

			.title {
				background: url(../images/game/p0-3.png) center bottom no-repeat;
				background-size: 100%;
				width: 6.9rem;
				height: 1.48rem;
				position: absolute;
				top: 2.81rem;
				left: 0.3rem;
				// animation: fadeInDown linear 4s 1s, pulse linear 6s 1s;
				z-index: 9;
			}
			.title-1 {
				background: url(../images/game/p0-3-1.png) center bottom no-repeat;
				background-size: 100%;
			}
      .t2{
        background: url(../images/game/p0-4.png) center bottom no-repeat;
        background-size: 100%;
        width: 4.97rem;
        height: 0.78rem;
        position: absolute;
        top: 4.26rem;
        left: 0.28rem;
        // animation: fadeInDown linear 1s, pulse linear 6s 1s infinite;
        z-index: 9;
      }
			.t2-1{
        background: url(../images/game/p0-4-1.png) center bottom no-repeat;
        background-size: 100%;
      }
      .t3{
        background: url(../images/game/p0-5.png) center bottom no-repeat;
        background-size: 100%;
        width: 1.94rem;
        height: 0.53rem;
        position: absolute;
        top: 4.37rem;
        left: 4.38rem;
        // animation: fadeInDown linear 1s, pulse linear 6s 1s infinite;
        z-index: 9;
      }
      .t4{
        background: url(../images/game/p0-6.png) center bottom no-repeat;
        background-size: 100%;
        width: 4.55rem;
        height: 6.09rem;
        position: absolute;
        top: 5.8rem;
        left: 1.49rem;
        // animation: fadeInDown linear 1s, pulse linear 6s 1s infinite;
        z-index: 9;
        animation:shakeX linear 4s infinite;
      }
      .t5{
        background: url(../images/game/p0-7.png) center bottom no-repeat;
        background-size: 100%;
        width: 6.45rem;
        height: 0.99rem;
        position: absolute;
        top: 11.33rem;
        left: 0.53rem;
        // animation: fadeInDown linear 1s, pulse linear 6s 1s infinite;
        z-index: 10;
      }
      .t6{
        background: url(../images/game/p0-8.png) center bottom no-repeat;
        background-size: 100%;
        width: 4.51rem;
        height: 1.76rem;
        position: absolute;
        top: 12.11rem;
        left: 1.62rem;
        // animation: fadeInDown linear 1s, pulse linear 6s 1s infinite;
        z-index: 9;
      }
			.t6-1{
        background: url(../images/game/p0-8-1.png) center bottom no-repeat;
        background-size: 100%;
      }
			// @media (max-device-height: 740px) {
			// 	.title{
			// 		background: url(../images/year/p0-t1.png) center bottom no-repeat;
			// 		background-size: 75%;
			// 		top: 10%;
			// 	}
			// 	.ty{top: -0.6rem;}
			// 	.p0-y1 {
			// 		top: 1.07rem;
			// 	}
			// 	.p0-y2 {
			// 		.y2;
			// 		left: 1.82rem;
			// 		top: 1.9rem;
			// 	}
			// 	.p0-y3 {
			// 		.y2;
			// 		left: 0.59rem;
			// 		top: 1.05rem;
			// 	}
			// }
			.p0-btom {
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
			// background: url(../images/year/p1Bj1.jpg) center bottom no-repeat;
			// background-size: cover;
      .p1-top{
        height: 1.31rem;
        width: 6.26rem;
        position: absolute;
        left: 0.25rem;
        top: 0.81rem;
        background: url(../images/game/p1-1.png) left center no-repeat;
        background-size: 100%;
        line-height: 1.05rem;
        font-size: 0.4rem;
        font-weight:600;
        color: #fff;
        padding-left:0.28rem
      }
      .p1-s{
        .star;
        margin-left:0.15rem;
        position:relative;
        top:0.15rem
      }
      .p1-title{
        font-size:0.68rem;
        font-weight:600;
        color:#000;
        position: absolute;
        left: 0.38rem;
        top: 2.48rem;
      }

			.p1-text {
				.text;
        width: 6.2rem;
        height: 2.7rem;
        background: url(../images/game/p1-2.png) center bottom no-repeat;
        background-size: 100%;
				top: 3.5rem;
				left: 0.34rem;
        padding:0.2rem 0.46rem 0.18rem 0.36rem;
        color:#fff;
			}
      .p1-btom{
        width: 6.9rem;
        height: 7.46rem;
        background: url(../images/game/p1-b.png) 65% center no-repeat;
        background-size: 4.85rem;
        position: absolute;
        bottom: 0.3rem;
        right: 0.3rem;
        .p1-msg{
          width: 1.64rem;
          height: 1.1rem;
          background: url(../images/game/p1-msg.png) center no-repeat;
          background-size: 100%;
          position: absolute;
          left: 0.55rem;
          top: -0.4rem;
        }
        .p1-wl{
          width: 1.12rem;
          height: 1.12rem;
          background: url(../images/game/p1-wl.png) center no-repeat;
          background-size: 100%;
          position: absolute;
          left: 3.67rem;
          top: -0.6rem;
          transform: rotate(-12deg);
          animation: swing ease 1s infinite;
        }
        .p1-yb{
          width: 1.16rem;
          height: 1.17rem;
          background: url(../images/game/p1-yb.png) center no-repeat;
          background-size: 100%;
          position: absolute;
          left: 1.17rem;
          top: 2.4rem;
          transform: rotate(12deg);
          animation: swing ease-in 1s 2s infinite;
        }
        .p1-man{
          width: 1.98rem;
          height: 6.43rem;
          position: absolute;
          right: 0.9rem;
          bottom: 0.12rem;
          .p1-h{
            width: 0.91rem;
            height: 1.22rem;
            background: url(../images/game/p1-m1.png) center no-repeat;
            background-size: 100%;
            position: absolute;
            right: 0;
            top: 0.3rem;
            animation: roteY ease 1s infinite;
          }
          @keyframes roteY{
            0%{
              transform: rotate(0);
            }
            100%{
              transform: rotate(10deg);
            }
          }
          .p1-b{
            width: 1.98rem;
            height: 5.21rem;
            background: url(../images/game/p1-man.png) center no-repeat;
            background-size: 100%;
            position: absolute;
            right: 0;
            bottom: 0;
          }
        }
        
      }
			// @media (max-device-height: 740px) {
			// 	.p1-text {
			// 		top: 1rem;
			// 	}
			// }

			// .p1-nj1 {
			// 	width: 1.19rem;
			// 	height: 0.62rem;
			// 	background: url(../images/year/p1-n1.png) center bottom no-repeat;
			// 	background-size: 100%;
			// 	position: absolute;
			// 	bottom: 7.82rem;
			// 	right: 4.13rem;
			// }

			// .p1-nj2 {
			// 	width: 1.11rem;
			// 	height: 0.58rem;
			// 	background: url(../images/year/p1-n2.png) center bottom no-repeat;
			// 	background-size: 100%;
			// 	position: absolute;
			// 	bottom: 7.86rem;
			// 	right: 2.85rem;
			// }

			// @media (min-device-height: 740px) {
			// 	.p1-ty {
			// 		right: 0.8rem;
			// 	}

			// 	.p1-nj1 {
			// 		bottom: 8.5rem;
			// 	}

			// 	.p1-nj2 {
			// 		bottom: 8.56rem;
			// 	}
			// }
		}

		.page2 {
      .p2-top{
        height: 1.31rem;
        width: 6.26rem;
        position: absolute;
        left: 0.25rem;
        top: 0.81rem;
        background: url(../images/game/p2-1.png) left center no-repeat;
        background-size: 100%;
        line-height: 1.05rem;
        font-size: 0.4rem;
        font-weight:600;
        color: #fff;
        padding-left:0.28rem
      }
      .p1-s{
        .star;
        margin-left:0.15rem;
        position:relative;
        top:0.15rem
      }
			.p2-ty {
				.son;
				background: url(../images/year/p2-ty.png) center bottom no-repeat;
				background-size: 100%;
				top: -0.5rem;
				right: 0.6rem;
			}

			.p2-y1 {
				.y1;
				top: 2rem;
				right: 0.47rem;
			}

			.p2-y2 {
				.y2;
				right: 5.13rem;
				top: 1.7rem;
			}

			.p2-y3 {
				.y3;
				right: 6.53rem;
				top: -0.1rem;
			}

			.p2-text {
				.text;
        width: 6.6rem;
        height: 1.99rem;
        background: url(../images/game/p2-2.png) center bottom no-repeat;
        background-size: 100%;
        top: 2.37rem;
        left: 0.12rem;
        padding:0.35rem 0.6rem;
        color:#000;
        p{
          margin-bottom:0.2rem;
        }
			}
      .p2-yb0{
        width: 1.32rem;
        height: 1.07rem;
        background: url(../images/game/p2-yb.png) center bottom no-repeat;
        background-size: 100%;
        position: absolute;
        top: 3.02rem;
        right: 0.99rem;
      }
      .p2-mid{
        width: 5.01rem;
        height: 1.16rem;
        background: url(../images/game/p2-3.png) center bottom no-repeat;
        background-size: 100%;
        position: absolute;
        top: 4.31rem;
        left: 0.42rem;
        padding:0.2rem 0 0 0.4rem;
        font-size:0.32rem;
      }
      .p2-cat{
        width: 7.5rem;
        height: 6.47rem;
        position: absolute;
        background: url(../images/game/p2-cat.png) center bottom no-repeat;
        background-size: 100%;
        bottom: 1.1rem;
        left: 0;
        .p2-hander{
          width:1.47rem;
          height:2.43rem;
          position: absolute;
          top:1rem;
          right: 0.6rem;
          background: url(../images/game/p2-hand.png) center bottom no-repeat;
          background-size: 100%;
          animation: godown linear 2s infinite alternate;
        }
      }
      .p2-yby{
        width:7.5rem;
        height:14.96rem;
        position: absolute;
        top:0;
        right: 0;
        background: url(../images/game/p2-yby.gif) center bottom no-repeat;
        background-size: 100%;
        z-index: 3;
      }
      .p2-yb1{
        width: 2.12rem;
        height: 1.28rem;
        background: url(../images/game/p2-yb0.png) center bottom no-repeat;
        background-size: 100%;
        position: absolute;
        bottom: 1.22rem;
        right: 0.53rem;
      }
		}

		.page3 {
			// background: url(../images/year/p3Bj.jpg) center bottom no-repeat;
			// background-size: cover;
      .p3-top{
        height: 1.31rem;
        width: 6.26rem;
        position: absolute;
        left: 0.25rem;
        top: 0.81rem;
        background: url(../images/game/p3-1.png) left center no-repeat;
        background-size: 100%;
        line-height: 1.05rem;
        font-size: 0.4rem;
        font-weight:600;
        color: #fff;
        padding-left:0.28rem
      }
      .p1-s{
        .star;
        margin-left:0.15rem;
        position:relative;
        top:0.15rem
      }
			.p3-text {
				.text;
				width: 6.96rem;
				height: 2.93rem;
				background: url(../images/game/p3-2.png) center bottom no-repeat;
				background-size: 100%;
				top: 2.54rem;
				left: 0.18rem;
				padding:0.3rem 0.3rem 0.3rem 0.72rem;
				color:#000;
			}
      .p3-mid{
        width: 4.92rem;
        height: 1.16rem;
        background: url(../images/game/p3-3.png) center bottom no-repeat;
        background-size: 100%;
        position: absolute;
        top: 5.36rem;
        left: 0.35rem;
        padding:0.24rem 0 0 0.34rem;
        font-size:0.3rem;
      }
      .p3-bottom{
        width:7.5rem;
        height:5.53rem;
        position: absolute;
        bottom: 1.63rem;
        left: 0;
        .p3-woman{
          width: 3.76rem;
          height: 5.3rem;
          background: url(../images/game/p3-woman.png) center bottom no-repeat;
          background-size: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        .p3-hander{
          width: 3.27rem;
          height: 1.67rem;
          background: url(../images/game/p3-hander.png) center bottom no-repeat;
          background-size: 100%;
          position: absolute;
          top: 0.76rem;
          left: 2.03rem;
          animation: godown5 linear 1s infinite alternate;
        }
        .p3-man{
          width: 3.74rem;
          height: 5.58rem;
          background: url(../images/game/p3-man.png) center bottom no-repeat;
          background-size: 100%;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
		}

		.page4 {
			// background: url(../images/year/p4Bj.jpg) center bottom no-repeat;
			// background-size: cover;
      .p4-top{
        height: 1.31rem;
        width: 6.26rem;
        position: absolute;
        left: 0.25rem;
        top: 0.81rem;
        background: url(../images/game/p4-1.png) left center no-repeat;
        background-size: 100%;
        line-height: 1.05rem;
        font-size: 0.4rem;
        font-weight:600;
        color: #fff;
        padding-left:0.28rem
      }
      .p1-s{
        .star;
        margin-left:0.15rem;
        position:relative;
        top:0.15rem
      }
			.p4-text {
				.text;
				width: 6.84rem;
				height: 2.01rem;
				background: url(../images/game/p4-2.png) center bottom no-repeat;
				background-size: 100%;
        position: absolute;
				top: 2.54rem !important;
				left: 0.48rem !important;
				padding:0.3rem 0.3rem 0.3rem 0.43rem;
				color:#000;
			}
      .p4-mid{
        width: 4.92rem;
        height: 1.16rem;
        background: url(../images/game/p4-3.png) center bottom no-repeat;
        background-size: 100%;
        position: absolute;
        top: 4.39rem;
        left: 0.18rem;
        padding:0.3rem 0 0 0.4rem;
        font-size:0.28rem;
      }
      .p4-bottom{
        width:7.2rem;
        height:7.97rem;
        position: absolute;
        bottom: 0.91rem;
        left: 0.15rem;
        background: url(../images/game/p4-b.png) center bottom no-repeat;
        background-size: 100%;
        .p4-msg{
          width: 1.08rem;
          height: 1.4rem;
          background: url(../images/game/p4-msg1.png) center bottom no-repeat;
          background-size: 100%;
          position: absolute;
          top: 0.48rem;
          left: 1.73rem;
        }
        .p4-msg1{
          width: 1.19rem;
          height: 0.97rem;
          background: url(../images/game/p4-msg2.png) center bottom no-repeat;
          background-size: 100%;
          position: absolute;
          top: 2.75rem;
          left: 1.22rem;
        }
        .p4-man{
          width: 1.43rem;
          height: 3.4rem;
          background: url(../images/game/p4-r1.png) center bottom no-repeat;
          background-size: 100%;
          position: absolute;
          top: 2.44rem;
          left: 2.78rem;
        }
        .p4-man1{
          width: 1.56rem;
          height: 1.47rem;
          background: url(../images/game/p4-r2.png) center bottom no-repeat;
          background-size: 100%;
          position: absolute;
          bottom: 0.21rem;
          left: 1.38rem;
        }
      }

			// @media (max-device-height: 740px) {
			// 	.p4-text {
			// 		top: 0.9rem
			// 	}
			// }
		}

		.page5 {
			// background: url(../images/year/p5Bj.jpg) center bottom no-repeat;
			// background-size: cover;
      .p5-top{
        height: 1.31rem;
        width: 6.26rem;
        position: absolute;
        left: 0.25rem;
        top: 0.81rem;
        background: url(../images/game/p5-1.png) left center no-repeat;
        background-size: 100%;
        line-height: 1.05rem;
        font-size: 0.4rem;
        font-weight:600;
        color: #fff;
        padding-left:0.28rem
      }
      .p1-s{
        .star;
        margin-left:0.15rem;
        position:relative;
        top:0.15rem
      }
			.p5-text {
				.text;
				width: 6.92rem;
				height: 2.58rem;
				background: url(../images/game/p5-2.png) center bottom no-repeat;
				background-size: 100%;
        position: absolute;
				top: 2.54rem;
				left: 0.22rem;
				padding:0.3rem 0.63rem;
				color:#000;
			}
      .p5-mid{
        width: 6.06rem;
        height: 1.16rem;
        background: url(../images/game/p5-3.png) center bottom no-repeat;
        background-size: 100%;
        position: absolute;
        top: 4.95rem;
        left: 0.36rem;
        padding:0.34rem 0 0 0.4rem;
        font-size:0.28rem;
      }
      .p5-bottom{
        width:7.5rem;
        height:5.11rem;
        position: absolute;
        bottom: 1.51rem;
        left: 0;
        background: url(../images/game/p5-bottom.png) center bottom no-repeat;
        background-size: 100%;
        .p5-msg{
          width: 0.69rem;
          height: 0.58rem;
          background: url(../images/game/p5-msg.png) center bottom no-repeat;
          background-size: 100%;
          position: absolute;
          top: -0.39rem;
          left: 3rem;
        }
        .p5-man{
          width: 2.63rem;
          height: 5.83rem;
          background: url(../images/game/p5-man.png) center bottom no-repeat;
          background-size: 100%;
          position: absolute;
          top: -0.35rem;
          right: 1.55rem;
        }
      }

			// @media (max-device-height: 740px) {
			// 	.p5-ty {
			// 		top: -0.6rem;
			// 	}

			// 	.p5-text {
			// 		top: 2rem
			// 	}
			// }
		}

		.page6 {
      .p6-top{
        height: 1.31rem;
        width: 6.26rem;
        position: absolute;
        left: 0.25rem;
        top: 0.81rem;
        background: url(../images/game/p6-1.png) left center no-repeat;
        background-size: 100%;
        line-height: 1.05rem;
        font-size: 0.4rem;
        font-weight:600;
        color: #fff;
        padding-left:0.28rem
      }
      .p1-s{
        .star;
        margin-left:0.15rem;
        position:relative;
        top:0.15rem
      }
			.p6-text {
				.text;
				width: 6.92rem;
				height: 3.36rem;
				background: url(../images/game/p6-2.png) center bottom no-repeat;
				background-size: 100%;
        position: absolute;
				top: 2.54rem;
				left: 0.22rem;
				padding:0.3rem 0.2rem 0 0.63rem;
				color:#000;
        font-size: 0.31rem;
			}
      .p6-mid{
        width: 6.33rem;
        height: 1.9rem;
        background: url(../images/game/p6-3.png) center bottom no-repeat;
        background-size: 100%;
        position: absolute;
        top: 5.75rem;
        left: 0.22rem;
        padding:0.25rem 0 0 0.4rem;
        font-size:0.28rem;
        p{
          margin-bottom:0.15rem;
        }
      }
      .p6-bottom{
        width:6.68rem;
        height:4.76rem;
        position: absolute;
        bottom: 2.17rem;
        left: 0.42rem;
        background: url(../images/game/p6-shu.png) center bottom no-repeat;
        background-size: 100%;
        .p6-man{
          width: 3.2rem;
          height: 4.31rem;
          background: url(../images/game/p6-man.png) center bottom no-repeat;
          background-size: 100%;
          position: absolute;
          top: 1.65rem;
          left: 0;
        }
        .p6-phone{
          width: 2.96rem;
          height: 5.68rem;
          background: url(../images/game/p6-phone.png) center bottom no-repeat;
          background-size: 100%;
          position: absolute;
          top: -0.15rem;
          right: 0.23rem;
        }
        .p6-msg{
          width: 2.87rem;
          height: 3.13rem;
          background: url(../images/game/p6-msg.png) center bottom no-repeat;
          background-size: 100%;
          position: absolute;
          top: 1.12rem;
          left: 3.02rem;
        }
      }
		}

		.page7 {
      .p7-1{
        width:4.68rem;
        height:1.79rem;
        position: absolute;
        top: 0.46rem;
        left: 0.22rem;
        background: url(../images/game/p7-1.png) center bottom no-repeat;
        background-size: 100%;
        padding-top:0.25rem;
        text-align:center;
        font-size:0.36rem;
        font-weight:600;
      }
      .p7-2{
        width:6.74rem;
        height:2.65rem;
        position: absolute;
        top: 1.29rem;
        left: 0.48rem;
        background: url(../images/game/p7-2.png) center bottom no-repeat;
        background-size: 100%;
        padding:0.36rem 0.36rem;
        font-size:1.42rem;
        font-weight:600;
        color:#fff;
        line-height:1;
      }
      .p7-3{
        width:7.22rem;
        height:7.62rem;
        position: absolute;
        top: 4.37rem;
        left: 0.19rem;
        background: url(../images/game/p7-3.png) center bottom no-repeat;
        background-size: 100%;
        text-align:center;
        font-size:0.36rem;
        font-weight:600;
        padding:0.6rem;
        .p{
          width: 5.92rem;
          height:0.97rem;
          line-height:0.9rem;
          color:#fff;
          font-size:0.38rem;
          font-weight:600;
          display:flex;
          margin-bottom:0.33rem;
          text-align:left;
          padding-left:0.19rem;
          border:2px solid #000;
          border-radius:0.05rem;
          .tag{
            width:1.8rem;
            display:flex;
            justify-content: space-between;
          }
        }
        .p1-s{
          .star;
          margin-left:0.15rem;
          position:relative;
          top:0.15rem
        }
        .p7-wl{
          background:#6F86FE;
        }
        .p7-yb{
          background:#E93F53;
        }
        .p7-fw{
          background:#2FE4FF;
        }
        .p7-yx{
          background:#FF855A;
        }
        .p7-tip{
          h3{
            font-size:0.34rem;
            color:#1A1A1A;
            margin-bottom:0.2rem;
          }
          span{color:#F01818}
          p{
            font-size:0.3rem;
            font-weight:400;
          }
        }
      }
      .p7-btn{
        width:4.97rem;
        height:1.21rem;
        position: absolute;
        bottom: 1.3rem;
        left: 1.32rem;
        background: url(../images/game/p7-btn.png) center bottom no-repeat;
        background-size: 100%;
      }
		}

		.page8 {
      .p8-1{
        width:6.47rem;
        height:3.02rem;
        position: absolute;
        top: 0.65rem;
        left: 0.48rem;
        background: url(../images/game/p8-1.png) center bottom no-repeat;
        background-size: 100%;
      }
      .p8-2{
        width:7.07rem;
        height:5.08rem;
        position: absolute;
        top: 3.99rem;
        left: 0.32rem;
        background: url(../images/game/p8-2.png) center bottom no-repeat;
        background-size: 100%;
        padding:0.52rem 0.55rem 0.52rem 0.23rem;
        font-size:0.28rem;
        font-weight:600;
        color:#1A1A1A;
        textarea{
          border:0;
          width: 100%;
          height:100%;
          font-size:0.28rem;
          font-weight:600;
          color:#1A1A1A;
        }
        .p8-tip{
          position: absolute;
          bottom: 0.4rem;
          right: 0.45rem;
          font-size:0.28rem;
          font-weight:400;
          color:#CCCCCC;
        }
      }
      .p8-2-1{
        background: url(../images/game/p8-2-1.png) center bottom no-repeat;
        background-size: 100%;
        .p8-tip{
          color:#666;
        }
      }
      
      .p8-btn{
        width:3.44rem;
        height:1.21rem;
        position: absolute;
        bottom: 3.75rem;
        left: 2.03rem;
        background: url(../images/game/p8-btn.png) center bottom no-repeat;
        background-size: 100%;
				z-index:97;
      }
      .p8-btn1{
        width:3.87rem;
        height:1.21rem;
        position: absolute;
        bottom: 3.75rem;
        left: 1.82rem;
        background: url(../images/game/p8-btn1.png) center bottom no-repeat;
        background-size: 100%;
				z-index:97;
      }
      .p8-point{
        width:1.29rem;
        height:1rem;
        position: absolute;
        bottom: 4.41rem;
        left: 4.73rem;
        background: url(../images/game/p8-point.png) center bottom no-repeat;
        background-size: 100%;
				z-index:98;
      }
      .p8-point1{
        width:1.29rem;
        height:1rem;
        position: absolute;
        bottom: 4.41rem;
        left: 5.53rem;
        background: url(../images/game/p8-point.png) center bottom no-repeat;
        background-size: 100%;
				z-index:98;
      }
      .p8-btip{
        width:100%;
        padding:0 0.4rem;
        color:#666;
        font-size:0.24rem;
        position: absolute;
        bottom: 1rem;
        left: 0;
      }
      .top30{
        top:9.2rem;
      }
      // 弹窗
      .p8-zy {
      	width: 100%;
      	height: 100vh;
      	position: absolute;
      	left: 0;
      	top: 0;
      	z-index: 97;
      
      	.p8-yy {
      		width: 100%;
      		height: 100%;
      		background: #000;
      		opacity: 0.65;
      		position: absolute;
      		top: 0;
      		left: 0;
      		z-index: 98;
      	}
      
      	.p8-img {
      		width: 6.2rem;
      		height: 6.8rem;
      		padding: 2.86rem 1.3rem 0 1.5rem;
      		background-color: #fff;
      		position: absolute;
      		border-radius: 0.1rem;
      		top: 50%;
      		left: 50%;
      		margin: -3.4rem 0 0 -3.1rem;
      		z-index: 99;
      		animation: fadeInBig ease-in-out 0.5s;
          background: url(../images/game/send-suc.png) center bottom no-repeat;
          background-size: 100%;
          font-size:0.34rem;
          font-weight:600;
          text-align:center;
    
      	}
      }
      
		}

		.page9 {
      .p9-1{
        width: 6.55rem;
        height: 2.56rem;
        position: absolute;
        top: 0.81rem;
        left: 0;
        background: url(../images/game/p9-title.png) center no-repeat;
        background-size: 100%;
      }
      .p9-2{
        width: 6.68rem;
        height: 7.05rem;
        position: absolute;
        top: 3.02rem;
        left: 0;
        background: url(../images/game/p9-top.png) center no-repeat;
        background-size: 100%;
      }
      .p9-btn{
        width: 3.42rem;
        height: 1.21rem;
        position: absolute;
        top: 7.95rem;
        left: 0;
        background: url(../images/game/p9-btn.png) center no-repeat;
        background-size: 100%;
      }
      .p9-point{
        width: 1.29rem;
        height: 1rem;
        position: absolute;
        top: 7.61rem;
        left: 2.76rem;
        background: url(../images/game/p9-point.png) center no-repeat;
        background-size: 100%;
      }
      .p9-man{
        width: 5.39rem;
        height: 5.78rem;
        position: absolute;
        bottom: 0.76rem;
        left:1.97rem;
        background: url(../images/game/p9-man.png) center no-repeat;
        background-size: 100%;
      }
		}

		.page10 {
			background: url(../images/year/p10Bj.jpg) center bottom no-repeat;
			background-size: cover;

			.p10-ty {
				.son;
				width: 0.83rem;
				height: 1.38rem;
				top: 0.6rem;
				right: 1.8rem;
				background: url(../images/year/p-yl.png) center bottom no-repeat;
				background-size: 0.83rem;
			}

			.p10-y1 {
				.y1;
				top: 1.29rem;
				right: 0.69rem;
				background: url(../images/year/p10-y1.png) center bottom no-repeat;
				background-size: 100%;
			}

			.p10-y2 {
				.y2;
				right: 4.6rem;
				top: 1.8rem;
				background: url(../images/year/p10-y2.png) center bottom no-repeat;
				background-size: 100%;
			}

			.p10-y3 {
				.y3;
				right: 3.53rem;
				top: 0.3rem;
				background: url(../images/year/p10-y3.png) center bottom no-repeat;
				background-size: 100%;
			}

			.p10-text {
				.text;
				top: 3.4rem;
				left: 0.6rem;
				color: #fff;
			}

			.p10-man {
				position: absolute;
				left: 2.2rem;
				bottom: 0.6rem;
				width: 1.21rem;
				height: 4rem;

				.p10-m {
					width: 1.68rem;
					height: 5.06rem;
					background: url(../images/year/p10-man.png?v=1) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: 0;
					bottom: 0;
				}

				.p10-m1 {
					width: 1.88rem;
					height: 5.06rem;
					background: url(../images/year/p10-woman.png?v=2) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: -0.2rem;
					bottom: 0;
				}

				.p10-yin {
					width: 1.91rem;
					height: 0.35rem;
					background: url(../images/year/p10-yin.png) center bottom no-repeat;
					background-size: 100%;
					bottom: -0.05rem;
					position: absolute;
					left: -0.4rem;
				}
			}

			@media (max-device-height: 740px) {
				.p10-text {
					top: 2.8rem;
				}
			}
		}

		.page11 {
			background: url(../images/year/p11Bj.jpg?v=1) center bottom no-repeat;
			background-size: cover;

			.p11-ty {
				.son;
				background: url(../images/year/p9-ty.png) center bottom no-repeat;
				background-size: 100%;
				top: 0;
				right: 4.6rem;
			}

			.p11-y1 {
				.y1;
				top: 1.29rem;
				right: 0.69rem;
			}

			.p11-y2 {
				.y2;
				right: 4.6rem;
				top: 1.8rem;
			}

			.p11-y3 {
				.y3;
				right: 3.53rem;
				top: 0.3rem;
			}

			.p11-text {
				.text;
				top: 3rem;
				left: 0.6rem;
			}

			.p11-man {
				width: 1.99rem;
				height: 4.13rem;
				background: url(../images/year/p11-man.png) center bottom no-repeat;
				background-size: 100%;
				position: absolute;
				bottom: 2rem;
				left: 2.8rem;
			}

			.p11-woman {
				width: 1.8rem;
				height: 4.16rem;
				background: url(../images/year/p11-woman.png) center bottom no-repeat;
				background-size: 100%;
				position: absolute;
				bottom: 2rem;
				left: 3.2rem;
			}

			.p11-btn {
				width: 100%;
				height: 0.84rem;
				background: url(../images/year/p11-btn.png) center bottom no-repeat;
				background-size: 3.33rem;
				position: absolute;
				bottom: 0.8rem;
				left: 0;

				label {
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

			@media (max-device-height: 740px) {
				.p12-flag {
					bottom: 5rem;
				}

				.p11-ty {
					top: -0.4rem;
				}

				.p11-text {
					top: 2.4rem;
				}
			}
		}

		.page12 {
			background: url(../images/year/p12Bj.jpg) center bottom no-repeat;
			background-size: cover;

			.p12-title {
				width: 5.1rem;
				height: 2.38rem;
				position: absolute;
				left: 1.2rem;
				top: -0.1rem;
				background: url(../images/year/p12-flag.png) center no-repeat;
				background-size: 100%;
				animation: piao linear 3s infinite alternate;
			}

			.p12-y1 {
				.y1;
				top: 2.8rem;
				right: 0.2rem;
			}

			.p12-y2 {
				.y2;
				right: 5.6rem;
				top: 2.2rem;
			}

			.p12-y3 {
				.y3;
				right: 6.53rem;
				top: 0.3rem;
			}

			.p12-flag {
				width: 100%;
				height: 5rem;
				position: absolute;
				left: 2rem;
				bottom: 5.6rem;
				display: none;

				label {
					display: inline-block;
					position: absolute;
					background-color: #A6DFFF;
					padding: 0 1px 0.1rem;
					border-radius: 0.5rem;
					height: 0.8rem;
					position: absolute;
					right: 0;
					opacity: 0;
					animation: toLeftAll1 linear 8s infinite;
					border: 1px solid #333;

					span {
						display: inline-block;
						text-align: center;
						padding: 0 0.2rem;
						border-radius: 0.5rem;
						background-color: #fff;
						color: #333;
						height: 100%;
						line-height: 0.64rem;
						border: 1px solid #333;
					}
				}

				.on {
					span {
						background-color: #E32323;
						color: #fff;
					}
				}

				.flg1 {
					top: 0;
					right: 4rem;
				}

				.flg2 {
					top: 1.2rem;
					right: 3.5rem;
					animation-delay: 0.2s;
				}

				.flg3 {
					top: 2.4rem;
					right: 3rem;
					animation-delay: 0.4s;
				}

				.flg4 {
					top: 0;
					right: -0.5rem;
					animation-delay: 0.5s;
				}

				.flg5 {
					top: 1.2rem;
					right: 0.6rem;
					animation-delay: 1.2s;
				}

				.flg6 {
					top: 2.4rem;
					right: -1.6rem;
					animation-delay: 0.7s;
				}

				.flg7 {
					top: 3.6rem;
					right: 4rem;
					animation-delay: 0.8s;
				}

				.flg8 {
					top: 3.6rem;
					right: 0rem;
					animation-delay: 1.4s;
				}

				.flg9 {
					top: 4.8rem;
					right: 0;
					animation-delay: 2s;
				}

				// .flg10{
				// 	top:2.4rem;
				// 	animation-delay: 0.6s;
				// }
			}

			@media (min-device-height: 740px) {
				.p12-flag {
					bottom: 7rem;
				}
			}

			@media (max-device-height: 740px) {
				.p12-title {
					background-size: 4rem;
					top: -0.3rem;
				}
			}

			.p12-man {
				position: absolute;
				width: 1.99rem;
				height: 3.54rem;
				bottom: 1.6rem;
				left: 0.6rem;
				background: url(../images/year/p12-man.png) center no-repeat;
				background-size: 1.99rem;
			}

			.woman {
				bottom: 1.8rem;
				left: -0.1rem;
			}

			.man {
				bottom: 1.6rem;
				left: -0.1rem;
			}

			.p12-btn {
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

			// .p12-point{
			// 	width: 0.53rem;
			// 	height: 0.81rem;
			// 	background: url(../images/year/p12-point.png) center no-repeat;
			// 	background-size: 0.53rem;
			// 	position: absolute;
			// 	left: 3.5rem;
			// 	bottom: 2rem;
			// 	animation: fadeInUp linear 2s infinite;
			// }
			.p12-btn {
				width: 100%;
				height: 0.84rem;
				background: url(../images/year/p12-btn.png) center bottom no-repeat;
				background-size: 3.33rem;
				position: absolute;
				bottom: 0.8rem;
				left: 0;

				label {
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

		.page13 {
			.p13Bj {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				overflow-y: auto;
				background: #011739;

				img {
					display: block;
				}
			}
      .p13-rule{
        width: 1.39rem;
        height: 0.64rem;
        position: absolute;
        right: 1.57rem;
        top: 0.44rem;
        background: url(../images/game/icon-rule.png) center no-repeat;
        background-size: 100%;
      }
			.p13-btn {
				width: 100%;
				height: 1.2rem;
				position: absolute;
				bottom: 0.4rem;
				left: 0;
				text-align: center;
        z-index:97;

				// .btn1 {
				// 	display: inline-block;
				// 	width: 2.77rem;
				// 	height: 0.84rem;
				// 	background: url(../images/year/p13-btn2.png) center no-repeat;
				// 	background-size: 2.77rem;
				// 	margin: 0 0.8rem 0 0;
				// }
        
				.btn2 {
					display: inline-block;
					width: 3.87rem;
					height: 1.21rem;
					background: url(../images/game/icon-share.png) center no-repeat;
					background-size: 3.87rem;
					animation: bounce linear 2s infinite;
				}
        .point{
          width: 1.29rem;
          height: 1rem;
          background: url(../images/game/p8-point.png) center no-repeat;
          background-size: 100%;
          position: absolute;
          right: 1.4rem;
          top: -0.34rem;
        }
			}

			.p13-zy {
				width: 100%;
				height: 100vh;
				position: absolute;
				left: 0;
				top: 0;
				z-index: 97;
				.p13-yy {
					width: 100%;
					height: 100%;
					background: #000;
					opacity: 0.65;
					position: absolute;
					top: 0;
					left: 0;
					z-index: 98;
				}

				.p13-point {
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
      .p13-ruleMsg{
          width: 6.02rem;
          height: 5.55rem;
          background: url(../images/game/rule.png) center no-repeat;
          background-size: 100%;
          padding: 0.58rem 0.36rem;
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -3rem 0 0 -3.01rem;
          z-index: 99;
          animation: fadeInBig ease-in-out 0.5s;
          h3{
            font-size:0.55rem;
            color:#FF314B;
          }
          .msgAll{
            margin-top:0.2rem;
            font-size:0.28rem;
            color:#333;
            p{
              line-height:1.6
            }
            .weight{
              font-weight:600;
              color:#000;
            }
          }
          label {
          	display: block;
          	width: 0.72rem;
          	height: 0.72rem;
          	background: url(../images/game/icon-close.png) center no-repeat;
          	background-size: 100%;
          	position: absolute;
          	right: 0;
          	top: -1.02rem;
          }
        }
				.p13-img {
					width: 5rem;
					height: 9rem;
					padding: 0.2rem;
					background-color: #fff;
					position: absolute;
					border-radius: 0.1rem;
					top: 50%;
					left: 50%;
					margin: -5.5rem 0 0 -2.5rem;
					z-index: 99;
					animation: fadeInBig ease-in-out 0.5s;

					.pBox {
						height: 100%;
						width: 100%;
						overflow-y: auto;
					}

					p {
						position: absolute;
						left: 0;
						bottom: -0.6rem;
						color: #fff;
						text-align: center;
						width: 100%;
					}
          .saveBtn{
            position: absolute;
            left: 0.56rem;
            bottom: -1.6rem;
            width: 3.87rem;
            height: 1.21rem;
            background: url(../images/game/icon-save.png) center no-repeat;
            background-size: 100%;
            .save-ponit{
              width: 1.29rem;
              height: 1rem;
              background: url(../images/game/p8-point.png) center no-repeat;
              background-size: 100%;
              position: absolute;
              right:-0.4rem;
              top: -0.26rem;
            }
          }
					label {
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

		#icon-music {
			transform-origin: center;
			display: block;
			width: 0.59rem;
			height: 0.59rem;
			background: url(../images/game/icon-music.png) center no-repeat;
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

	.p8Map .cicle {
		display: none;
	}

	.p8Map .ba {
		position: absolute;
		left: 0.41rem;
		top: 2.2rem;
		width: 1.74rem;
		animation-delay: 0.5s;
	}

	.ba img.cicle {
		top: 1.5rem;
		left: 0.3rem;
	}

	.gm img.cicle {
		top: 0.4rem;
		left: 0.1rem;
	}

	.lh img.cicle {
		top: 0.3rem;
		left: 0.05rem;
	}

	.lhu img.cicle {
		top: 0.4rem;
		left: 0.05rem;
	}

	.ft img.cicle {
		top: 0.4rem;
		left: 0rem;
	}

	.ns img.cicle {
		top: 0.8rem;
		left: 0rem;
	}

	.lg img.cicle {
		top: 0.9rem;
		left: 0.8rem;
	}

	.yt img.cicle {
		top: 0.36rem;
		left: 0.1rem;
	}

	.dp img.cicle {
		top: 0.3rem;
		left: 0.7rem;
	}

	.ps img.cicle {
		top: 0.16rem;
		left: 0.26rem;
	}

	// 统一动画
	// 元素入场
	.p1-text,
	.p2-text,
	.p1-text,
	.p3-text,
	.p4-text,
	.p5-text,
	.p6-text,
	.p7-text,
	.p8-text,
	.p9-text,
	.p10-text,
	.p11-text,
	.p12-text {
		display: none;
	}

	.content {
		display: none;
		transition: all linear 1s;
		// opacity: 0;
	}
	.p2-yb0{
		opacity: 0;
		animation: bounceIn 2s 2.5s ease forwards infinite;
	}
.p2-mid,.p3-mid,.p4-mid,.p5-mid,.p6-mid{
	animation: bounceInRight 2s 1s ease forwards;
    opacity: 0;
}
.p9-1,.p7-1{
	animation: bounceInLeft 1.5s ease forwards;
}
.p9-2,.p9-btn,.p7-2{
	animation: bounceInRight 1.5s 0.5s ease forwards;
  opacity: 0;
}
.p7-3{
	animation: bounceIn 1.5s 1.5s ease forwards;
  opacity: 0;
}
.p7-btn{
	animation: bounceIn 1.5s 2s ease forwards;
  opacity: 0;
}
.p9-point{
	opacity: 0;
	animation: fadeIn 2s 3s ease forwards,shakeX linear 5s 1s infinite !important;
}
.p9-man{
	animation: bounceInRight 2s 1.5s ease forwards;
  opacity: 0;
}
	.p8Map {
		display: none;
	}

	.fp-slide {
		// opacity: 0;
	}

	.peapo {
		// display: none;
	}

	// 为了入场动画
	.fp-slidesContainer {
		.active {
      .p8-point,.p8-point1,.point,.p9-point,.p10-point{
        animation: shakeX linear 5s infinite
      }
			// opacity: 1;
			.content {
				// opacity: 1;
				display: block;
			}
			.p2-msg,.p2-msg1{
				display: block !important;
			}
			// 元素入场
			.p1-text,
			.p2-text,
			.p1-text,
			.p3-text,
			.p4-text,
			.p5-text,
			.p6-text,
			.p7-text,
			.p8-text,
			.p9-text,
			.p10-text,
			.p11-text,
			.p12-text {
				display: block;
        animation: bounceInLeft linear 2s;
			}

			.p3-tm {
				display: block;
			}

			.p8Map {
				display: block;
			}

			.peapo {
				display: block;
			}

			.goRight {
				animation: goXX linear 80s infinite;
			}

			.fast {
				transition: all linear 1s;
				left: 7.5rem;
			}

			.p12-flag {
				display: block;
			}

		}
	}

	@keyframes sBig {
		from {
			transform: scale(1);
		}

		to {
			transform: scale(1.5);
		}
	}

	@keyframes toLeft {
		0% {
			opacity: 1;
			transform: translateX(0);
		}

		100% {
			opacity: 1;
			transform: translateX(-400px);
		}
	}

	@keyframes toLeftAll {
		0% {
			transform: translateX(0);
			opacity: 1;
		}

		100% {
			opacity: 1;
			transform: translateX(-500px);
		}
	}

	@keyframes toLeftAll1 {
		0% {
			transform: translateX(0);
			opacity: 1;
		}

		100% {
			opacity: 1;
			transform: translateX(-480px);
		}
	}

	@keyframes toLeft1 {
		0% {
			opacity: 1;
			transform: translateX(0);
		}

		100% {
			opacity: 1;
			transform: translateX(-100px);
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

	@keyframes goUp {
		0% {
			transform: translateY(200px);
		}

		100% {
			transform: translateY(-400px);
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
		0% {}

		90% {
			opacity: 0.8;
		}

		100% {
			opacity: 0;
			transform: translateX(440px)
		}
	}

	@keyframes goXX {
		0% {}

		90% {}

		100% {
			transform: translateX(2rem)
		}
	}

	@keyframes fadeInBig {
		0% {
			transform: translateY(400px) scale(0);
		}

		100% {
			transform: translateY(0px) scale(1);
		}
	}

	@keyframes piao {
		0% {
			transform: translateX(-30px) rotate(15deg);
		}

		100% {
			transform: translateX(30px) rotate(-15deg);
		}
	}

	@keyframes pulseBig {
		0% {
			transform: scale(1);
		}

		100% {
			transform: scale(1.15);
		}
	}
	@keyframes goR {
		0% {
			opacity: 0.8;
			transform: translateX(0);
		}
	
		100% {
			opacity: 1;
			transform: translateX(60px);
		}
	}
  @keyframes godown {
  	0% {
  		transform: translateY(0);
  	}
  
  	100% {
  		transform: translateY(30px);
  	}
  }
  @keyframes godown5 {
  	0% {
  		transform: translateY(0);
  	}
  
  	100% {
  		transform: translateY(5px);
  	}
  }
	@keyframes leftToright {
		0% {
			opacity: 0;
			transform: translateX(-750px);
		}
	
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	// #logo-text{
	// 	width: 100%;
	// 	text-align: center;
	// 	font-size: 0.22rem;
	// 	color: #999;
	// 	position: absolute;
	// 	left: 0;
	// 	bottom: 0.2rem;
	// 	z-index: 3;
	// 	text-align: center;
	// }
	// #logo{
	// 	width: 3.91rem;
	// 	height:1.65rem;
	// 	color: #999;
	// 	position: absolute;
	// 	left: 0.36rem;
	// 	top: 1.11rem;
	// 	z-index: 6;
	// 	background: url(../images/game/p1-1.png) center bottom no-repeat;
	// 	background-size: 100%;
	// }
  
</style>
