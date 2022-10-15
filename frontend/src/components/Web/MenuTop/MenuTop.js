import React, {useState, useEffect} from 'react';
import './MenuTop.scss';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import LogoWhite from '../../../assets/img/png/logo.png';
import { getMenuApi } from '../../../api/menu';
import SocialLinks from '../SocialLinks/SocialLinks';


export default function MenuTop() {

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        getMenuApi()
            .then(response => {
                const arrayMenu = [];
                response.menu.forEach(item => {
                    item.active && arrayMenu.push(item);
                })
                setMenuData(arrayMenu)
            })
    },[])

  return (
    <Menu className='menu-top-web' mode='horizontal'>
        <Menu.Item className='menu-top-web__logo'>
            <Link to={"/"}>
                <img src={LogoWhite} alt="cesar torres" />
            </Link>
        </Menu.Item>
        {
            menuData.map(items => {
                const external = items.url.indexOf("http") > -1 ? true : false;

                if (external) {
                    return (
                        <Menu.Item key={items._id} className='menu-top-web__item'>
                            <a href={items.url} target="_blank" rel="noreferrer">{items.title}</a>
                        </Menu.Item>
                    )
                }

                return (
                    <Menu.Item key={items._id} className='menu-top-web__item'>
                        <Link to={items.url}>{items.title}</Link>
                    </Menu.Item>
                )
            })
        }
            <SocialLinks />

    </Menu>
  )
}
