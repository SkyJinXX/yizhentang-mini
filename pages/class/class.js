Page({
  data: {

  },
  onLoad: function (options) {

  },
  submit: function () {
    wx.showModal({
      title: '敬请期待',
      content: '下次报名开放时间为6月5日',
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