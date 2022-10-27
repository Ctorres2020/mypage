import React from 'react';
import './Footer.scss';
import {Row, Layout, Col} from 'antd';
import MyInfo from './MyInfo';
import Navegation from './Navegation';
import Newsletter from '../Newsletter';


export default function Footer() {

    const {Footer} = Layout;
    const fecha = new Date();
    const añoActual = fecha.getFullYear();


  return (
    <Footer className='footer'>
        <Row>
            <Col md={4} />
            <Col md={16}>
                <Row>
                    <Col md={8}>
                        <MyInfo />
                    </Col>
                    <Col md={8}>
                        <Navegation />
                    </Col>
                    <Col md={8}>
                        <Newsletter />
                    </Col>
                </Row>
                <Row className='footer__copy'>
                    <Col md={12}>
                        ©{añoActual} - All RIGHTS RESERVED
                    </Col>
                    <Col md={12}>
                        Hecho por Cesar Ivan Torres ❤️
                    </Col>
                </Row>
            </Col>
            <Col md={4} />
        </Row>
    </Footer>
  )
}
