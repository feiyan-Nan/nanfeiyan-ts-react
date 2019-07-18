const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')
const path = require('path')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {}, // 覆盖 less 变量
  }),
  // 配置路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  })
);