import request from '@/utils/request'

const api = {}
api.install = Vue => {
  Vue.prototype.getQdysjList = function (data) {
    return request({
      url: '/pc/area/getAll',
      method: 'post',
      data
    })
  }
}
export default api
