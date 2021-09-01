<template>
	<div :class="$style.red">
		其他页{{num}}
		<button @click="$router.push({name:'testHome'})">回到首页</button>
		<div id="main"></div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	

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
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('main'));
			// 绘制图表
			var option;
			
			option = {
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'cross',
			            crossStyle: {
			                color: '#999'
			            }
			        }
			    },
			    // toolbox: {
			    //     feature: {
			    //         dataView: {show: true, readOnly: false},
			    //         magicType: {show: true, type: ['line', 'bar']},
			    //         restore: {show: true},
			    //         saveAsImage: {show: true}
			    //     }
			    // },
			    legend: {
			        data: ['蒸发量', '降水量', '平均温度']
			    },
			    xAxis: [
			        {
			            type: 'category',
			            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
			            axisPointer: {
			                type: 'shadow'
			            }
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            name: '水量',
			            min: 0,
			            max: 250,
			            interval: 50,
			            axisLabel: {
			                formatter: '{value} ml'
			            }
			        },
			        {
			            type: 'value',
			            name: '温度',
			            min: 0,
			            max: 25,
			            interval: 5,
			            axisLabel: {
			                formatter: '{value} °C'
			            }
			        }
			    ],
			    series: [
			        {
			            name: '蒸发量',
			            type: 'bar',
			            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
			        },
			        {
			            name: '降水量',
			            type: 'bar',
			            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
			        },
			        {
			            name: '平均温度',
			            type: 'line',
			            yAxisIndex: 1,
			            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
			        }
			    ]
			};
			
			option && myChart.setOption(option);
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
<style>
	#main{width: 100%;height: 8rem;padding: 0.4rem 0.3rem;}
</style>
