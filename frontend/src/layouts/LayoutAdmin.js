import React, {useState} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Layout} from 'antd';
import MenuTop from '../components/Admin/MenuTop/MenuTop';
import MenuSider from '../components/Admin/MenuSider/MenuSider';
import AdminSignIn from '../pages/Admin/SignIn/SignIn';
import './LayoutAdmin.scss'
import userAuth from '../hooks/userAuth';

export default function LayoutAdmin(props) {

  const {routes} = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;

  const {user, isLoading} = userAuth();


  if(!user && !isLoading) {
    return (
      <>
        <Route path='/admin/login' component={AdminSignIn} />
        <Redirect to='/admin/login' />
      </>
    )
  }

  if (user && !isLoading) {

    return (
      <Layout>
        <MenuSider menuCollapsed={menuCollapsed} />
        <Layout className='layout-admin' style={{marginLeft: menuCollapsed ? "80px" : "200px"}}>
          <Header className='layout-admin__header'>
            <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
          </Header>
          <Content className='layout-admin__content'>
            <LoadRouters routes={routes} />
          </Content>
          <Footer className='layout-admin__footer'>
            Cesar Ivan Torres
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

function LoadRouters({routes}){

  return (
    <Switch>
      {
        routes.map((ruta, index) => (
          <Route
            key={index}
            path={ruta.path}
            exact={ruta.exact}
            component={ruta.component}
          />
        ))
      }
    </Switch>
  )

}
