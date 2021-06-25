<template>
	<div :class="$style.red">
		其他页{{num}}
		<button @click="$router.push({name:'home'})">回到首页</button>
	</div>
</template>

<script>
	
	export default{
		name: 'other',
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
		    },
			created () {
			    //这里我将icon的list给保存下来了
			    this.$bus.$on('get', this.myhandle)
			  },
			  beforeDestroy() {
			  	this.$bus.$off("get");
			  },
		mounted() {
			console.log(this.$store.state.count)
		},
		methods:{
			  myhandle (val) {
			      console.log(val, '这是从上个页面传递过来的参数')
			    }
		}
	}
</script>

<style lang="less" module>
	@color:#fff000;
	.red{color: red;}
	.yellow{color: @color}
	:global(.blue){color: blue;}
</style>
