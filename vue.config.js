const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
});
// vue.config.js module. exports = { devServer: { overlay: { warnings: true, errors: true } } }
// vue.config.js module. exports = { lintOnSave: process. NODE_ENV !== 'production' }