// audio.js
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    mode: 'scaleToFill',
    imgsrc: './title.png',
    poster: 'http://img2.imgtn.bdimg.com/it/u=2755903885,2829664279&fm=214&gp=0.jpg',
    name: 'Besame Mucho',
    author: 'Andrea Bocelli',
    src: 'http://ws.stream.qqmusic.qq.com/M500001ntYdv4Vzgoz.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})