const app = getApp()

Page({
    data: {
        status: 'outpatient'
    },
    onLoad: function (options) {
      if (options.status) {
        this.setData({
          status: options.status
        });
      }
      // wx.authorize({scope: 'scope.userLocation'});
    },
    switch: function (e) {
      this.setData({
        status: e.currentTarget.id
      });
    },
    order: function () {
      wx.showToast({
          title: '预约成功',
          icon: 'success',
          duration: 2000
      })
    }
  })