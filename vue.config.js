const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://api.github.com/repos/kurong99/kurong99.github.io/contents/pic/03d050acd661fc087249e7671b9ad528.png',
  //       pathRewrite: {'^/api': ''},
  //       ws: true,
  //       changeOrigin: true
  //     },
  //   }
  // }
})
