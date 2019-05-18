Page({
  data: {
    test: [
      {
        question: '我感到开心，并能看到事物有趣的一面',
        answer: [
          '像以前一样——0 分',
          '不如以前多——1 分',
          '明显比以前少——2 分',
          '完全不能——3 分'
        ]
      },
      {
        question: '我对未来保持乐观态度',
        answer: [
          '像以前一样——0 分',
          '不如以前多——1 分',
          '明显比以前少——2 分',
          '完全不能——3 分'
        ]
      },
      {
        question: '当事情出错时，我会对自己产生不必要的责备',
        answer: [
          '大多数时候这样——3 分',
          '有时候这样——2 分',
          '很少这样——1 分',
          '从不这样——0 分'
        ]
      },
      {
        question: '我无缘无故感到焦虑和担心',
        answer: [
          '从来没有——0 分',
          '偶尔这样——1 分',
          '有时候这样——2 分',
          '经常这样——3 分'
        ]
      },
      {
        question: '我无缘无故感到惊慌和害怕',
        answer: [
          '经常这样——3 分',
          '有时候这样——2 分',
          '偶尔这样——1 分',
          '从来没有——0 分'
        ]
      },
      {
        question: '很多事情冲着我来，我无法应付',
        answer: [
          '大多数时候都是——3 分',
          '有时候会这样——2 分',
          '很少这样——1 分',
          '从不这样——0 分'
        ]
      },
      {
        question: '我很不开心，以至于影响睡眠',
        answer: [
          '大多数时候这样——3 分',
          '有时候这样——2 分',
          '偶尔这样 ——1 分',
          '从不这样——0 分'
        ]
      },
      {
        question: '我感到难过和悲伤',
        answer: [
          '大多数时候这样——3 分',
          '有时候这样 ——2 分',
          '偶尔这样 ——1 分',
          '从不这样 ——0 分'
        ]
      },
      {
        question: '我因为心情不好而哭泣',
        answer: [
          '大多数时候这样——3 分',
          '有时候这样 ——2 分',
          '偶尔这样 ——1 分',
          '从不这样 ——0 分'
        ]
      },
      {
        question: '我有伤害自己的想法',
        answer: [
          '经常这样——3 分',
          '有时候这样——2 分',
          '偶尔这样——1 分',
          '从来没有——0 分'
        ]
      },

    ],
    currentIndex: 0,
    finished: false,
    checked: false
  },
  onLoad: function (options) {

  },
  save: function () {
    wx.showToast({
      title: '保存',
      icon: 'success',
      duration: 2000
    })
  },
  next: function () {
    if (this.data.currentIndex == this.data.test.length -1) {
      this.setData({
        finished: true
      })
    }
    if (this.data.currentIndex < this.data.test.length -1) {
      this.setData({
        currentIndex: ++this.data.currentIndex
      })
    }

    this.setData({
      checked: false
    })
  }
})