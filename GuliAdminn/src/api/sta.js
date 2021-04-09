import request from '@/utils/request'

export default {
  //1,生成统计数据
  // current 当前页    limit ，每页记录数  TeacherQuery 查询条件
  registerCount(day){
    return request({
      // url: '/table/list'/+current+"/"limit,
      url: `/staservice/sta/registerCount/${day}`,
      method: 'post',
    })
  },
  showDate(begin,end){
    return request({
      // url: '/table/list'/+current+"/"limit,
      url: `/staservice/sta/showDate/${begin}/${end}`,
      method: 'get',
    })
  },
}

