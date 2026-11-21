// postcss.config.js（放项目根目录）
module.exports = {
  plugins: [
    require('postcss-rem-to-responsive-pixel')(
      {
        rootValue: 32,
        transformUnit: 'rpx',
        propList: ['*'],
        exclude: [],
        mediaQuery: true
      }
    )
  ]
}
