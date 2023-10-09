const { defineConfig } = require("@vue/cli-service");
const webpack = require('webpack');
// const packageJson = fs.readFileSync("./package.json");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  // plugins: [
  //   new webpack.DefinePlugin({
  //     // "process.env": {
  //     //   PACKAGE_VERSION: '"' + version + '"',
  //     // },
  //   }),
  // ],
  lintOnSave: false,
});
