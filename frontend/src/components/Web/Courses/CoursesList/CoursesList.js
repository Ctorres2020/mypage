import React,{useState, useEffect} from 'react'
import "./CoursesList.scss";
import { Row, Col, Card, Button, Rate, notification } from 'antd';
import { getAvatarApi } from '../../../../api/courses';



export default function CoursesList(props) {

  const {courses} = props;


  return (
    <div className='courses-list'>
        <Row>
          {courses.map(course => (
            <Col key={course._id} md={8} className='courses-list__course'>
              <Course course={course} />
            </Col>
          ))}
        </Row>
    </div>
  )
}

function Course(props) {

  const { course } = props;
  const [courseInfo, setCourseInfo] = useState({});
  const [urlCourse, setUrlCourse] = useState("");
  const [avatar, setAvatar] = useState(null)
  const {Meta} = Card

  console.log(course);

  useEffect(() => {
    getAvatarApi(course.avatar)
        .then(response => {
        setAvatar(response);
      })

    setCourseInfo(course)
    mounUrl(course.link)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course])

  const mounUrl = url => {
    if (!course.link) {
      const baseUrl = `https://cesartorresdigital.com`
      setUrlCourse(baseUrl)
    } else {
      setUrlCourse(url)
    }
  }


  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href={urlCourse} target="_blank" rel="noreferrer">
      <Card
        cover={<img src={avatar} alt={courseInfo.title} />}
      >
        <Meta title={courseInfo.title} />
        <Button>Entrar en el curso</Button>
        <div className='courses-list__course-footer'>
          <span>{course.price ? `${course.price} $` : courseInfo.price}</span>
          <div>
              <Rate disabled defaultValue={5} />
          </div>
        </div>
      </Card>
    </a>
  )
}