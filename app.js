App({

  onLaunch: function () {    
  },
  onShow: function (options) {
    //1.判断小程序的进入场景
    console.log(options)
    switch(options.scene){
      case 1001:
      break;
      case 1005:
      break;
    }
    //2.获取用户信息，并且传递给服务器
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })    
  },
  onHide: function () {
  },
  onError: function (msg) {
    
  },
  globalData:{
    name:'coderwhy',
    age: 18
  }
})
