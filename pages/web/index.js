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

  onShow(e) {
    const url = tt.getStorageSync('url')
    tt.removeStorageSync('url')
    if (url) {
      console.debug('页面再次显示', url)
      this.setData({
        url: url
      })
    }
  },

  onMessage(options) {
    console.debug(options)
    this.login()
  }
})
