const app = getApp()

Page({
    data: {
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
              userInfo: app.globalData.userInfo,
              hasUserInfo: true
            })
        } else if (this.data.canIUse){
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                userInfo: res.userInfo,
                hasUserInfo: true
                })
            }
        }
    },
    navigateTo: e => {
      let pageSrc = `../${e.currentTarget.id}/${e.currentTarget.id}`;
      wx.navigateTo({ url: pageSrc });
    },
  })