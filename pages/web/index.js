const app = getApp()
const HOST = 'https://shu.ren'

Page({
  onLoad(query) {
    console.debug('index onLoad:', query)
    if (query.url) {
      this.setData({
        url: decodeURIComponent(query.url)
      })
    } else {
      this.setData({
        url: 'https://shu.ren/bench/facilitates'
      })
    }
  },

  onMessage(options) {
    console.debug(options)
    this.login()
  }

})
