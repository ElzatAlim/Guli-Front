import request from '@/utils/request'


const api_name = '/eduservice/chapter'
// POST /eduservice/course/addCourseInfo
export default {
  //根据课程id获取所有客户才能
  getAllChapterVideo(courseid) {
    return request({
      url: `${api_name}/getChapterVideo/${courseid}`,
      method: 'get'
    })
  },
  saveOrUpdateChapter(list,courseid) {
    return request({
      url: `${api_name}/saveOrUpdateChapter/${courseid}`,
      method: 'post',
      data: list
    })
  }
}
