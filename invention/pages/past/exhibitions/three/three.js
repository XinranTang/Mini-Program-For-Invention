// pages/past/exhibitions/three/three.js
Page({

  data: {
    cardCur: 0,
    loadingHidden: true
  },
  onLoad() {

  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  }
})