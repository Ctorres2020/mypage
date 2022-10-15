import React from 'react'
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import LogoCesar from '../../../assets/img/png/logo.png'
import './MenuTop.scss';
import { Link } from 'react-router-dom';
import {logout} from '../../../api/auth'



export default function MenuTop(props) {

    const {menuCollapsed, setMenuCollapsed} = props;

    const logoutUser = () => {
        logout();
        window.location.reload();
    }



  return (
    <div className='menu-top'>
        <div className='menu-top__left'>
            <Link to={"/"}>
            <img
                className='menu-top__left-logo'
                src={LogoCesar}
                alt='Cesar Torres'
            />
            </Link>
            <Button type='link' onClick={() => setMenuCollapsed(!menuCollapsed)}>
                {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
        </div>
        <div className="menu-top__right">
            <Button type='link' onClick={logoutUser}>
                <PoweroffOutlined />
            </Button>
        </div>
    </div>
  )
}
