import React from 'react';
import './HowMyCoursesWork.scss';
import { Row, Col, Card } from 'antd';
import {UsergroupAddOutlined,
        PlayCircleOutlined,
        ClockCircleOutlined,
        ProfileOutlined,
        DollarOutlined,
        CheckCircleOutlined
    }
    from '@ant-design/icons';




export default function HowMyCoursesWork() {
  return (
    <Row className='how-my-courses'>
        <Col lg={24} className='how-my-courses__title'>
            <h2>¿Cómo funciona los cursos?</h2>
            <h3>
                Cada curso esta contenido en Hotmart
                puedes acceder desde cualquier dispositivos
                a cualquier hora. Y todos son de un solo pago.
            </h3>
        </Col>
        <Col lg={4} />
        <Col lg={16}>
            <Row className='row-cards'>
                <Col md={8}>
                    <CardInfo
                        icon={<ClockCircleOutlined />}
                        title="Cursos y Clases"
                        description="Cursos completos con grupos de ayuda, son videos de alta calidad, ya tenemos más de 1000 alumnos."
                    />
                </Col>

                <Col md={8}>
                    <CardInfo
                        icon={<PlayCircleOutlined />}
                        title="Acceso 24/7"
                        description="Accede al curso cuando quieras y en donde quieras"
                    />
                </Col>
                <Col md={8}>
                    <CardInfo
                        icon={<UsergroupAddOutlined />}
                        title="Aprendizaje colaborativo"
                        description="Más de 1000 alumnos conectados y en diferentes grupos de whatsapp donde te ayudan con cualquier duda."
                    />
                </Col>
            </Row>

            <Row className='row-cards'>
                <Col md={8}>
                    <CardInfo
                        icon={<ProfileOutlined />}
                        title="Mejora tu perfil"
                        description="Aprende y mejora tu perfil para mantenerte actualizado."
                    />
                </Col>

                <Col md={8}>
                    <CardInfo
                        icon={<DollarOutlined />}
                        title="Precios unicos"
                        description="Obten descuentos especiales desde aquí"
                    />
                </Col>
                <Col md={8}>
                    <CardInfo
                        icon={<CheckCircleOutlined />}
                        title="Certificado de finalización"
                        description="Al completar el curso recibiras una certificación."
                    />
                </Col>
            </Row>
        </Col>
        <Col lg={4} />
    </Row>
  )
}

function CardInfo(props) {
    const { icon, title, description } = props;


    const {Meta} = Card;

    return (
        <Card className='how-my-courses__card'>
            {icon}
            <Meta title={title} description={description} />
        </Card>
    )
}