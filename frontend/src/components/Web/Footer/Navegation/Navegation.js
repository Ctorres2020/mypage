import React from 'react';
import {Link} from 'react-router-dom';
import './Navegation.scss';
import { Row, Col } from 'antd';
import {RightOutlined, SnippetsOutlined} from '@ant-design/icons';



export default function Navegation() {
  return (
        <Row className='navigation'>
            <Col>
                <h3>Navegación</h3>
                <RenderListRight />
            </Col>
        </Row>
      );
}

// function RenderListLeft() {
//     return (
//         <ul>
//             <li>
//                 <a href="#">
//                     <BookOutlined /> Cursos Online
//                 </a>
//             </li>
//             <li>
//                 <a href="#">
//                 <InstagramOutlined /> Curso de Instagram
//                 </a>
//             </li>
//             <li>
//                 <a href="#"> Curso de Fotografia
//                     <CameraOutlined />
//                 </a>
//             </li>
//         </ul>
//     )
// }

function RenderListRight() {
    return (
        <ul>
            <li>
                <Link to={'/privacidad'}>
                    <RightOutlined /> Politica de privacidad
                </Link>
            </li>
            <li>
                <Link to={'/cursos'}>
                <SnippetsOutlined /> Todos los cursos
                </Link>
            </li>
        </ul>
    )
}
