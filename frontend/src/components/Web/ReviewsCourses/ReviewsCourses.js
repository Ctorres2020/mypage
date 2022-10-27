import React from 'react';
import './ReviewsCourses.scss';
import { Row, Col, Card, Avatar } from 'antd';
import AvatarPersona from '../../../assets/img/jpg/avatar-persona.jpg';


export default function ReviewsCourses() {
  return (
    <Row className='reviews-courses'>
        <Row>
            <Col lg={4} />
            <Col lg={16} className='reviews-courses__title'>
                <h2>Forma parte de los +2 mil estudiantes que estan
                    aprendiendo con los cursos.</h2>
            </Col>
            <Col lg={4} />
        </Row>
        <Row>
            <Col lg={4} />
            <Col lg={16}>
                <Row className='row-cards'>
                    <Col md={8}>
                        <CardReview
                            name="Domi Paredes"
                            subtitle="Alumna del curso de fotografia"
                            avatar={AvatarPersona}
                            review="Excelente el curso de fotografia empece de cero y ahora estoy consiguiendo mucha mejora."
                        />
                    </Col>

                    <Col md={8}>
                        <CardReview
                            name="Angel Andersson"
                            subtitle="Alumna del curso de hidroponia"
                            avatar={AvatarPersona}
                            review="Excelente el curso de hidroponia muestra a detalles los procesos"
                        />
                    </Col>

                    <Col md={8}>
                        <CardReview
                            name="Mariza Aquino"
                            subtitle="Alumna del curso de WhatsApp Tienda"
                            avatar={AvatarPersona}
                            review="Excelente el curso, soy emprendedora y me ayudo mucho, lo recomiendo."
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />

        </Row>
    </Row>
  )
}

function CardReview(props) {
    const {name, subtitle, avatar, review} = props;
    const {Meta} = Card;

    return (
        <Card className='reviews-courses__card'>
            <p>{review}</p>
            <Meta
                avatar={<Avatar src={avatar} />}
                title={name}
                description={subtitle}
            />
        </Card>
    )
}