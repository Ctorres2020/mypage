import React, {useState, useEffect} from 'react';
import {Row, Col, Spin, notification} from 'antd';
import {getCoursesApi} from '../api/courses';
import CoursesList from '../components/Web/Courses/CoursesList/CoursesList'
import PresentationCourses from '../components/Web/Courses/PresentationCourses/PresentationCourses'

export default function Courses() {

  const [courses, setCourses] = useState(null);

  // console.log(courses);

  useEffect(() => {
    getCoursesApi()
      .then(response => {
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message
          })
        } else {
          setCourses(response.courses)
        }
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor"
        })
      })
  }, [])


  return (
    <Row>
      <Col md={4} />
      <Col md={16}>
        <PresentationCourses />

          {!courses ? (
            <Spin
              tip="Cargando cursos"
              style={{ textAlign: "center", width: "100%", padding: "20px"}}
            />
          ) : (
            <CoursesList courses={courses} />
          )}
      </Col>
      <Col md={4} />
    </Row>
  )
}
