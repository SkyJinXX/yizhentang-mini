const app = getApp()
const util = require('../../utils/util')

Page({
  data: {
    timestamp: '刚刚',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    messages: [],
    message: ''
  },
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }

    this.setData({
      timestamp: util.formatTime(new Date())
    })
  },
  getInput: function (e) {
    this.setData({
      message: e.detail.value
    })
  },
  addToMessages: function (e) {
    this.data.messages.push(this.data.message);
    this.setData({
      messages: this.data.messages,
      text: ''
    })
  }
})