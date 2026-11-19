const APPID = tt.getEnvInfoSync().microapp.appId

Page({
  onLoad(query) {
    tt.login({
      success: res => {
        tt.request({
          url: 'https://admin.one.work/douyin/douyin_users',
          method: 'POST',
          header: {
            Accept: 'application/json'
          },
          data: {
            code: res.code,
            anonymousCode: res.anonymousCode,
            isLogin: res.isLogin,
            appid: APPID
          },
          success: res => {
            tt.redirectTo({
              url: `/pages/index/index?auth_token=${res.data.auth_token}`,
              fail: res => {
                console.debug('nav back fail', res)
              },
              success: _res => {
                console.debug('nav back success', res.data)
              }
            })
          },
          fail: res => {
            let content = JSON.stringify(res)
            if (res.errno === 600002) {
              content = `${res.errMsg}：${url}`
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
