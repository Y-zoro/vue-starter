import axios from 'axios'
import {
  invalidCode,
  messageDuration,
  noPermissionCode,
  requestTimeout,
  successCode,
  contentType
} from '@/config/settings'
import { Loading, Message } from 'element-ui'
import qs from 'qs'
import router from '@/router'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: requestTimeout,
  headers: {
    'Content-Type': contentType
  }
})
let loadingInstance
service.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV !== 'test') {
      if (contentType === 'application/x-www-form-urlencoded;charset=UTF-8') {
        if (config.data && !config.data.param) {
          config.data = qs.stringify(config.data)
        }
      }
    }

    if (
      config.url.includes('add') ||
      config.url.includes('edit') ||
      config.url.includes('set') ||
      config.url.includes('update') ||
      config.url.includes('import') ||
      config.url.includes('export')
    ) {
      loadingInstance = Loading.service()
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

const errorMsg = (message) => {
  return Message({
    message: message,
    type: 'error',
    duration: messageDuration
  })
}

service.interceptors.response.use(
  (response) => {
    if (loadingInstance) {
      loadingInstance.close()
    }
    const { data } = response
    const { status, message } = data
    if (status !== successCode && status !== 0) {
      switch (status) {
        case invalidCode:
          errorMsg(message || `后端接口${status}异常`)
          break
        case noPermissionCode:
          router.push({
            path: '/401'
          })
          break
        default:
          errorMsg(message || `后端接口${status}异常`)
          break
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ status, message } || 'Error')
    } else {
      return data
    }
  },
  (error) => {
    if (loadingInstance) {
      loadingInstance.close()
    }
    /* 网络连接过程异常处理 */
    let { message } = error
    switch (message) {
      case 'Network Error':
        message = '后端接口连接异常'
        break
      case 'timeout':
        message = '后端接口请求超时'
        break
      case 'Request failed with status code':
        message = '后端接口' + message.substr(message.length - 3) + '异常'
        break
    }
    errorMsg(message || '后端接口未知异常')
    return Promise.reject(error)
  }
)
export default service
