Page({
  onLoad(options) {
    const headers = {}
    if (options.auth_token) {
      Object.assign(headers, {
        Authorization: options.auth_token
      })
    }
    console.debug('index options', options)
    tt.request({
      url: 'https://admin.one.work/me',
      header: {
        Accept: 'application/json',
        ...headers
      },
      success: res => {
        console.debug(res)
        if (res.statusCode === 401) {
          tt.navigateTo({
            url: '/pages/login_index/index?url=https://admin.one.work/douyin/douyin_users'
          })
        } else {
          this.setData({ 
            res: res.data
          })
        }
      },
      fail: res => {
        console.debug(res)
      }
    })
  }
})
