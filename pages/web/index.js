const app = getApp()
const HOST = 'https://shu.ren'


Page({
  data: {
    url: 'https://shu.ren/bench/facilitates'
  },

  onLoad() {
    console.log('Welcome to Mini Code')
  },

  onMessage(options) {
    console.debug(options)
    this.login()
  }

})
