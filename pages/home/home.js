// pages/home/home.js
// getApp()获取app中产生的示例对象
const app= getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)

Page({

//------------------1.监听生命周期函数------------
//页面被加载出来
onLoad() {
  console.log('onLoad')
  //wx.request({
  //  url:'http://123.207.32.32:8000/recommend',
  //  success:(res) => {
  //    console.log(res)
  //    const data = res.data.data.list;
  //    this.setData({
  //      list: data
  //    })
  //  }
  //  })
},
//页面初次渲染完成
onReady() {
  console.log('onReady')
},
//页面显示出来
onShow() {
  console.log('onShow')
},
//
onHide() {
  console.log('onHide')
},
onUnload() {
  console.log('onUnload')
},

  data: {
    message: '奇哥牛逼，屌炸了',
    list: []
  },
  //-------3.监听wxml中相关的一些时间----------
  handleGetUserInfo(event) {
    console.log(event)
  },
  handleViewClick() {
    console.log('666666')
  },
  //-------4.其他事件的监听，监听页面的滚动--------
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部')
  },
  onPullDownRefresh(){
    console.log('下拉刷新')
  }
})