var app = getApp().global;
Page({
    data: {
      list: "",

    },
  onShow: function () {
    var that=this;
    wx.showToast({ title: '加载中', icon: 'loading', duration: 1000 })
    this.data.list=app.json,
    this.setData({list:app.json})
  
  },
  


  
})
