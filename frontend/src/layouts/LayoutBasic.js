import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Layout, Row, Col} from 'antd';
import './LayoutBasic.scss';
import MenuTop from '../components/Web/MenuTop';
import Footer from '../components/Web/Footer';





export default function LayoutBasic({routes}) {


  return(
    <>
      <Row>
        <Col md={4} />
        <Col md={16}>
          <MenuTop />
        </Col>
        <Col md={4} />
      </Row>
      <LoadRoutes routes={routes} />
      <Footer />
    </>
  )
}


function LoadRoutes({routes}) {

  return (
    <Switch>
      {
        routes.map((rutas, index) => (

          <Route
            key={index}
            path={rutas.path}
            component={rutas.component}
            exact={rutas.exact}
          />
          ))
      }
    </Switch>
  )

}

