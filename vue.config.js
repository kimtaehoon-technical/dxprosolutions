const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/', // 또는 상대경로 './' 로 설정 (경우에 따라 다름)
})
