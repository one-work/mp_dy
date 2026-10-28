const APPID = tt.getEnvInfoSync().microapp.appId

Page({
  onLoad(query) {
    console.debug('login onLoad query:', query)
    const url = decodeURIComponent(query.url)

    tt.login({
      success: res => {
        tt.request({
          url: url,
          method: 'POST',
          header: {
            Accept: 'application/json'
          },
          data: {
            code: res.code,
            anonymousCode: res.anonymousCode,
            isLogin: res.isLogin,
            appid: APPID,
            ...query
          },
          success: response => {
            tt.setStorageSync('url', response.data.url)
            tt.navigateBack({
              fail: res => {
                tt.removeStorageSync('url')
                console.debug('nav back fail', res)
              },
              success: res => {
                console.debug('nav back success', response.data)
              }
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
          title: '登录失败',
          content: JSON.stringify(res)
        })
      }
    })
  }
})
