Page({
  data: {

  },
  onLoad: function (options) {

  },
  addCart: function () {
    wx.showToast({
      title: '已加购',
      icon: 'success',
      duration: 2000
  })
  }
})