import React from 'react';
import Logowhite from '../../../../assets/img/png/logo.png';
import './MyInfo.scss';
import SocialLink from '../../SocialLinks';

export default function MyInfo() {
  return (
    <div className='my-info'>
        <img src={Logowhite} alt='Cesar logo' />
        <h4>
            Bienvenido al sitio web con cursos.
        </h4>
        <SocialLink />
    </div>
  )
}
