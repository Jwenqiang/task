var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

/**
 * 打开分享弹框
 * @param {Object} shareInfo
 * @param {String} shareInfo.shareTitle  分享标题
 * @param {String} shareInfo.shareDesc   分享描述
 * @param {String} shareInfo.shareImage  分享图片链接地址
 */
export const openShare = ({ shareInfo } = {}) => {
  if (!shareInfo || typeof shareInfo !== 'object') return

  const json = JSON.stringify(shareInfo)
  if (isIOS) {
    window.webkit.messageHandlers.showShareAlert.postMessage(json)
  } else if (isAndroid) {
    window.salehouse.showShareAlert(json)
  }
}

// 调用
// shareObject = {
//   shareTitle: '中原找房送惊喜，下载App赢万元大奖',
//   shareDesc: '有机会赢iPhone12，祝好运！',
//   shareImage: 'https://sz.centanet.com/partner/house/shareImg/app0422.jpg'
// }
// if(navigator.userAgent.indexOf('salehouse-webview') > -1){
// 	openShare({ shareInfo: shareObject })
// }
