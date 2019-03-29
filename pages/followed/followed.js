var app = getApp().global;
var apps = getApp();
Page({
  data: {
    list: app.json,
    
  },

  add: function (e) {

    var description = e.target.dataset.index;
    var relationship = e.target.dataset.relation;
    var id = e.target.dataset.id;

    description = "已关注";
    var str1 = "list[" + id + "].description"
    var str2 = "list[" + id + "].relationship"
    this.setData({ [str1]: '已关注' });
    this.setData({ [str2]: 2 });

    app.json[id].description = "已关注";//导致了页面传输
    app.json[id].relationship = 2;

    apps.setlocal('json',app.json);
    
    
    
  },
  
  onShow: function () {
    wx.showToast({ title: '加载中', icon: 'loading', duration: 1000 })
  },
  
  
  
  
  
})
