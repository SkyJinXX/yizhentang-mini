Page({
  data: {
    ifShowFull: false,
    text: ''
  },
  onLoad: function (options) {

  },
  toggleFull: function () {
    this.setData({
      ifShowFull: !this.data.ifShowFull
    })
  },
  submit: function () {
    if (this.data.text) {
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      })
    } else {
      wx.showToast({
        title: '请输入咨询内容',
        icon: 'none',
        duration: 2000
      })
    }
  },
  choose: function () {
    wx.showToast({
      title: '暂无其他科室选择',
      icon: 'none',
      duration: 2000
    })
  },
  getInput: function (e) {
    this.data.text = e.detail.value;
  }
})