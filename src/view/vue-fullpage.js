"use strict";/*!
* vue-fullpage 0.2.14
* https://github.com/alvarotrigo/vue-fullpage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/const s=require("vue"),l=["afterLoad","onLeave","afterRender","afterResize","afterResponsive","afterSlideLoad","onSlideLeave"],d=(e,t)=>{const i=e.__vccOpts||e;for(const[o,n]of t)i[o]=n;return i},a={name:"FullPage",props:{options:{type:Object,default(){}},skipInit:{type:Boolean,default:!1}},data(){return{events:l.reduce((e,t)=>({...e,[t]:(...i)=>{this.emitEvent(t,i)}}),{}),api:void 0}},watch:{options:{deep:!0,handler(){this.build()}}},mounted(){!this.skipInit&&this.init()},beforeUnmount(){typeof this.api<"u"&&this.destroy()},methods:{build(){let e=this.options.slideSelector||".slide",t=this.options.sectionSelector||".section";const i=window.fp_utils.index(document.querySelector(t+".active")),o=document.querySelector(t+".active "+e+".active"),n=o?window.fp_utils.index(o):-1;this.destroy(),i>-1&&window.fp_utils.addClass(document.querySelectorAll(t)[i],"active"),n>-1&&window.fp_utils.addClass(o,"active"),this.init()},destroy(){typeof window.fullpage_api<"u"&&typeof window.fullpage_api.destroy<"u"&&window.fullpage_api.destroy("all")},emitEvent(e,t){this.$emit(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),...t),Object.prototype.hasOwnProperty.call(this.options,e)&&this.options[e].apply(this,t)},init(){this.api=new fullpage(this.$refs.fullpage,this.options)}}},r={ref:"fullpage"};function c(e,t,i,o,n,f){return s.openBlock(),s.createElementBlock("div",r,[s.renderSlot(e.$slots,"default")],512)}const p=d(a,[["render",c]]),u={install(e){e.component("FullPage",p)}};module.exports=u;
