import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Layout, Row, Col} from 'antd';
import './LayoutBasic.scss';
import MenuTop from '../components/Web/MenuTop';





export default function LayoutBasic({routes}) {

  const {Footer } = Layout;

  return(
    <Row>
      <Col md={4} />
      <Col md={16}>
        <MenuTop />
        <LoadRoutes routes={routes} />
        <Footer>Cesar Torres</Footer>
      </Col>
      <Col md={4} />
    </Row>
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

