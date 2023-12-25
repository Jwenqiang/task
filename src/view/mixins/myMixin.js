export const myMiXin={
	data(){
		return{
			numR:1
		}
	},
	created(){
		console.log('我的minxins');
	},
	methods:{
		test1(){
			this.numR+=1;
			console.log('mymixin的test1');
			console.log('mymixin的numR',this.numR);
		}
	}
}