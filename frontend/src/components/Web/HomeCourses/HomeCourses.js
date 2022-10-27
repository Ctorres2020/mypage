import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import {Link} from 'react-router-dom';
import cursoInstagram from '../../../assets/img/jpg/curso.jpeg';
import cursoHidroponia from '../../../assets/img/png/hidroponia.png';
import cursoFoto from '../../../assets/img/jpg/foto.jpeg';
import cursoTienda from '../../../assets/img/png/tienda.png';
import cursoHuerto from '../../../assets/img/png/huerto organico.png';
import cursoHelado from '../../../assets/img/jpg/helado.jpeg';
import './HomeCourses.scss';


export default function HomeCourses() {
  return (
    <Row className='home-courses'>
        <Col lg={24} className='home-courses__title'>
            <h2>Aprende y mejora tus habilidades</h2>
        </Col>
        <Col lg={4} />
        <Col lg={16}>
            <Row className='row-courses'>
                <Col md={6}>
                    <CardCourses
                        image={cursoInstagram}
                        title="Como vender más en IG"
                        subtitle="Básico - Intermedio"
                        link="https://cesartorresdigital.com/como-vender-mas-en-instagram/"
                    />
                </Col>
                <Col md={6}>
                    <CardCourses
                        image={cursoTienda}
                        title="Tienda Online con WhatsApp"
                        subtitle="Básico - Intermedio"
                        link="https://go.hotmart.com/B69164521R?ap=7374"
                    />
                </Col>
                <Col md={6}>
                    <CardCourses
                        image={cursoFoto}
                        title="Empieza en la Fotografía desde cero"
                        subtitle="Básico - Intermedio"
                        link="https://cesartorresdigital.com/fotografia-de-cero-a-profesional-2022/"
                    />
                </Col>
                <Col md={6}>
                    <CardCourses
                        image={cursoHidroponia}
                        title="Hidroponia desde cero"
                        subtitle="Básico - Intermedio"
                        link="https://cesartorresdigital.com/hidroponia/"
                    />
                </Col>
            </Row>
            <Row className='row-courses'>
                <Col md={6}>
                    <CardCourses
                        image={cursoHelado}
                        title="Helados Artesanales"
                        subtitle="Básico - Intermedio"
                        link="https://cesartorresdigital.com/helados-artesanales/"
                    />
                </Col>
                <Col md={6} />
                <Col md={6} />
                <Col md={6}>
                    <CardCourses
                        image={cursoHuerto}
                        title="Huerto organico desde cero"
                        subtitle="Básico - Intermedio"
                        link="https://cesartorresdigital.com/huertos-organicos/"
                    />
                </Col>
            </Row>
        </Col>
        <Col lg={4} />
        <Col lg={24} className='home-courses__more'>
            <Link to={"/courses"}>
                <Button>Ver más</Button>
            </Link>
        </Col>
    </Row>
  )
}

function CardCourses(props) {
    const { image, title, subtitle, link} = props;
    const {Meta} = Card;

    return (
        <a href={link} target="_blank" rel='noreferrer'>
            <Card
                className='home-courses__card'
                cover={<img src={image} alt={title} />}
                actions={[<Button>Ingresar</Button>]}
            >
                <Meta title={title} description={subtitle} />
            </Card>
        </a>
    )
}