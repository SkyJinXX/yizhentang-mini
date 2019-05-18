Page({
  data: {
    test: [
      {
        question: '您容易疲乏吗？',
        answer: [
          '是',
          '否'
        ]
      },
      {
        question: '您容易感冒吗？',
        answer: [
          '是',
          '否'
        ]
      },
      {
        question: '您比一般人受不了寒冷（冬天冷和夏天空调）吗？',
        answer: [
          '是',
          '否'
        ]
      },
      {
        question: '您食生冷食物后容易腹泻吗？',
        answer: [
          '是',
          '否'
        ]
      },
      {
        question: '您感到手心发热吗？',
        answer: [
          '是',
          '否'
        ]
      },
      {
        question: '您便秘或大便干燥吗？',
        answer: [
          '是',
          '否'
        ]
      },
      {
        question: '您皮肤时常有油脂分泌吗？',
        answer: [
          '是',
          '否'
        ]
      },
      {
        question: '您大便不爽、黏腻吗？',
        answer: [
          '是',
          '否'
        ]
      },
      {
        question: '您带下色黄（白带颜色发黄）吗？',
        answer: [
          '是',
          '否'
        ]
      },
      {
        question: '您感到口苦或者口里有异味吗？',
        answer: [
          '是',
          '否'
        ]
      },
      {
        question: '您经期有血块排出吗？',
        answer: [
          '是',
          '否'
        ]
      },
      {
        question: '您身上有哪里疼痛吗？',
        answer: [
          '是',
          '否'
        ]
      },
      {
        question: '您胁肋部或乳房胀痛吗？',
        answer: [
          '是',
          '否'
        ]
      },
      {
        question: '您无缘无故叹气吗？',
        answer: [
          '是',
          '否'
        ]
      },
      {
        question: '您容易过敏吗？',
        answer: [
          '是',
          '否'
        ]
      },
      {
        question: '您的皮肤一抓就红，并出现抓痕吗？',
        answer: [
          '是',
          '否'
        ]
      },
      {
        question: '您产后乳量较少或无乳液排出吗？',
        answer: [
          '是',
          '否'
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