const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  assetsDir: "",
  outputDir: "docs",
  devServer: {
    host: "localhost"
  },
  pwa: {
    name: 'お前のパラメーターを決めてやる！',
    themeColor: '#2c3e50',
    msTileColor: '#ffffff',
    manifestOptions: {
      short_name: 'おまパラ'
    }
  }
})
