import CoursesType from './components/CoursesType/CoursesType'
import Course from './components/Course/Course'
import CourseOffering from './components/CourseOffering/CourseOffering'
import StudentRegistration from './components/Student/StudentRegistration'

function App () {
  return (
    <div className='app'>
      <h1
        style={{ textAlign: "center", marginBottom:"50px" }}
      >
        {"Student Registration Form"}
      </h1>
      <CoursesType />
      <Course />
      <CourseOffering />
      <StudentRegistration />
    </div>
  )
}

export default App