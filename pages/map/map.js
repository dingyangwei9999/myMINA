Page({
  data: {
    text: '你的地理位置',
    model: '',
    pixelRatio: '',
    windowWidth: '',
    windowHeight: '',
    language: '',
    version: '',
    platform: '',
    system: ''
  
  
  
  },
  onLoad: function () {
    var that = this;

  
  wx.getLocation({
    type: 'wgs84',
    success: function (res) {
      var latitude = res.latitude
      var longitude = res.longitude
      var speed = res.speed
      var accuracy = res.accuracy
    }
  })
  }
})
