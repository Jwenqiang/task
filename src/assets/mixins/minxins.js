export const myMinxin = {
	data(){
		return{
			num:1
		}
	},
	created(){
	},
	methods:{
		hello(v){
			this.num+=1;
			console.log("这里是混入对象");
			console.log(v);
			console.log("混入方法获取组件的num："+this.num);
		}
	}
}