
<!-- 测试组件 混入 生成二维码 -->
<template>
	<div>
	<div :class="$style.red">
		首页
		<button @click="add(1)">加一</button>
		<button @click="subMutations(2)">异步加2</button>
		<button @click="send">去另一页{{$store.state.count}}</button>
		<div :class="$style.red">红色</div>
		<div class="box">首页</div>
		<div :class="$style.orange">橙色</div>
		<div :class="$style.yellow">黄色</div>
		<div class="blue">蓝色</div>
		<label :class="$style.box">测试</label>
		<div ref="qr" style="width: 200px;height: 200px;"></div>
		<div id="qrcode" ref="qrcode"></div>
		<vue-qr :text="downloadData.url" :margin="0" colorDark="#000" colorLight="#fff" :logoSrc="imageUrl" :logoScale="0.2" :size="200"></vue-qr>
		<input id="file" type="file" placeholder="上传图片" @change="upLoad()"/>
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
<!-- 	<hd :hData="444444444"><template v-slot:i>888</template>55</hd> -->
	</div>
</template>

<script>
	// import QRCode from 'qrcode'
	import QRCode from 'qrcodejs2'//第一种绘制
	import vueQr from 'vue-qr'//第二种绘制  可以加logo
	import testSlot from './testSlot'
	import {getQuerys} from '../global/sem.js'
	import hd from '../components/headers.vue'
	
	import  {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
	
	
	// minxins与vuex的区别
	
	// 经过上面的例子之后，他们之间的区别应该很明显了哈~
	
	// vuex：用来做状态管理的，里面定义的变量在每个组件中均可以使用和修改，在任一组件中修改此变量的值之后，其他组件中此变量的值也会随之修改。
	
	// Mixins：可以定义共用的变量，在每个组件中使用，引入组件中之后，各个变量是相互独立的，值的修改在组件中不会相互影响。
	
	// 与公共组件的区别
	
	// 同样明显的区别来再列一遍哈~
	
	// 组件：在父组件中引入组件，相当于在父组件中给出一片独立的空间供子组件使用，然后根据props来传值，但本质上两者是相对独立的。
	
	// Mixins：则是在引入组件之后与组件中的对象和方法进行合并，相当于扩展了父组件的对象与方法，可以理解为形成了一个新的组件。
	// 混入
	import {myMinxin} from "@/assets/mixins/minxins.js";
	export default{
		name: 'testHome',
		mixins:[myMinxin],//值为函数的选项，如created,mounted等，就会被合并调用，混合对象里的钩子函数在组件里的钩子函数之前调用
		data(){
			return{
				url:"http://www.baidu.com",
				imageUrl: require("../assets/img/tLogo.png"),
				downloadData: {
					url: 'http://www.baidu.com',
					icon: '随便一张图片的地址也行'
				},
				num:"555"//这个会替代混合对象中的num
			}
		},
		components: {
		      vueQr,
			  testSlot,
				hd
		    },
			computed:{
				...mapState(['count','hasLogin'])
			},
			created() {
				// 渠道  不区分大小写
				const { channel_utm_source,channel_utm_medium, sem, hmpl, FirstQudao } = getQuerys(this.$route.query, ['sem', 'hmpl', 'FirstQudao', 'channel_utm_source','channel_utm_medium']);
				console.log(channel_utm_source+channel_utm_medium)
				console.log(this.count);
				this.hello("我传值给minxins");
				console.log("组件的num："+this.num);//混入有对象有个num+1操作  所以这里输出5551 如果当前组件没有num则输出2
				// document.getElementById('file').addEventListener('change', function (event) {
				//   console.log(event.target.files[0])
				//   this.imageCompress(event.target.files[0]).then(blob => {
				//     console.log(blob)
				//   })
				// })
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
			
			/*
			  图片压缩方法 *传入的文件大小已经比设定的参数小的时候，会直接返回原文件
			  第一个入参  file
			  第二个入参  可以直接是一个数字，表示图片大小，默认100kb (100000 byte)
			            也可以是一个小数，表示图片压缩比例，例如 .8 表示 #分辨率# 压缩为原来的0.8倍
			            也可以是一个对象，可以包含size, width, height, fileType，其中：
			                size可以是图片大小，也可以是压缩比例
			                width是压缩后的图片宽度，默认自动按比例缩小
			                height是压缩后的图片高度，默认自动按比例缩小
			                fileType是压缩后的图片类型，可以是png或者jpg，不填则与原文件相同
			                qualityArgument是压缩后的图片质量，针对jpg图片，默认0.8中画质。0.6为低画质，0.9～1为高画质
			
			*/
		 upLoad(){
			 this.imageCompress(event.target.files[0]).then(blob => {
			   console.log(blob)
			 })
		 },
			imageCompress(file, obj = {}) {
			  return new Promise((resolve, reject) => {
			
			    let {
			      size,
			      width,
			      height,
			      fileType,
			      qualityArgument
			    } = obj
			
			    if (typeof obj == 'number') {
			      size = obj
			    }
			
			    if (file && file.size) {
			      //不需要压缩
			      if (size && file.size <= size) {
			        resolve(file)
			        return
			      }
			    } else {
			      reject({
			        msg: '文件参数错误，请确认是否传入了文件'
			      })
			      return
			    }
			
			    size = size || 100000
			
			    if (!/(jpg|jpeg|png)$/.test(file.type)) {
			      reject({
			        msg: '文件格式不是jpg或者png，请确认文件格式'
			      })
			      return
			    }
			    fileType = fileType || file.type
			    switch (fileType) {
			      case 'jpg':
			      case 'jpeg':
			      case 'image/jpeg':
			        fileType = 'image/jpeg'
			        break
			      case 'png':
			      case 'image/png':
			        fileType = 'image/png'
			        break
			      default:
			        reject({
			          msg: '不支持的文件格式'
			        })
			        return
			    }
			    //canvas检测。canvas用来压缩图片
			    let canvas = document.createElement('canvas')
			    if (!canvas || !canvas.getContext) {
			      reject({
			        msg: '浏览器不支持canvas'
			      })
			      return
			    }
			    let context = canvas.getContext('2d')
			
			    //FileReader检测。FileReader用来转base64
			    if (!window.FileReader) {
			      reject({
			        msg: '浏览器不支持FileReader'
			      })
			      return
			    }
			    let reader = new FileReader(),
			      img = new Image()
			    reader.readAsDataURL(file)
			
			    reader.onload = function (e) {
			      // e.target.result就是图片base64
			      img.src = e.target.result
			    }
			    img.onload = function () {
			      let originWidth = img.width,
			        originHeight = img.height
			      if (width && height) {
			        if (width > originWidth && height > originHeight) {
			          //原始分辨率比设定的分辨率小，不需要压缩
			          resolve(file)
			          return
			        }
			      } else if (width) {
			        if (width > originWidth) {
			          //原始分辨率比设定的分辨率小，不需要压缩
			          resolve(file)
			          return
			        }
			        height = originHeight * width / originWidth
			      } else if (height) {
			        if (height > originHeight) {
			          //原始分辨率比设定的分辨率小，不需要压缩
			          resolve(file)
			          return
			        }
			        width = originWidth * height / originHeight
			      } else {
			        let ratio = (size > 0 && size < 1) ? size : 0.9
			
			        width = (originWidth * ratio) | 0
			        height = (originHeight * ratio) | 0
			      }
			      canvas.width = width
			      canvas.height = height
			      context.drawImage(img, 0, 0, width, height)
						console.log(img);
			      canvas.toBlob(function (blob) {
							console.log(blob);
			        if (size && size > 1) {
			
			          if (blob.size <= size) {
			            resolve(blob)
			          } else {
			            this.imageCompress(blob, obj).then((newBlob) => {
			              resolve(newBlob)
										console.log(newBlob)
			            })
			          }
			
			        } else {
			          resolve(blob)
			        }
			      }, fileType, qualityArgument || .8)
			
			    }
			  })
			},
			
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
	@import "@/assets/css/test.less";
	@color:#ff0000;
	.pray{color: #A3866C;font-size: 50px;}
	.orange :extend(.pray) {font-size: 18px;color: @orange1;}
	.red{color: @color;}
	.yellow{color: @color}
	:global(.blue){color: blue;}
</style>
<style lang="less">
	
</style>
