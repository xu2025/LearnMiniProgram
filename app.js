App({
  //生命周期函数
  onLaunch: function () {
//   wx.getUserInfo({
//     success: function(res) {
//      console.log(res)
    setTimeout(function(){
      const err = new Error()
      throw err
    },3000)
  },
  onShow: function (options) {
    console.log('界面显示出来: OnShow')
  },


  onHide: function () {
    console.log('退出程序时显示出来：onHide')
  },

  onError: function (msg) {
    console.log('小程序错误时显示出来')
  }
})
