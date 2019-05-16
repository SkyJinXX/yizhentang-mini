Page({

  data: {

  },
  onLoad: function (options) {
    console.log(options);
  },
  order: function () {
    wx.navigateTo({ url: '../order/order?status=community' });
  }
})