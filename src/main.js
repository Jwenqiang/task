import Vue from 'vue'
import App from './App.vue'

import router from './router/router.js'
import axios from 'axios'
import Vuex from 'vuex'
// 京东框架
import nutUI from '@nutui/nutui/dist/nutui.min.js';  // 加载构建后的JS
import '@nutui/nutui/dist/nutui.min.css';  //加载构建后的CSS
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

Vue.prototype.GLOBAL = global_;//便于全局变量访问
axios.defaults.baseURL=global_.BASE_URL;
axios.defaults.timeout = 10000;
Vue.config.productionTip = false
Vue.prototype.$axios=axios
new Vue({
	store,
	router,
  render: h => h(App),
}).$mount('#app')

