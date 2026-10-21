const app = getApp()
const HOST = 'https://admin.one.work'

Page({
  onLoad(query) {
    console.debug('index onLoad:', query)
    if (query.url) {
      this.setData({
        url: decodeURIComponent(query.url)
      })
    } else {
      this.setData({
        url: 'https://admin.one.work'
      })
    }
  },

  onMessage(options) {
    console.debug(options)
    this.login()
  }
})
