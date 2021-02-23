module.exports = {
  title: 'Vue-启动项目', // 标题
  devPort: '8080', // 开发环境端口号
  routesWhiteList: ['/login', '/404', '/401'], // 不经过token校验的路由
  loadingText: '正在加载中...', // 加载时显示文字
  tokenName: 'accessToken', // token名称
  storage: 'localStorage', // token存储位置
  messageDuration: 3000, // 消息框消失时间
  requestTimeout: 5000, // 最长请求时间
  successCode: 200, // 操作正常code
  invalidCode: 402, // 登录失效code
  noPermissionCode: 401, // 无权限code
  pcTarget: 'http://10.10.22.151:8080',
  contentType: 'application/json;charset=UTF-8' // 配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
}
