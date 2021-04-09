import request from '@/utils/request'

export default {
  //1,讲师分页列表
  // current 当前页    limit ，每页记录数  TeacherQuery 查询条件
  pageListBanner(current,limit){
    return request({
      // url: '/table/list'/+current+"/"limit,
      url: `/educms/banneradmin/pageBanner/${current}/${limit}`,
      method: 'get',
    })
  },
  removeBanner(id){
    return request({
      url: `/educms/banneradmin/remove${id}`,
      method: 'delete'
    })
  },
  addBanner(banner){
    return request({
      url: `/educms/banneradmin/addBanner`,
      method: 'post',
      data: banner
    })
  },
  getBanner(id) {
    return request({
      url: `/educms/banneradmin/geTBanner/${id}`,
      method: 'get'
    })
  },
  updateBanner(banner){
    return request({
      url: `/educms/banneradmin/update`,
      method: 'post',
      data: banner
    })
  }
}

