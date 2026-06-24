const AUTH_HOST = 'https://shu.ren'
const APPID = tt.getEnvInfoSync().microapp.appId

Page({
  onLoad(query) {
    console.debug('login onLoad query:', query)

    tt.login({
      success: res => {
        tt.request({
          url: AUTH_HOST + '/douyin/douyin_users',
          method: 'POST',
          header: {
            Accept: 'application/json'
          },
          data: {
            code: res.code,
            anonymousCode: anonymousCode,
            isLogin: res.isLogin,
            appid: APPID,
            ...query
          },
          success: res => {
            tt.redirectTo({
              url: `/pages/index/index?url=${encodeURIComponent(res.data.url)}`
            })
          },
          fail: res => {
            let content = JSON.stringify(res)
            if (res.errno === 600002) {
              content = `${res.errMsg}：${AUTH_HOST}`
            }
            tt.showModal({
              title: `Login page login request fail`,
              content: content
            })
          }
        })
      },
      fail: res => {
        tt.showModal({
          title: 'wx.login fail',
          content: JSON.stringify(res)
        })
      }
    })
  }
})
