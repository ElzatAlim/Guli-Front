import request from '@/utils/request'


const api_name = '/eduservice/video'
// POST /eduservice/course/addCourseInfo
export default {
  //根据课程id获取所有客户才能
  getAllVideo(courseid) {
    return request({
      url: `${api_name}/getChapterVideo/${courseid}`,
      method: 'get'
    })
  },
  //修改小节
  updateVideo(eduVideo) {
    return request({
      url: `${api_name}/updateVideo`,
      method: 'post',
      data: eduVideo
    })
  },
  //删除
  removeById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  },
  //删除
  deleteAliyunvod(id) {
    return request({
      url: `/eduvod/video/removeAlyVideo/${id}`,
      method: 'delete'
    })
  }


}
