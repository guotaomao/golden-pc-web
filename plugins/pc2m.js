/* eslint-disable */
const browser = {
    versions: function () {
      let u = navigator.userAgent, app = navigator.appVersion
      return {
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1 , // 是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1 // 是否iPad
      }
    }()
  }
  
  if (browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad) {
    window.location.href = 'https://m.goldentec.com/'
  }
  