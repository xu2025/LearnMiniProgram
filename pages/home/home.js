//将变量联动到显示内容中
Page({
data:{
  name: 'Coderwhy',
  age: 18,
  students: [
    { id: 110, name: 'kobe', age: 30 },
    { id: 111, name: 'james', age: 28 },
    { id: 112, name: 'rose', age: 31 },
    { id: 113, name: 'why', age: 18 }
  ],
  counter:0
},
handleBtnClick(){
  //1.错误做法：界面是不会刷新的
  //this.data.counter +=1
  //console.log(this.data.counter)

  //2.this.setData()
  this.setData({
    counter: ++this.data.counter
  })
},
handleSubtract(){
this.setData({
  counter: --this.data.counter
})
}
})