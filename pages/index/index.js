Page({
  onLoad(options) {
    tt.request({
      url: 'https://admin.one.work/me/douyin',
      header: {
        Accept: 'application/json'
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
