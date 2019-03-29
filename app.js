var json = require('/utils/data.js');
App({
  
  global: {
    json: json.arr
  }  ,

  onLaunch: function () {
    var that = this;
    
    that.json = wx.getStorageSync('json') || that.json;
    that.setlocal('json', that.json);
  },
  setlocal: function (id, val) {
    wx.setStorageSync(id, val);
  },

  

  

})