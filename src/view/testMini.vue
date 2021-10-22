<template>
	<div class="">
<wx-open-launch-weapp
        id="launch-btn"
        username="gh_dbbb75b596c6"
        path="/pages/home/home">
				点击
    <script type="text/wxtag-template">
        <button class="btn">打开小程序</button>
    </script>
</wx-open-launch-weapp>
	</div>
</template>

<script>

	export default{
		name: 'testMini',
		data(){
			return{
				
			}
		},
		components: {
		    },
		created () {
		this.setShare();
		var btn = document.getElementById('launch-btn');
		  btn.addEventListener('launch', function (e) {
		    alert('success');
		  });
		  btn.addEventListener('error', function (e) {
		    alert('fail', e.detail);
		  });
		},

		methods:{
			// 微信分享
			setShare(){//
					this.$axios({
						method:"get",
						url:"https://m.sz.centanet.com/partner/weixin/jssdkjsonp?url=" + encodeURIComponent(location.href)
					})
					.then(res=>{
						let data=JSON.parse(res.data.replace('(','').replace(')',''));
						if (data) {
						    wx.config({
						        debug: false,
						        appId: data.AppId,
						        timestamp: data.Timestamp,
						        nonceStr: data.NonceStr,
						        signature: data.Signature,
						        jsApiList: ["startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "translateVoice", "getNetworkType", "openLocation", "getLocation"],//必须要不调用小程序标签渲染不出来
						        openTagList: ['wx-open-launch-weapp']//必须必须要不调用小程序标签渲染不出来
						    });
						    wx.ready(function () {
									
						        //分享好友
						        // wx.updateAppMessageShareData({ 
						        //     title: shareObj.title,
						        //     desc: shareObj.desc,
						        //     link: shareObj.link,
						        //     imgUrl: shareObj.imgUrl,
						        //     success: function () {
						        //       // 设置成功
						        //     }
						        //   });
						        // //分享朋友圈
						        // wx.updateTimelineShareData({
						        //    title: shareObj.title,
						        //    desc: shareObj.desc,
						        //    link: shareObj.link,
						        //    imgUrl: shareObj.imgUrl,
						        //    success: function () {
						        //      // 设置成功
						        //    }
						        //  });
						    });
						    wx.error(function (res) {});
						}
					})
			},
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
