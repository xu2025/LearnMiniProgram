// pages/wxml/wxml.js
Page({

  data: {
    message:'jjjjj',
    firstname:'kobe',
    lastname:'bryant',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 45,
    movies:['xingjichuanyue','daomengkongjian','dahuaxiyou'],
    num: [
      [1,2,3,4],
      [2,3,4,5],
      [4,5,6,7]
    ],
    letters: ['a', 'b', 'c']
  },
 onLoad(){
   setInterval(()=>{
     this.setData({
       nowTime: new Date().toLocaleString()
     })
   },1000)
 },
 
 handleSwitchColor(){
   this.setData({
     isActive: !this.data.isActive
   })
 },

   handleSwitch(){
     this.setData({
       isShow: !this.data.isShow
     })
   }
})