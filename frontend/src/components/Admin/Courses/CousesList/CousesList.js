import React, {useState, useEffect} from 'react';
import './CousesList.scss';
import {Button, List, Modal as ModalAntd, notification} from 'antd';
import {EditOutlined,DeleteOutlined} from '@ant-design/icons';
import DragSortableList from 'react-drag-sortable';
import Modal from '../../../Modal';
import AddEditCourseForm from '../AddEditCourseForm/AddEditCourseForm';
import {deleteCourseApi, getAvatarApi, updateCourseApi} from '../../../../api/courses';
import {getAccessTokenApi} from '../../../../api/auth';


const {confirm} = ModalAntd;

export default function CoursesList(props) {

    const {courses, setReloadCourses} = props;
    const [ListCourses, setListCourses] = useState([]);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    useEffect(() => {
     const listCoursesArray = [];
     courses.forEach(course => {
        listCoursesArray.push({
            content: (
                <Course
                    course={course}
                    deleteCourse={deleteCourse}
                    editCourseModal={editCourseModal}
                />
            )
        })
     });
     setListCourses(listCoursesArray)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [courses])

    const onSort = (sortedList, dropEvent) => {
        const accessToken = getAccessTokenApi();

        sortedList.forEach(item => {
            const {_id} = item.content.props.course;
            const order = item.rank;

            updateCourseApi(accessToken, _id, {order})
        })
    }


    const addCourseModal = () => {
        setIsVisibleModal(true)
        setModalTitle("Creando nuevo curso")
        setModalContent(
            <AddEditCourseForm
                setIsVisibleModal={setIsVisibleModal}
                setReloadCourses={setReloadCourses}
            />
        )
    }

    const editCourseModal = course => {
        setIsVisibleModal(true)
        setModalTitle("Actualizando curso")
        setModalContent(
            <AddEditCourseForm
                setIsVisibleModal={setIsVisibleModal}
                setReloadCourses={setReloadCourses}
                course={course}
            />
        )
    }

    const deleteCourse = course => {
        const AccessToken = getAccessTokenApi();

        confirm({
            title: "Eliminando curso",
            content: `Estas seguro de eliminar ${course.idCourse}`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
                deleteCourseApi(AccessToken, course._id)
                    .then(response => {
                        const typeNotification = response.code === 200 ? 'success' : "warning"
                        notification[typeNotification]({
                            message: response.message
                        })
                        setReloadCourses(true)
                    })
                    .catch(() => {
                        notification["error"]({
                            message: "Error del servidor"
                        })
                    })
            }
        })
    }

  return (
    <div className='courses-list'>
        <div className="courses-list__header">
            <Button type='primary' onClick={addCourseModal}>
                Nuevo Curso
            </Button>
        </div>
        <div className="courses-list__items">
            {ListCourses.length === 0 && (
                <h2 style={{textAlign: "center", margin: 0}}>No tienes cursos creados</h2>
            )}
            <DragSortableList items={ListCourses} onSort={onSort} type="Vertical" />
        </div>

        <Modal
            title={modalTitle}
            isVisible={isVisibleModal}
            setIsVisible={setIsVisibleModal}
        >
            {modalContent}
        </Modal>
    </div>
  )
}

function Course(props) {
    const {course, deleteCourse, editCourseModal} = props;
    const [courseData, setCourseData] = useState(null);
    const [avatar, setAvatar] = useState(null)


    
    useEffect(() => {
        getAvatarApi(course.avatar)
            .then(response => {
                setAvatar(response);
            })
        setCourseData(course);
    }, [course])

    if (!courseData) {
        return null
    }

    return (
        <List.Item
            actions={[
                <Button type='primary' onClick={() => editCourseModal(course)}>
                    <EditOutlined />
                </Button>,
                <Button type='primary' onClick={() =>deleteCourse(course)}>
                    <DeleteOutlined />
                </Button>
            ]}
        >
            <img
                src={avatar}
                alt={courseData.title}
                style={{width: "100px", marginRight: "20px"}}
            />
            <List.Item.Meta
                title={`${courseData.title} | ID: ${course.idCourse}`}
            />
        </List.Item>
    )
}