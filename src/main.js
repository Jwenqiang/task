import Vue from 'vue'
import App from './App.vue'

import router from './router/router.js'
import axios from 'axios'
import Vuex from 'vuex'
// 京东框架2.X
import nutUI from '@nutui/nutui/dist/nutui.min.js';  // 加载构建后的JS
import '@nutui/nutui/dist/nutui.min.css';  //加载构建后的CSS
import 'fullpage.js/dist/fullpage.min.css'
nutUI.install(Vue);


// 全局配置接口base
import global_ from './global/Global.vue'
import store from './vuex/store'
// 懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
	 preLoad: 4,
     loading: require('./assets/img/loading.jpg'),//加载中图片，一定要有，不然会一直重复加载占位图
     error: require('./assets/img/loading.jpg'),  //加载失败图片
	 attempt: 10
});
// 预览大图插件
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
let options = {
  fullscreenEl: false
};
Vue.use(preview, options)
Vue.use(preview)

// bus
// import Bus from "./global/bus"
// Vue.use(Bus)
Vue.prototype.$bus = new Vue();

Vue.prototype.$_publicPath = process.env.BASE_URL

Vue.prototype.GLOBAL = global_;//便于全局变量访问
axios.defaults.baseURL=global_.BASE_URL;
axios.defaults.timeout = 10000;
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
// 神策埋点SDK接入
var sensors = require('sa-sdk-javascript'); 
sensors.init({//https://data.zhongyuanzhaofang.com/sa?project=production
  server_url: 'https://data.zhongyuanzhaofang.com/sa?project=production',
  is_track_single_page:true, // 单页面配置，默认开启，若页面中有锚点设计，需要将该配置删除，否则触发锚点会多触发 $pageview 事件
  use_client_time:true, 
  send_type:'beacon',
	show_log:false,
  heatmap: {
     //是否开启点击图，default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭。
     clickmap:'default',
     //是否开启触达图，not_collect 表示关闭，不会自动采集 $WebStay 事件，可以设置 'default' 表示开启。
     scroll_notice_map:'default'
  }
});
// 注册公共属性
sensors.registerPage({
	sc_platform_type:"wap_other",
	sc_city: "深圳",
	sc_business_type:"other"
});
sensors.quick('autoTrack'); //用于采集 $pageview 事件。
Vue.prototype.$sensors=sensors;


new Vue({
	store,
	router,
  render: h => h(App),
}).$mount('#app')

