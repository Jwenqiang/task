import Vue from 'vue'
import Router from 'vue-router'
import {
  getToken,
} from "@/global/token.js";
Vue.use(Router)
const LOGIN_PAGE_NAME = "login";
var router = new Router({
	mode:"hash",
	routes:[
		{path:'/',redirect:'/year'},
		{
			path:'/Home',
			name:"home",
			component:() =>import ('@/view/home'),
			meta:{
				title:'摇号查询',
				keepAlive:false
			}			
		},
		{
			path:'/testHome',
			name:"testHome",
			component:() =>import ('@/view/testHome'),
			meta:{
				title:'测试首页',
				keepAlive:false
			}			
		},		
		{
			path:'/other',
			name:"other",
			component:() =>import ('@/view/other'),
			meta:{
				title:'其他页',
				keepAlive:false
			}			
		},
		{
			path:'/testSlot',
			name:"testSlot",
			component:() =>import ('@/view/testSlot'),
			meta:{
				title:'测试Slot',
				keepAlive:false
			}			
		},
		{
			path:'/testSlotF',
			name:"testSlotF",
			component:() =>import ('@/view/testSlotF'),
			meta:{
				title:'测试SlotF',
				keepAlive:false
			}			
		},
		{
			path:'/score',
			name:"score",
			component:() =>import ('@/view/score'),
			meta:{
				title:'积分测算',
				keepAlive:false
			}			
		},
		{
			path:'/egg',
			name:"egg",
			component:() =>import ('@/view/egg'),
			meta:{
				title:'砸金蛋',
				keepAlive:false
			}			
		},
		{
			path:'/zjd',
			name:"zjd",
			component:() =>import ('@/view/zjd'),
			meta:{
				title:'砸金蛋1',
				keepAlive:false
			}			
		},
		{
			path:'/Error',
			name:"error",
			component:() =>import ('@/view/error'),
			meta:{
				title:'账号异常',
				keepAlive:true
			}			
		},
		{
			path:'/Activity',
			name:"activity",
			component:() =>import ('@/view/activity'),
			meta:{
				title:'活动',
				keepAlive:false
			}			
		},
		{
			path:'/help',
			name:"help",
			component:() =>import ('@/view/help'),
			meta:{
				title:'帮好友助力',
				keepAlive:false
			}			
		},
		{
			path:'/testMini',
			name:"testMini",
			component:() =>import ('@/view/testMini'),
			meta:{
				title:'h5调起小程序',
				keepAlive:false
			}			
		},
		{
			path:'/year',
			name:"year",
			component:() =>import ('@/view/year'),
			meta:{
				title:'多少次努力光顾过你的2021',
				keepAlive:false
			}			
		}
	]
})
var u = navigator.userAgent
if(u.indexOf('aplus') < 0){
	router.beforeEach((to, from, next) => {
		const token = getToken();
		const nowDate=new Date().getTime();
		const endTime=new Date(getToken().date).getTime();
		if(to.meta.title){
			document.title=to.meta.title
		}
		next();
		// if(to.name == 'error'){
		// 	 next(); // 跳转
		// }else if(to.name == 'days'||to.name == 'hh'||to.name == 'h5New'||to.name == 'school'||to.name == 'schoolAll'||to.name == 'call'||to.name == 'zxInfo'||to.name == 'rules'||to.name == 'rulesAll'){
		// 	 next(); // 跳转
		// }else if (!token && to.name !== LOGIN_PAGE_NAME) {
		//   // 未登录且要跳转的页面不是登录页  并且不是查看头像审核页
		//   next({
		// 	name: LOGIN_PAGE_NAME // 跳转到登录页
		//   });
		// }else if (!token && to.name === LOGIN_PAGE_NAME) {
		//   // 未登陆且要跳转的页面是登录页
		//   next(); // 跳转
		// } else if (token && to.name === LOGIN_PAGE_NAME) {
		//   // 已登录且要跳转的页面是登录页
		//   next({
		// 	name: 'home' // 跳转到homeName页
		//   });
		// }else if (token && nowDate>endTime) {
		// 	localStorage.removeItem('userInfo');
		//   // 已登录且要跳转的页面是登录页
		//   next({
		// 	name: 'login' // 跳转到homeName页
		//   });
		// }
		// else {
		// 	// if(to.meta.title){
		// 	// 	document.title=to.meta.title
		// 	// }
		//   next();
		// }
	})
}
router.afterEach((to, from)=>{
	//每次切换页面的时候，让页面滚动到最顶部
	window.scroll(0, 0);
})
export default router

// 防止重复点击跳转路由报错
const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}