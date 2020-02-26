//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   imgUrsl:[],
   itemNew:[],
   activityList:[],
   menus: [],
   parameter:{
     'navbar':'0',
     'return':'0'
   },
   window: false,
   iShidden:false,
   navH: ""
  },
  /*事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  */

  /**
   * 事件处理函数 --
   */
  closeTip : function(){
    res=wx.setStorageSync('msg_key',true);
    console.log(res.data)
    this.setData({
      iShidden:true
    })
  },
  onLoad: function () {
   },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
