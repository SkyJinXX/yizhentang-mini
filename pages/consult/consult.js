Page({
  data: {
    ifShowFull: false
  },
  onLoad: function (options) {

  },
  toggleFull: function () {
    this.setData({
      ifShowFull: !this.data.ifShowFull
    })
  },
  submit: function () {
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 2000
    })
  },
  choose: function () {
    wx.showToast({
      title: '暂无其他科室选择',
      icon: 'none',
      duration: 2000
    })
  }
})