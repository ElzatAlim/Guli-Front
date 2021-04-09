import request from '@/utils/request'

export default {
  //1,讲师分页列表
  // current 当前页    limit ，每页记录数  TeacherQuery 查询条件
  findAll(){
    return request({
      url: `/eduservice/teacher/findAll`,
      method: 'get',
    })
  },
  getTeacherListPage(current,limit,TeacherQuery){
    return request({
      // url: '/table/list'/+current+"/"limit,
      url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
      method: 'post',
      //条件的对象  后端使用RequestBody来获取数据 所以用data  表示  把对象转换成json 在进行传递
      data: TeacherQuery
    })
  },
  deleteTeacherById(id){
    return request({
      url: `/eduservice/teacher/${id}`,
      method: 'delete'
    })
  },
  addTeacher(teacher){
    return request({
      url: `/eduservice/teacher/addTeacher`,
      method: 'post',
      data: teacher
    })
  },
  getTeacherInfo(id) {
    return request({
      url: `/eduservice/teacher/getTeacher/${id}`,
      method: 'get'
    })
  },
  updateTeacherInfo(teacher){
    return request({
      url: `/eduservice/teacher/updateTeacher`,
      method: 'post',
      data: teacher
    })
  }
}

