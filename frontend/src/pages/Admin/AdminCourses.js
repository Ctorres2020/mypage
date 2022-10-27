import React,{useState, useEffect} from 'react';
import {getCoursesApi} from '../../api/courses';
import CoursesList from '../../components/Admin/Courses/CousesList/CousesList';


export default function AdminCourses() {

    const [courses, setCourses] = useState([]);
    const [reloadCourses, setReloadCourses] = useState(false);

    useEffect(() => {
        getCoursesApi()
            .then(response => {
                setCourses(response.courses)
            })
            setReloadCourses(false)
    },[reloadCourses])

  return (
    <div className='admin-courses'>
        <CoursesList courses={courses} setReloadCourses={setReloadCourses} />
    </div>
  )
}


