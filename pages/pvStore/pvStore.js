Page({
  data: {

  },
  onLoad: function (options) {

  },
  exchange: function () {
    wx.showModal({
      title: '提示',
      content: '积分不足',
      showCancel: false,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})