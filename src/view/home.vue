<template>
	<div>
	<div :class="$style.red">
		首页
		<button @click="add(1)">加一</button>
		<button @click="subMutations(2)">异步加2</button>
		<button @click="send">去另一页{{$store.state.count}}</button>
		<div :class="$style.red">红色</div>
		<div class="box">橙色</div>
		<div :class="$style.yellow">黄色</div>
		<div class="blue">蓝色</div>
		<label :class="$style.box">测试</label>
		<div ref="qr" style="width: 200px;height: 200px;"></div>
		<div id="qrcode" ref="qrcode"></div>
		<vue-qr :text="downloadData.url" :margin="0" colorDark="#000" colorLight="#fff" :logoSrc="imageUrl" :logoScale="0.2" :size="200"></vue-qr>
	</div>
	
	<test-slot>
	  <template v-slot:header>
	    <h1>Here might be a page title</h1>
	  </template>
	
	  <p>A paragraph for the main content.</p>
	  <p>And another one.</p>
	
	  <template v-slot:footer>
	    <p>Here's some contact info</p>
	  </template>
	</test-slot>
	</div>
</template>

<script>
	// import QRCode from 'qrcode'
	import QRCode from 'qrcodejs2'//第一种绘制
	import vueQr from 'vue-qr'//第二种绘制  可以加logo
	import testSlot from './testSlot'
	
	import  {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
	export default{
		name: 'error',
		data(){
			return{
				url:"http://www.baidu.com",
				imageUrl: require("../assets/img/tLogo.png"),
				downloadData: {
					url: 'http://www.baidu.com',
					icon: '随便一张图片的地址也行'
				},
				num:""
			}
		},
		components: {
		      vueQr,
			  testSlot
		    },
			computed:{
				...mapState(['count','hasLogin'])
			},
			created() {
				console.log('首页')
				console.log(this.count)
			},
		mounted() {
			// QRCode.toCanvas(this.$refs.qr, this.url, error => {
			//   if (error) {
			// 	  console.log(error);
			//     // window.console.error(error)
			//     // this.$Message.warning('二维码生成失败' + error.message)
			//   }
			// })
			this.qrCode(this.url);
			console.log(this.$store.state)
		},
		beforeDestroy() {
			this.$bus.$emit("get","1111");
			//跳转  首先是先B组件先created然后beforeMount接着A组件才被销毁，A组件才执行beforeDestory，以及destoryed.
			// 所以，我们可以把A页面组件中的emit事件写在beforeDestory中去。因为这个时候，B页面组件已经被created了，也就是我们写的$on事件已经触发了

		},
		methods:{
			...mapMutations(['add']),
			...mapActions(['subMutations']),
			add(n){
				this.$store.commit('add',n)
			},
			subMutations(n){
				this.$store.dispatch('subMutations',n)
			},
			send(){
				this.$router.replace({path: '/other'});
			},
			qrCode (url) {//qrcodejs2  第一种绘制
			    let qrcode = new QRCode('qrcode', {
			        width: 150, //图像宽度        
					height: 150, //图像高度        
					colorDark : "#000000", //前景色        
					colorLight : "#ffffff", //背景色        
					typeNumber:4,         
					correctLevel : QRCode.CorrectLevel.H //容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
			    })    
				qrcode.clear() //清除二维码 
			    qrcode.makeCode(url) //生成另一个新的二维码
			}
		}
	}
</script>

<style lang="less" module>
	@color:#fff000;
	.orange :extend(.box) {font-size: 18px;}
	.red{color: @color;}
	.yellow{color: @color}
	:global(.blue){color: blue;}
</style>
<style lang="less">
	@import "@/assets/css/test.less";
</style>
