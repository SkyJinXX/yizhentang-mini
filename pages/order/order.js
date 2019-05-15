const app = getApp()

Page({
    data: {
        status: 'outpatient'
    },
    onLoad: function () {
      // wx.authorize({scope: 'scope.userLocation'});
    },
    switch: function (e) {
      this.setData({
        status: e.currentTarget.id
      });
    }
  })