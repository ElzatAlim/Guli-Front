import request from '@/utils/request'


const api_name = '/eduservice/course'
// POST /eduservice/course/addCourseInfo
export default {
  saveCourseInfo(courseInfo) {
    return request({
      url: `${api_name}/addCourseInfo`,
      method: 'post',
      data: courseInfo
    })
  },
  //查询所有的教师
  getListTeacher(){
    return request({
      url: `/eduservice/teacher/findAll`,
      method: 'get'
    })
  },
  //查询课程信息
  getCourseInfo(courseId){
    return request({
      url: `${api_name}/getCourseInfo/`+courseId,
      method: 'get'
    })
  },
  //查询课程信息
  updateCourseInfo(courseInfo){
    return request({
      url: `${api_name}/updateCourseInfo`,
      method: 'post',
      data: courseInfo
    })
  },
  //查询课程信息
  getPublishCourseInfo(courseId){
    return request({
      url: `${api_name}/getPublishCourseInfo/`+courseId,
      method: 'get'
    })
  },
  //课程最终发布
  publishCourse(courseId){
    return request({
      url: `${api_name}/publishCourse/`+courseId,
      method: 'post'
    })
  },
  // current 当前页    limit ，每页记录数  TeacherQuery 查询条件
  getCourseListPage(current,limit,courseQuery){
    return request({
      // url: '/table/list'/+current+"/"limit,
      url: `${api_name}/getCourseList/${current}/${limit}`,
      method: 'post',
      //条件的对象  后端使用RequestBody来获取数据 所以用data  表示  把对象转换成json 在进行传递
      data: courseQuery
    })
  },
  deleteCourseById(id){
  return request({
    url: `${api_name}/${id}`,
    method: 'delete'
  })
},

}
