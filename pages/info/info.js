Page({
  data: {
    text: '以下是您的移动设备信息',
    model:'',
    pixelRatio:'',
    windowWidth:'',
    windowHeight:'',
    language:'',
    version:'',
    platform:'',
    system:''
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
        console.log(res.system)
        that.setData({
          model: res.model,
          pixelRatio: res.pixelRatio,
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,
          language: res.language,
          version: res.version,
          platform: res.platform,
          platform: res.system,
        });  
      }
    });
  }
})