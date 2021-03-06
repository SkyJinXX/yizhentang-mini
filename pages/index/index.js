//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/dumaiEntry.jpg',
      '../../images/healthEntry.jpg'
    ],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    ifShowOA: false,
    ifShowAuth: true
  },
  onLoad: function () {
    // wx.showShareMenu({
    //   fail: e => {
    //     console.log(e);
    //   },
    //   success: e => {
    //     console.log(e);
    //   }
    // });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallbackIndex = res => {
        this.setData({
        userInfo: res.userInfo,
        hasUserInfo: true
        })
      }
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  navigateTo: e => {
    let pageSrc = `../${e.currentTarget.id}/${e.currentTarget.id}`;
    wx.navigateTo({ url: pageSrc });
  },
  showOA: function (e) {
    this.setData({
      ifShowOA: true
    })
  },
  closeOA: function (e) {
    this.setData({
      ifShowOA: false
    })
  },
  closeAuth: function (e) {
    this.setData({
      ifShowAuth: false
    })
  },
  oaError: e => {
    console.log(e);
  },
  test () {
    console.log('test ok');
  }



})
