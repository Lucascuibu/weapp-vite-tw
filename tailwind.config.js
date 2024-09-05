/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['**/*.{js,ts,wxml}', '!node_modules/**', '!dist/**'],
  // 假如你使用 ts 模板，则可以使用下方的配置
  content: ['miniprogram/**/*.{ts,js,wxml}'],
  corePlugins: {
    // 小程序不需要 preflight，因为这主要是给 h5 的，如果你要同时开发小程序和 h5 端，你应该使用环境变量来控制它
    preflight: false
  }
}