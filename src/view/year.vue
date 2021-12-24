<template>
	<div class="container">
		<audio controls="controls" loop="loop" preload="preload" src="images/m.mp3" ref="music" id="music"
			hidden></audio>
		<audio controls="controls" loop="loop" preload="preload" src="images/nj.mp3" ref="music1" id="music1"
			hidden></audio>
		<audio controls="controls" loop="loop" preload="preload" src="images/leisheng.mp3" ref="music2" id="music2"
			hidden></audio>
		<template v-if="ready">
			<nut-popup v-model="showLogin" :close-on-click-overlay="false">
				<div class="lgBox">
					<p>登录</p>
					<nut-textinput v-model="name" label="" placeholder="请输入您的姓名" :clearBtn="true" :disabled="false" />
					<nut-textinput v-model="empNo" label="" placeholder="请输入您的工号" :clearBtn="true" :disabled="false" />
					<nut-button block @click="loginGo">
						回顾你的2021
					</nut-button>
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
		<full-page :options="options" ref="fullpage" v-show="ready">
			<div class="section">
				<div class="slide page0" @touchstart="start()">
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
				<div class="slide page1" @touchstart="njEnd()">
					<div class="content">
						<div class="man" :class="{'go':go}" @click="goNext1" v-if="my.Sex=='男'"></div>
						<div class="woman" :class="{'go':go}" @click="goNext1" v-else></div>
						<div class="p1-ty">
						</div>
						<div class="p1-y1"></div>
						<div class="p1-y2"></div>
						<div class="p1-y3"></div>
						<div class="mtext p1-text" v-if="!isPP">
							<p><span>{{my.InCompanyDateStr}}</span>，</p>
							<p>这是<span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
									v-else>你</template>加入中原的日子，</p>
							<p>此刻请用30秒去定格，</p>
							<p>关于它的记忆。</p>
						</div>
						<div class="mtext p1-text" v-else>
							<p>在<span>{{my.InCompanyDateStr}}</span> ，</p>
							<p><span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
									v-else>你</template>成为了中原的一份子。</p>
						</div>
						<!-- 						<div class="p1-nj1"></div>
						<div class="p1-nj2"></div> -->
					</div>
				</div>
				<div class="slide page2">
					<div class="content">
						<div class="p2-ty">
						</div>
						<div class="p2-y1"></div>
						<div class="p2-y2"></div>
						<div class="p2-y3"></div>
						<div class="p2-text">
							<p>让亲情更近，是爱的戏法，</p>
							<p>也是<span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
									v-else>你</template>的追求。</p>
							<p>肩负着“新一代”深圳人的购房梦想，</p>
							<p><span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
									v-else>你</template>的“星级”置业服务从此启航。</p>
						</div>
						<div class="p2-phone">
							<div style="width: 100%;height: 100%;overflow: hidden;">
								<div class="p2-msg"></div>
								<div class="p2-msg1"></div>
							</div>
						</div>
						<div class="p2-man">
							<div class="p2-yin"></div>
							<div class="p2-m" v-if="my.Sex=='男'"></div>
							<div class="p2-m1" v-else></div>
						</div>
					</div>
				</div>
				<div class="slide page3">
					<div class="content">
						<div class="p3-ty">
						</div>
						<div class="p3-y1"></div>
						<div class="p3-y2"></div>
						<div class="p3-y3"></div>
						<div class="p3-text">
							<p>今年<span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
									v-else>你</template>接待了<span>{{my.CustomerCount}}</span>个线上客户，</p>
							<p>为五湖四海的人提供置业服务。</p>
							<p>因为<span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
									v-else>你</template>知道，</p>
							<p>每一次咨询背后，</p>
							<p>都是对美好生活的向往。</p>
						</div>
						<div class="p3-man">
							<div class="p3-yin"></div>
							<div class="p3-m" v-if="my.Sex=='男'"></div>
							<div class="p3-m1" v-else></div>
						</div>
						<div class="p3-tm">
							<label class="tm1">我对这楼盘感兴趣</label>
							<label class="tm2">月供多少钱</label>
							<label class="tm3">业主什么价位</label>
							<label class="tm4">具体楼层多少</label>
							<label class="tm5">我想挂盘</label>
							<label class="tm6">有电梯吗</label>
						</div>
					</div>
				</div>
				<div class="slide page4" @click="lsPlay()" @touchmove="lsEnd()">
					<div class="content">
						<div class="p4-yz"></div>
						<div class="p4-text">
							<p>在深圳1997.47平方公里的土地上，</p>
							<p v-if="my.SalesCount>0"><span v-if="my.SalesCount<80">{{my.SalesCount}}</span><span
									v-else>近80</span>个房源找到了它的新主人，</p>
							<p v-else>很多个房源找到了它的新主人，</p>
							<p><span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
									v-else>你</template>替他们点亮了一盏叫做“家”的灯。</p>
						</div>
						<div class="p4-mtl"></div>
						<div class="p4-lb"></div>
						<div class="goRight man peapo" @touchstart="gtouchstart()" @touchend="gtouchend()"
							:class="goFast?'fast':'goRight'" v-if="my.Sex=='男'">
						</div>
						<div class="goRight woman peapo" @touchstart="gtouchstart()" @touchend="gtouchend()"
							:class="goFast?'fast':'goRight'" v-else></div>
						<div class="p4-b" @touchstart="gtouchstart()" @touchend="gtouchend()"></div>
					</div>
				</div>
				<div class="slide page5" @touchstart="lsEnd()">
					<div class="content">
						<div class="p5-ty">
						</div>
						<div class="p5-y1"></div>
						<div class="p5-y2"></div>
						<div class="p5-y3"></div>
						<div class="p5-text">
							<template v-if="my.SalesAmount>100000">
								<p>说个了不起的数字，</p>
								<p>今年<span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
										v-else>你</template>促成了<span>{{my.SalesAmount | twoFixed}}</span>万的成交额，</p>
								<p>这绝对是一场硬仗，但<span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
										v-else>你</template>做到了！</p>
							</template>
							<template v-else>
								<p>虽然今年房产市场不太好，</p>
								<p>但是<span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
										v-else>你</template>依然促成好几笔成交，</p>
								<p>这绝对是一场硬仗，但<span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
										v-else>你</template>做到了！</p>
							</template>
						</div>
						<div class="p5-man">
							<div class="p5-m" v-if="my.Sex=='男'">
								<div class="p5-hand"></div>
							</div>
							<div class="p5-m1" v-else>
								<div class="p5-hand1"></div>
							</div>
						</div>

					</div>
				</div>
				<div class="slide page6">
					<div class="content">
						<div class="p6-ty">
						</div>
						<div class="p6-y1"></div>
						<div class="p6-y2"></div>
						<div class="p6-y3"></div>
						<div class="p6-text">
							<p><span>{{my.TakeSeeDateStr}}</span>，</p>
							<p>深圳体感温度高达<span>{{my.Temperature}}°C</span>，</p>
							<template v-if="my.TakeSeeEstate">
								<p><span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
										v-else>你</template>带着客户到<span>{{my.TakeSeeEstate}}</span>小区，</p>
								<p>看了个前前后后，</p>
								<p>整个夏天流出的汗水，</p>
								<p>浇灌深圳每一处成片的绿荫。</p>
							</template>
							<template v-else>
								<p>但<span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
										v-else>你</template>依旧认真带客户看房，</p>
								<p>真诚服务的汗水，</p>
								<p>浇灌深圳每一处成片的绿荫。</p>
							</template>
						</div>
						<div class="p6-man">
							<div class="p6-m" v-if="my.Sex=='男'">
							</div>
							<div class="p6-m1" v-else>
							</div>
						</div>
					</div>
				</div>
				<div class="slide page7">
					<div class="content">
						<div class="p7-ty">
						</div>
						<div class="p7-y1"></div>
						<div class="p7-y2"></div>
						<div class="p7-y3"></div>
						<div class="p7-text">
							<p>关于买房有太多疑问，</p>
							<p>但只要有问题，就会得到回答！</p>
							<p v-if="my.BindCount>36"><span>{{my.BindCount}}</span>人因为<span
									v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
									v-else>你</template>的专业服务，</p>
							<p v-else>很多人因为<span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
									v-else>你</template>的专业服务，</p>
							<p>买房卖房路上不踩坑。</p>
						</div>
						<div class="p7-man">
							<div class="p7-yin"></div>
							<div class="p7-m" v-if="my.Sex=='男'"></div>
							<div class="p7-m1" v-else></div>
						</div>
						<div class="p7-man1">
							<div class="p7-yin"></div>
							<div class="p7-m"></div>
						</div>
					</div>
				</div>
				<div class="slide page8">
					<div class="content">
						<div class="p8-ty">
						</div>
						<div class="p8-y1"></div>
						<div class="p8-y2"></div>
						<div class="p8-y3"></div>
						<div class="p8-text">
							<p>在深圳，没有<span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
									v-else>你</template>不熟悉的小区，</p>
							<p>话说，<span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
									v-else>你</template>现在是行走的GPS吧。</p>
						</div>
						<div class="p8Map">
							<span class="ba"><img src="images/year/ba.png" width="100%"
									v-if="qy.indexOf('ba')<0" /><template v-else><img src="images/year/ba1.png"
										width="100%" class="qyD" /><img src="images/year/cicle.png"
										class="cicle" /></template></span>
							<span class="gm"><img src="images/year/gm.png" width="100%"
									v-if="qy.indexOf('gm')<0" /><template v-else><img src="images/year/gm1.png"
										width="100%" class="qyD" /><img src="images/year/cicle.png"
										class="cicle" /></template></span>
							<span class="ns"><img src="images/year/ns.png" width="100%"
									v-if="qy.indexOf('ns')<0" /><template v-else><img src="images/year/ns1.png"
										width="100%" class="qyD" /><img src="images/year/cicle.png"
										class="cicle" /></template></span>
							<span class="lh"><img src="images/year/lh.png" width="100%"
									v-if="qy.indexOf('lh')<0" /><template v-else><img src="images/year/lh1.png"
										width="100%" class="qyD" /><img src="images/year/cicle.png"
										class="cicle" /></template></span>
							<span class="ft"><img src="images/year/ft.png" width="100%"
									v-if="qy.indexOf('ft')<0" /><template v-else><img src="images/year/ft1.png"
										width="100%" class="qyD" /><img src="images/year/cicle.png"
										class="cicle" /></template></span>
							<span class="lg"><img src="images/year/lg.png" width="100%"
									v-if="qy.indexOf('lg')<0" /><template v-else><img src="images/year/lg1.png"
										width="100%" class="qyD" /><img src="images/year/cicle.png"
										class="cicle" /></template></span>
							<span class="lhu"><img src="images/year/lhu.png" width="100%"
									v-if="qy.indexOf('lhu')<0" /><template v-else><img src="images/year/lhu1.png"
										width="100%" class="qyD" /><img src="images/year/cicle.png"
										class="cicle" /></template></span>
							<span class="ps"><img src="images/year/ps.png" width="100%"
									v-if="qy.indexOf('ps')<0" /><template v-else><img src="images/year/ps1.png"
										width="100%" class="qyD" /><img src="images/year/cicle.png"
										class="cicle" /></template></span>
							<span class="yt"><img src="images/year/yt.png" width="100%"
									v-if="qy.indexOf('yt')<0" /><template v-else><img src="images/year/yt1.png"
										width="100%" class="qyD" /><img src="images/year/cicle.png"
										class="cicle" /></template></span>
							<span class="dp"><img src="images/year/dp.png" width="100%"
									v-if="qy.indexOf('dp')<0" /><template v-else><img src="images/year/dp1.png"
										width="100%" class="qyD" /><img src="images/year/cicle.png"
										class="cicle" /></template></span>
						</div>
						<div class="p4-mtl"></div>
						<div class="p4-lb"></div>
						<div class="man" :class="{'go':go}" @click="goNext9" v-if="my.Sex=='男'">
						</div>
						<div class="woman" :class="{'go':go}" @click="goNext9" v-else></div>
					</div>
				</div>
				<div class="slide page9">
					<div class="content">
						<div class="p9-ty">
						</div>
						<div class="p9-y1"></div>
						<div class="p9-y2"></div>
						<div class="p9-y3"></div>
						<div class="p9-text">
							<p>2021年<span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
									v-else>你</template>最高</p>
							<p>一天走了<span>{{my.StepNumber}}</span>步，</p>
							<p>全年共<span>{{my.StepNumber*360}}</span>步。</p>
							<p>别不信！</p>
							<p>这足以绕深圳约<span>{{my.TurnsNumber}}</span>圈。</p>
						</div>
						<div class="man" :class="{'go':go}" @click="goNext" v-if="my.Sex=='男'">
						</div>
						<div class="woman" :class="{'go':go}" @click="goNext" v-else></div>
					</div>
				</div>
				<div class="slide page10">
					<div class="content">
						<div class="p10-ty">
						</div>
						<div class="p10-y1"></div>
						<div class="p10-y2"></div>
						<div class="p10-y3"></div>
						<div class="p10-text">
							<p>印象最深的客户，<span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
									v-else>你</template>还记得吗。</p>
							<template v-if="my.WebChatStr">
								<p><span>{{my.WebChatStr}}</span>，</p>
								<p><span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
										v-else>你</template>还在贴心线上服务，</p>
								<p>为了他的安家梦而努力。</p>
							</template>
							<template v-else>
								<p>那天的月亮都睡着了。</p>
								<p><span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
										v-else>你</template>还在为了他的安家梦而努力。</p>
							</template>

						</div>
						<div class="p10-man">
							<div class="p10-yin"></div>
							<div class="p10-m" v-if="my.Sex=='男'"></div>
							<div class="p10-m1" v-else></div>
						</div>
					</div>
				</div>
				<div class="slide page11">
					<div class="content">
						<div class="p11-ty">
						</div>
						<div class="p11-y1"></div>
						<div class="p11-y2"></div>
						<div class="p11-y3"></div>
						<div class="p11-text">
							<p>2021，该如何回顾这一年？</p>
							<p>或许，一言「难」尽。</p>
							<p>但因为不放弃与竭诚的努力，</p>
							<p>今年<span v-if="isHe&&my.EmpName">{{my.EmpName | changeName}}</span><template
									v-else>你</template>的能力，</p>
							<p>打败了<span>{{my.EmpRateStr}}%</span>的经纪人。</p>
						</div>
						<div class="p11-man" v-if="my.Sex=='男'">
						</div>
						<div class="p11-woman" v-else>
						</div>
						<div class="p11-btn" @click="goNext12">
							<label></label>
						</div>
					</div>
				</div>
				<div class="slide page12">
					<div class="content">
						<div class="p12-y1"></div>
						<div class="p12-y2"></div>
						<div class="p12-y3"></div>
						<div class="p12-title">
						</div>
						<div class="p12-flag">
							<label class="flg1" :class="flag==1?'on':''" @click="setFlag(1,'做2022开单王')">
								<span>做2022开单王</span>
							</label>
							<label class="flg2" :class="flag==2?'on':''" @click="setFlag(2,'管住嘴迈开腿，腹肌1变8')">
								<span>管住嘴迈开腿，腹肌1变8</span>
							</label>
							<label class="flg3" :class="flag==3?'on':''" @click="setFlag(3,'成功脱单，跟单身狗byebye')">
								<span>成功脱单，跟单身狗byebye</span>
							</label>
							<label class="flg4" :class="flag==4?'on':''" @click="setFlag(4,'在深圳立足，把父母接过来')">
								<span>在深圳立足，把父母接过来</span>
							</label>
							<label class="flg5" :class="flag==5?'on':''" @click="setFlag(5,'做值得信赖的中原人')">
								<span>做值得信赖的中原人</span>
							</label>
							<label class="flg6" :class="flag==6?'on':''" @click="setFlag(6,'多陪父母家人，常回家看看')">
								<span>多陪父母家人，常回家看看</span>
							</label>
							<label class="flg7" :class="flag==7?'on':''" @click="setFlag(7,'放下手机，多看看书')">
								<span>放下手机，多看看书</span>
							</label>
							<label class="flg8" :class="flag==8?'on':''" @click="setFlag(8,'努力挣钱，买部喜欢的车')">
								<span>努力挣钱，买部喜欢的车</span>
							</label>
							<!-- 							<label class="flg9" :class="flag==9?'on':''" @click="setFlag(9,'小目标瘦五斤，运动走起')">
								<span>小目标瘦五斤，运动走起</span>
							</label> -->
						</div>
						<div class="man" :class="{'go':go}" @click="goNext" v-if="my.Sex=='男'">
						</div>
						<div class="woman" :class="{'go':go}" @click="goNext" v-else>
						</div>
						<!-- 						<div class="p12-btn">
							点击Flag生成海报
						</div> -->
						<!-- <div class="p12-point"></div> -->
						<div class="p12-btn" @click="goNext13">
							<label></label>
						</div>
					</div>
				</div>
				<div class="slide page13">
					<div class="content">
						<div class="p13Bj">
							<img src="images/year/canvas.jpg" width="100%" id="scream" style="display: none;"
								crossOrigin='anonymous' />
							<img :src="tx" id="tx" style="display: none;" crossOrigin='anonymous' v-if="tx" />
							<vue-qr :text="downloadData.url" :margin="0" colorDark="#000" colorLight="#fff"
								:logoSrc="imageUrl" :logoScale="0.2" :size="220" ref="Qrcode" style="display: none;">
							</vue-qr>
							<canvas id="hb" width="750" height="1496" style="width: 100%;"></canvas>
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
									<img :src="hbUrl" width="100%" v-if="hbUrl" />
								</div>
								<p v-if="hbUrl">长按保存图片</p>
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
	var shareLink = window.location.href;
	console.log(shareLink)
	var shareObj = { //微信链接分享
		title: "多少次努力光顾过你的2021",
		desc: '这里有你的2021大事记',
		link: shareLink,
		imgUrl: "https://sz.centanet.com/partner/house/shareImg/year1.png",
	};
	import Vue from 'vue';
	import vueQr from 'vue-qr' //第二种绘制  可以加logo
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
					//横向slide幻灯片是否循环滚动
					loopHorizontal: true,
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
					url: 'http://www.baidu.com',
					icon: '随便一张图片的地址也行'
				},
				hbUrl: "",
				isHe: false
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
			this.readyLoad();

			if (this.$route.query.empNo && this.$route.query.empName) {
				this.isHe = true;
				this.loginGo(this.$route.query.empNo, decodeURIComponent(this.$route.query.empName));
			}
			if (sessionStorage.getItem('name')) {
				this.name = sessionStorage.getItem('name');
				this.empNo = sessionStorage.getItem('empNo');
			}
		},

		methods: {
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
				console.log(this.my.EmpName)
				console.log('5')
				var d = document.getElementById('hb');
				var ctx = d.getContext('2d');
				// 背景图
				var bj = document.getElementById("scream");
				// 头像
				var tx = document.getElementById("tx");
				// 二维码
				var ewm = this.$refs.Qrcode.$el;
				ctx.drawImage(bj, 0, 0);
				ctx.drawImage(ewm, 320, 1317, 108, 108);
				// var img =new Image();
				// img.onload=()=>{
				// 	ctx.drawImage(img,98,924,126,172);
				// }
				// // img.setAttribute('crossOrigin','anonymous')	;
				// img.src=this.tx;
				ctx.font = "24px PingFangSC-Regular";
				ctx.fillStyle = "#fff";
				ctx.fillText(`我在中原找房App共接待${this.my.CustomerCount}位客户`, 131, 685);
				if (this.my.SalesCount > 0) {
					ctx.fillText(`我帮${this.my.SalesCount}位新深圳人，实现安家梦`, 131, 728);
				} else {
					ctx.fillText(`我肩负着每一位新深圳人的安家梦`, 131, 728);
				}
				ctx.fillText(`我全年共走了${this.my.StepNumber*360}步，足以绕深圳${this.my.TurnsNumber}圈`, 131, 768);
				ctx.fillText(`......`, 131, 794);
				//
				ctx.font = "38px FZLTCHJW--GB1-0";
				ctx.fillStyle = "#fff";
				ctx.fillText(this.my.EmpName, 247, 1043);
				//
				ctx.font = "28px SourceHanSansCN-Regular";
				ctx.fillStyle = "#fff";
				ctx.fillText(this.my.DeptName, 247, 1093);

				ctx.font = "32px PingFangSC-Regular";
				ctx.fillStyle = "rgba(231, 21, 51, 1)";
				ctx.fillText(`优秀的你打败了`, 109, 854);
				ctx.fillText('的经纪人', 478, 852);
				ctx.font = "bold 42px PingFangSC-Regular";
				ctx.fillStyle = "rgba(231, 21, 51, 1)";
				ctx.fillText(`${this.my.EmpRateStr}%`, 338, 856);
				ctx.font = "30px SourceHanSansCN-Regular";
				ctx.fillStyle = "#fff";
				ctx.fillText(`2022年Flag：${this.flagText}`, 115, 1188);
				// 画头像
				ctx.drawImage(tx, 98, 924, 126, 172);

				// 生成base64链接
				setTimeout(() => {
					this.hbUrl = d.toDataURL('image/jpeg')
				}, 500)



			},

			// 微信分享
			setShare() {
				this.$axios({
						method: "get",
						url: "https://m.sz.centanet.com/partner/weixin/jssdkjsonp?url=" + encodeURIComponent(window
							.location.href)
					})
					.then(res => {
						const params = new URLSearchParams({
							EmpName: this.my.EmpName,
							EmpNo: this.my.EmpNo
						})
						const url = [window.location.href, params.toString()].join(this.$route.path.includes('?') ?
							'&' : '?')
						console.log("分享链接" + url)
						let data = JSON.parse(res.data.replace('(', '').replace(')', ''));
						if (data) {
							wx.config({
								debug: false,
								appId: data.AppId,
								timestamp: data.Timestamp,
								nonceStr: data.NonceStr,
								signature: data.Signature,
								jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData']
							});

							wx.ready(function() {
								console.log('分享', shareObj)
								//分享好友
								wx.updateAppMessageShareData({
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
								});
								//分享朋友圈
								wx.updateTimelineShareData({
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
								});
							});
							wx.error(function(res) {
								console.log(res)
							});
						}
					})
					.catch(err => {
						console.log('[ err ]', err)
					})
			},

			loginGo(gh, name) {
				if (!gh) {
					if (this.name == "") {
						this.$toast.text("请输入您的姓名");
						return;
					} else if (this.empNo == "") {
						this.$toast.text("请输入您的工号");
						return;
					}
				}
				this.$axios({
						method: "get",
						url: "https://sz.centanet.com/partner/actapi/api/YearEnd/NianZhongH52021",
						params: {
							empNo: this.empNo || gh,
							empName: this.name || name
						}
					})
					.then(res => {
						console.log(res);
						if (res.data.Code == 101) {
							this.$toast.text("中原找房上暂无头像，请先上传头像~");
							return;
						} else if (res.data.IsSuccess) {
							if (res.data.Code == 100) {
								this.$toast.text("只面向11月1日前入职的三级经纪人同事哟~");
								return
							}
							this.showLogin = false;
							this.downloadData.url =
								`https://sz.centanet.com/partner/house/app/year/#/year?empName=${res.data.Src.EmpName}&empNo=${res.data.Src.EmpNo}`;
							this.my = res.data.Src;
							this.tx = res.data.Src.HeaderImage;
							if (res.data.Src.RegionCode) {
								this.qy = res.data.Src.RegionCode;
							}
							if (res.data.Src.EmpNo.length > 6) {
								this.isPP = true;
							}
							sessionStorage.setItem("name", res.data.Src.EmpName);
							sessionStorage.setItem("empNo", res.data.Src.EmpNo);
							// 几秒后画海报
							setTimeout(() => {
								this.posterHb();
							}, 5000)
							var wx = navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1; //获取判断用的对象
							wx && this.setShare();
						} else {
							this.showLogin = true;
							this.$toast.text("只面向三级经纪人同事哟~");
						}
					})
					.catch(error => {
						this.$toast.text("网络错误，请稍后再试");
					})
			},
			setFlag(idx, text) {
				this.flag = idx;
				this.flagText = text;
			},
			readyLoad() {
				this.$nextTick(() => {
					let loaded = 0
					const imgs = this.$el.querySelectorAll('img')
					imgs.forEach(img => {
						if (img.complete) {
							// 图片加载完成
							console.log('[ 进度 ]', ++loaded, imgs.length)
						} else {
							// 图片加载
							img.onload = () => {
								console.log('[ 进度 ]', ++loaded, loaded / imgs.length)
								//全部加载完成
								if (loaded / imgs.length > 0.9) {
									setTimeout(() => {
										this.ready = true;
									}, 1000)
								}
							}
						}
					})
				})
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
				this.go = true;
				setTimeout(() => {
					setTimeout(() => {
						this.go = false;
					}, 500)
					this.$refs.fullpage.api.moveSlideRight();
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
				this.goFast = false;
				clearInterval(this.timeJS);
				if (this.goTime > 2) {
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
					if (this.goTime > 2) {
						clearInterval(this.timeJS);
						this.goNext5();
					}
				}, 1000)
			},
			next() {
				// 向下滚动一页
				this.$refs.fullpage.api.moveSectionDown();
			},
			start() {
				setTimeout(() => {
					var audio = document.getElementById("music");
					var audio1 = document.getElementById("music1");
					audio.play();
					audio1.play();
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

		}
	}
</script>
<style>

</style>
<style lang="less" scoped>
	@import url("~@/assets/css/animate.min.css");

	// 公共类
	.son {
		width: 3.34rem;
		height: 3.34rem;
		background: url(../images/year/p0-ty.png?v=1) center no-repeat;
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
		font-size: 0.32rem;
		color: #333;
		opacity: 1;

		p {
			opacity: 0;
			animation: fadeIn linear 1.5s 0.5s forwards;
			margin-bottom: 0.1rem;

			&:nth-of-type(1) {
				animation-delay: 0.5s;
			}

			&:nth-of-type(2) {
				animation-delay: 0.8s;
			}

			&:nth-of-type(3) {
				animation-delay: 1.1s;
			}

			&:nth-of-type(4) {
				animation-delay: 1.4s;
			}

			&:nth-of-type(5) {
				animation-delay: 1.7s;
			}

			span {
				color: #E91F1F;
				margin: 0 0.06rem;
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
	.lgBox {
		padding: 0.4rem 0.4rem;

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
			background: url(../images/year/loadBj.jpg) center bottom no-repeat;
			background-size: cover;

			.pic {
				width: 4rem;
				height: 4rem;
				position: absolute;
				top: 50%;
				left: 50%;
				margin: -2rem 0 0 -2rem;
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

		.section {
			background: #b9d8f4 !important;
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

		.page0 {
			background: url(../images/year/p0Bj.jpg) center bottom no-repeat;
			background-size: cover;


			@media (max-device-height: 740px) {
				// .title{
				// 	top: 1%;
				// 	width: 1.2rem;
				// }
			}

			.ty {
				.son;
				top: 0;
				right: 0;
			}

			.p0-y1 {
				.y1;
				top: 1.57rem;
				right: 0.47rem;
			}

			.p0-y2 {
				.y2;
				left: 1.82rem;
				top: 2.4rem;
			}

			.p0-y3 {
				.y3;
				left: 0.59rem;
				top: 1.56rem;
			}

			.title {
				background: url(../images/year/p0-t.png) center bottom no-repeat;
				background-size: 100%;
				width: 5rem;
				height: 1.49rem;
				position: absolute;
				top: 22%;
				left: 50%;
				margin-left: -2.5rem;
				animation: fadeInDown linear 1s, pulse linear 6s 1s infinite;
			}

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
			background: url(../images/year/p1Bj.jpg) center bottom no-repeat;
			background-size: cover;

			.p1-ty {
				.son;
				top: -0.6rem;
				right: 0.4rem;
			}

			.p1-y1 {
				.y1;
				top: 1.57rem;
				right: 2.4rem;
			}

			.p1-y2 {
				.y2;
				right: 0.3rem;
				top: 4rem;
			}

			.p1-y3 {
				.y3;
				right: 6.16rem;
				top: 0.26rem;
			}

			.p1-text {
				.text;
				top: 2.91rem;
				left: 0.6rem;
			}

			@media (max-device-height: 740px) {
				.p1-text {
					top: 1rem;
				}
			}

			.p1-nj1 {
				width: 1.19rem;
				height: 0.62rem;
				background: url(../images/year/p1-n1.png) center bottom no-repeat;
				background-size: 100%;
				position: absolute;
				bottom: 7.82rem;
				right: 4.13rem;
			}

			.p1-nj2 {
				width: 1.11rem;
				height: 0.58rem;
				background: url(../images/year/p1-n2.png) center bottom no-repeat;
				background-size: 100%;
				position: absolute;
				bottom: 7.86rem;
				right: 2.85rem;
			}

			@media (min-device-height: 740px) {
				.p1-ty {
					right: 0.8rem;
				}

				.p1-nj1 {
					bottom: 8.5rem;
				}

				.p1-nj2 {
					bottom: 8.56rem;
				}
			}
		}

		.page2 {
			background: url(../images/year/p2Bj.jpg) center bottom no-repeat;
			background-size: cover;

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
				top: 2.2rem;
				left: 0.6rem;
				font-size: 0.32rem;
			}

			.p2-phone {
				width: 2.75rem;
				height: 5.42rem;
				background: url(../images/year/p2-phone.png) center bottom no-repeat;
				background-size: 100%;
				position: absolute;
				bottom: 2.7rem;
				right: 0.4rem;
				padding: 0.75rem 0.25rem 0.18rem;
				overflow: hidden;

				.p2-msg {
					width: 2.29rem;
					height: 4.06rem;
					background: url(../images/year/p2-msg.png) center bottom no-repeat;
					background-size: 100%;
					// position: absolute;
					// bottom: 0.2rem;
					// right: 0.25rem;
					animation: goUp linear 10s infinite;
				}

				.p2-msg1 {
					width: 2.29rem;
					height: 4.06rem;
					background: url(../images/year/p2-msg1.png) center bottom no-repeat;
					background-size: 100%;
					// position: absolute;
					// bottom: 0.2rem;
					// right: 0.25rem;
					animation: goUp linear 10s infinite;
				}
			}

			@media (max-device-height: 740px) {
				.p2-phone {
					bottom: 2rem;
				}

				.p2-man {
					bottom: 1.2rem;
				}

				.p2-text {
					top: 1rem
				}
			}

			.p2-man {
				position: absolute;
				right: 2.88rem;
				bottom: 1.67rem;
				width: 1.91rem;
				height: 4.35rem;

				.p2-m {
					width: 1.71rem;
					height: 4.35rem;
					background: url(../images/year/p2-man.png) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: 0;
					bottom: 0;
					z-index: 2;
				}

				.p2-m1 {
					width: 2.1rem;
					height: 4.35rem;
					background: url(../images/year/p2-woman.png) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: -0.2rem;
					bottom: 0;
					z-index: 2;
				}

				.p2-yin {
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

		@media (max-device-height: 740px) {
			.page2 {
				background: url(../images/year/p2Bj1.jpg) center bottom no-repeat;
				background-size: cover;
			}
		}

		.page3 {
			background: url(../images/year/p3Bj.jpg) center bottom no-repeat;
			background-size: cover;

			.p3-ty {
				.son;
				background: url(../images/year/p3-ty.png) center bottom no-repeat;
				background-size: 100%;
				top: -0.4rem;
				right: 2.8rem;
			}

			.p3-y1 {
				.y1;
				top: 3.5rem;
				right: 0.3rem;
			}

			.p3-y2 {
				.y2;
				right: 5.6rem;
				top: 1.2rem;
			}

			.p3-y3 {
				.y3;
				right: 1.47rem;
				top: 1.17rem;
			}

			.p3-text {
				.text;
				top: 2rem;
				left: 0.6rem;
			}

			.p3-man {
				width: 1.56rem;
				height: 4.75rem;
				position: absolute;
				right: 3.8rem;
				bottom: 1.4rem;

				.p3-m {
					width: 1.56rem;
					height: 4.72rem;
					background: url(../images/year/p3-man.png) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: 0;
					bottom: 0;
					z-index: 2;
				}

				.p3-m1 {
					width: 2.38rem;
					height: 4.55rem;
					background: url(../images/year/p3-woman.png) center bottom no-repeat;
					background-size: 2.38rem;
					position: absolute;
					left: -0.2rem;
					bottom: 0.1rem;
					z-index: 2;
				}

				.p3-yin {
					width: 1.91rem;
					height: 0.35rem;
					background: url(../images/year/p2-y.png) center bottom no-repeat;
					background-size: 100%;
					bottom: 0;
					position: absolute;
					left: -0.4rem;
				}
			}

			.p3-tm {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				overflow: hidden;
				display: none;

				label {
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
					animation: toLeftAll linear 6s infinite;
				}

				.tm1 {
					background: #566D94 url(../images/year/p3-t1.png) 5px center no-repeat;
					background-size: 0.46rem;
					right: -100px;
					top: 5.35rem;
					animation-delay: 5s;
				}

				.tm2 {
					background: #566D94 url(../images/year/p3-t2.png) 5px center no-repeat;
					background-size: 0.46rem;
					right: 0;
					top: 6.43rem;
					animation-delay: 3.6s;
				}

				.tm3 {
					background: #566D94 url(../images/year/p3-t3.png) 5px center no-repeat;
					background-size: 0.4rem;
					right: 0;
					top: 5.35rem;
					animation-delay: 4s;
				}

				.tm4 {
					background: #566D94 url(../images/year/p3-t4.png) 5px center no-repeat;
					background-size: 0.46rem;
					right: 0;
					top: 5.35rem;
					animation-delay: 2.2s;
				}

				.tm5 {
					background: #566D94 url(../images/year/p3-t5.png) 5px center no-repeat;
					background-size: 0.46rem;
					right: 0;
					top: 6.4rem;
					animation-delay: 1.6s;
				}

				.tm6 {
					background: #566D94 url(../images/year/p3-t6.png) 5px center no-repeat;
					background-size: 0.46rem;
					right: 0;
					top: 6.4rem;
					animation-delay: 0;
				}
			}

			@media (max-device-height: 740px) {
				.p3-tm {
					top: -1rem;

					.tm2,
					.tm5,
					.tm6 {
						top: 6.2rem;
					}
				}

				.p3-ty {
					top: -1rem;
				}

				.p3-ty {
					top: -1rem;
				}

				.p3-text {
					top: 1.4rem
				}
			}
		}

		.page4 {
			background: url(../images/year/p4Bj.jpg) center bottom no-repeat;
			background-size: cover;

			.content {
				background: url(../images/year/p4-yu.gif) center bottom no-repeat;
				background-size: cover;
			}

			.p4-yz {
				width: 100%;
				height: 100%;
				background: url(../images/year/p4-ye.gif) center bottom no-repeat;
				background-size: cover;
				position: absolute;
				left: 0;
				top: 0;
			}

			.p4-text {
				.text;
				top: 1.6rem;
				left: 0.6rem;
			}

			@media (max-device-height: 740px) {
				.p4-text {
					top: 0.6rem
				}
			}

			.p4-mtl {
				width: 5.25rem;
				height: 6.2rem;
				background: url(../images/year/p4-mtl.gif) left center no-repeat;
				background-size: 5rem;
				position: absolute;
				right: 0;
				bottom: 3.6rem;
			}

			.p4-lb {
				width: 7.5rem;
				height: 1.95rem;
				background: url(../images/year/p4-lb.png) left center no-repeat;
				background-size: 7.5rem;
				position: absolute;
				left: 0;
				bottom: 2.6rem;
			}

			.man {
				width: 3.2rem;
				height: 4.5rem;
				background: url(../images/year/man1.gif) left center no-repeat;
				background-size: 3.2rem;
				display: none;
			}

			.woman {
				display: none;
			}

			.p4-b {
				width: 1.39rem;
				height: 0.57rem;
				background: url(../images/year/p4-b.png) left center no-repeat;
				background-size: 1.39rem;
				position: absolute;
				bottom: 0.4rem;
				left: 0.4rem;
				animation: flash linear 5s infinite alternate;
			}

			// .goRight{
			// 	animation: goX linear 80s forwards;
			// }
			// .fast{
			// 	animation: goX linear 8s;
			// }
		}

		.page5 {
			background: url(../images/year/p5Bj.jpg) center bottom no-repeat;
			background-size: cover;

			.p5-ty {
				.son;
				background: url(../images/year/p5-ty.png) center bottom no-repeat;
				background-size: 100%;
				top: -0.2rem;
				right: 2.2rem;
			}

			.p5-y1 {
				.y1;
				top: 2rem;
				right: 1rem;
			}

			.p5-y2 {
				.y2;
				right: 5.13rem;
				top: 4.2rem;
			}

			.p5-y3 {
				.y3;
				right: 6.53rem;
				top: 0.3rem;
			}

			.p5-text {
				.text;
				top: 2.4rem;
				left: 0.4rem;
			}

			.p5-man {
				position: absolute;
				left: 0.43rem;
				bottom: 1.24rem;
				width: 1.91rem;
				height: 4.35rem;

				.p5-m {
					width: 3.47rem;
					height: 3.82rem;
					background: url(../images/year/p5-man.png) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: 0;
					bottom: 0;

					.p5-hand {
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

				.p5-m1 {
					width: 3.54rem;
					height: 3.83rem;
					background: url(../images/year/p5-woman.png) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: 0;
					bottom: 0;

					.p5-hand1 {
						width: 1.36rem;
						height: 0.97rem;
						background: url(../images/year/p5-hand1.png) center bottom no-repeat;
						background-size: 100%;
						position: absolute;
						left: 1.12rem;
						bottom: 1.82rem;
						animation: toUp 0.5s 1s linear infinite alternate;
					}
				}
			}

			@media (max-device-height: 740px) {
				.p5-ty {
					top: -0.6rem;
				}

				.p5-text {
					top: 2rem
				}
			}
		}

		.page6 {
			background: url(../images/year/p6Bj.jpg) center bottom no-repeat;
			background-size: cover;

			.p6-ty {
				.son;
				background: url(../images/year/p6-ty.png) center bottom no-repeat;
				background-size: 100%;
				top: 0;
				right: 3.4rem;
			}

			.p6-y1 {
				.y1;
				top: 0.4rem;
				right: 1.2rem;
			}

			.p6-y2 {
				.y2;
				right: 2.6rem;
				top: 1.8rem;
			}

			.p6-y3 {
				.y3;
				right: 6.53rem;
				top: 0.3rem;
			}

			.p6-text {
				.text;
				top: 2.91rem;
				left: 0.6rem;
			}

			.p6-man {
				position: absolute;
				left: 0.43rem;
				bottom: 1.24rem;
				width: 2rem;
				height: 4.8rem;

				.p6-m {
					width: 2rem;
					height: 4.8rem;
					background: url(../images/year/p6-man.gif) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: 0;
					bottom: 0;
				}

				.p6-m1 {
					width: 2rem;
					height: 4.8rem;
					background: url(../images/year/p6-woman.gif) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: 0;
					bottom: 0;
				}
			}

			@media (max-device-height: 740px) {
				.p6-ty {
					top: -0.5rem;
				}

				.p6-text {
					top: 2.3rem
				}
			}
		}

		.page7 {
			background: url(../images/year/p7Bj.jpg) center bottom no-repeat;
			background-size: cover;

			.p7-ty {
				.son;
				background: url(../images/year/p7-ty.png) center bottom no-repeat;
				background-size: 100%;
				top: 0;
				right: 3.6rem;
			}

			.p7-y1 {
				.y1;
				top: 0.4rem;
				right: 1.2rem;
			}

			.p7-y2 {
				.y2;
				right: -0.4rem;
				top: 1.8rem;
			}

			.p7-y3 {
				.y3;
				right: 6.53rem;
				top: 0.3rem;
			}

			.p7-text {
				.text;
				top: 2.91rem;
				left: 0.6rem;
			}

			.p7-man {
				position: absolute;
				left: 1rem;
				bottom: 1.24rem;
				width: 1.56rem;
				height: 3.98rem;

				.p7-m {
					width: 1.56rem;
					height: 3.98rem;
					background: url(../images/year/p7-man.png) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: 0;
					bottom: 0;
				}

				.p7-m1 {
					width: 1.93rem;
					height: 3.99rem;
					background: url(../images/year/p7-woman.png) center bottom no-repeat;
					background-size: 100%;
					position: absolute;
					left: -0.05rem;
					bottom: 0.05rem;
				}

				.p7-yin {
					width: 1.91rem;
					height: 0.35rem;
					background: url(../images/year/p2-y.png) center bottom no-repeat;
					background-size: 100%;
					bottom: 0;
					position: absolute;
					left: -0.4rem;
				}
			}

			.p7-man1 {
				position: absolute;
				left: 3rem;
				bottom: 1.24rem;
				width: 1.02rem;
				height: 3.93rem;

				.p7-m {
					width: 1.02rem;
					height: 3.93rem;
					background: url(../images/year/p7-man1.png) center bottom no-repeat;
					background-size: 1rem;
					position: absolute;
					left: 0;
					bottom: 0.05rem;
				}

				.p7-yin {
					width: 1.91rem;
					height: 0.35rem;
					background: url(../images/year/p2-y.png) center bottom no-repeat;
					background-size: 100%;
					bottom: 0;
					position: absolute;
					left: -0.1rem;
				}
			}

			@media (max-device-height: 740px) {
				.p7-ty {
					top: -0.5rem;
				}

				.p7-text {
					top: 1.8rem
				}
			}
		}

		.page8 {
			background: url(../images/year/p8Bj.jpg) center bottom no-repeat;
			background-size: cover;

			.p8-ty {
				.son;
				background: url(../images/year/p8-ty.png) center bottom no-repeat;
				background-size: 100%;
				top: 0;
				right: 4.2rem;
			}

			.p8-y1 {
				.y1;
				top: 0.4rem;
				right: 1.2rem;
			}

			.p8-y2 {
				.y2;
				right: -0.4rem;
				top: 1.8rem;
			}

			.p8-y3 {
				.y3;
				right: 6.53rem;
				top: 0.3rem;
			}

			.p8-text {
				.text;
				top: 2.91rem;
				left: 0.6rem;
			}

			.p8Map {
				position: absolute;
				width: 100%;
				height: 6rem;
				left: 0;
				bottom: 5rem;

				span {
					animation: bounceInRight 2s ease forwards;
					opacity: 0;

					img.cicle {
						width: 1rem;
						position: absolute;
						top: 0.1rem;
						left: 0.1rem;
						animation: sBig 1s 1s linear infinite;
					}

					img.qyD {
						animation: pulseBig 1s linear infinite alternate;
					}
				}

				span.gm {
					position: absolute;
					left: 1.24rem;
					top: 2.39rem;
					width: 1.17rem;
					animation-delay: 0.7s;
				}

				span.ns {
					position: absolute;
					left: 1.24rem;
					top: 3.85rem;
					width: 1.27rem;
					animation-delay: 0.9s;
				}

				span.lh {
					position: absolute;
					left: 2.01rem;
					top: 2.9rem;
					width: 1.14rem;
					animation-delay: 1.1s;
				}

				span.ft {
					position: absolute;
					left: 2.21rem;
					top: 4.4rem;
					width: 0.89rem;
					animation-delay: 1.3s;
				}

				span.lg {
					position: absolute;
					left: 2.64rem;
					top: 2.58rem;
					width: 2.32rem;
					animation-delay: 1.5s;
				}

				span.lhu {
					position: absolute;
					left: 2.78rem;
					top: 4.16rem;
					width: 1.18rem;
					animation-delay: 1.7s;
				}

				span.ps {
					position: absolute;
					left: 4.26rem;
					top: 2.86rem;
					width: 1.36rem;
					animation-delay: 1.9s;
				}

				span.yt {
					position: absolute;
					left: 3.78rem;
					top: 3.85rem;
					width: 1.16rem;
					animation-delay: 2.1s;
				}

				span.dp {
					position: absolute;
					left: 4.78rem;
					top: 3.76rem;
					width: 2.2rem;
					animation-delay: 2.1s;
				}
			}

			@media (max-device-height: 740px) {
				.p8-ty {
					top: -0.5rem;
				}

				.p8-text {
					top: 1.9rem
				}

				.man {
					bottom: ;
				}
			}
		}

		.page9 {
			background: url(../images/year/p9Bj.jpg) center bottom no-repeat;
			background-size: cover;

			.p9-ty {
				.son;
				background: url(../images/year/p9-ty.png) center bottom no-repeat;
				background-size: 100%;
				top: 0;
				right: 4.2rem;
			}

			.p9-y1 {
				.y1;
				top: 0.4rem;
				right: 1.2rem;
			}

			.p9-y2 {
				.y2;
				right: -0.4rem;
				top: 1.8rem;
			}

			.p9-y3 {
				.y3;
				right: 6.53rem;
				top: 0.3rem;
			}

			.p9-text {
				.text;
				top: 2.91rem;
				left: 0.6rem;
			}

			@media (max-device-height: 740px) {
				.p9-text {
					left: 0.8rem;
				}
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
			}

			.p10-y2 {
				.y2;
				right: 4.6rem;
				top: 1.8rem;
			}

			.p10-y3 {
				.y3;
				right: 3.53rem;
				top: 0.3rem;
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
						padding: 0 0.3rem;
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

			.p13-btn {
				width: 100%;
				height: 1.2rem;
				position: absolute;
				bottom: 0.2rem;
				left: 0;
				text-align: center;

				.btn1 {
					display: inline-block;
					width: 2.77rem;
					height: 0.84rem;
					background: url(../images/year/p13-btn2.png) center no-repeat;
					background-size: 2.77rem;
					margin: 0 0.8rem 0 0;
				}

				.btn2 {
					display: inline-block;
					width: 2.77rem;
					height: 0.84rem;
					background: url(../images/year/p13-btn1.png) center no-repeat;
					background-size: 2.77rem;
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
		// display: none;
		transition: all linear 1s;
		// opacity: 0;
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

			// opacity: 1;
			.content {
				// opacity: 1;
				display: block;
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
				transition: all linear 3s;
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
			transform: scale(1.1);
		}
	}
</style>
