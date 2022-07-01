const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 3000,
    proxy: {
      'api': {
        target: 'http://localhost:8080'
      }
    }
  },
  transpileDependencies: true,
  lintOnSave: false
})
