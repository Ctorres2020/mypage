import React,{useState, useEffect} from 'react';
import './AddEditCourseForm.scss';
import { Form, Input, Button, notification } from 'antd';
import {KeyOutlined, GiftOutlined, DollarOutlined, LinkOutlined} from '@ant-design/icons';
import {getAccessTokenApi} from '../../../../api/auth';
import { addCourseApi, updateCourseApi } from '../../../../api/courses';

export default function AddEditCourseForm(props) {

    const {setIsVisibleModal, setReloadCourse, course} = props;
    const [courseData, setCourseData] = useState({});

    useEffect(() => {
        course ? setCourseData(course) : setCourseData({})
    }, [course])


    const addCourse = e => {
        e.preventDefault()

        if (!courseData.idCourse) {
            notification["error"]({
                message: "El id del curso es obligatorio"
            })
        } else {
            const accessToken = getAccessTokenApi();

            addCourseApi(accessToken, courseData)
                .then(response => {
                    const typeNotification = response.code === 200 ? "success" : "warning"
                    notification[typeNotification]({
                        message: response.message
                    })
                    setIsVisibleModal(false)
                    setReloadCourse(true)
                    setCourseData({})
                })
                .catch(() => {
                    notification["error"]({
                        message: "Error del servidor"
                    })
                })
        }
    }

    const updateCourse = e => {
        e.preventDefault()

        const accessToken = getAccessTokenApi()

        updateCourseApi(accessToken, course._id, courseData)
            .then(response => {
                const typeNotification = response.code === 200 ? "success" : "warning"
                notification[typeNotification]({
                    message: response.message
                })
                setIsVisibleModal(false)
                setReloadCourse(true)
                setCourseData({})
            })
            .catch(() => {
                notification["error"]({
                    message: "Error del servidor"
                })
            })
    }


  return (
    <div className='add-edit-course-form'>
        <AddEditForm
            course={course}
            addCourse={addCourse}
            updateCourse={updateCourse}
            courseData={courseData}
            setCourseData={setCourseData}
        />
    </div>
  )
}

function AddEditForm(props) {
    const {course, addCourse, updateCourse, courseData, setCourseData} = props;

    return (
        <Form className='form-add-edit' onSubmitCapture={course ? updateCourse : addCourse}>
            <Form.Item>
                <Input
                    prefix={<KeyOutlined />}
                    placeholder="ID del curso"
                    value={courseData.idCourse}
                    disabled={course ? true : false}
                    onChange={e => setCourseData({...courseData, idCourse: e.target.value})}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LinkOutlined />}
                    placeholder="Link del curso"
                    value={courseData.link}
                    onChange={e => setCourseData({...courseData, link: e.target.value})}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<GiftOutlined />}
                    placeholder="Cupón de descuento"
                    value={courseData.coupon}
                    onChange={e => setCourseData({...courseData, coupon: e.target.value})}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<DollarOutlined />}
                    placeholder="Precio del curso"
                    value={courseData.price}
                    onChange={e => setCourseData({...courseData, price: e.target.value})}
                />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit' className='btn-submit'>
                    {course ? "Actualizar Curso" : "Crear Curso"}
                </Button>
            </Form.Item>
        </Form>
    )
}