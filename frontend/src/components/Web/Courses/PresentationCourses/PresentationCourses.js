import React from 'react';
import "./PresentationCourses.scss";
import AcademyLogo from '../../../../assets/img/png/academy.png';

export default function PresentationCourses() {
  return (
    <div className='presentation-courses'>
        <img src={AcademyLogo} alt='Cursos de cesartorresdigital' />
        <p>
            En Cesar Torres academy vas a encontrar los mejores cursos online
            que a mi me hubiese encantado encontrar cuando empecé en el mundo digital.
        </p>
        <p>¡¡¡ ÉCHALE UN VISTAZO Y APROVECHA LAS OFERTAS !!!</p>
    </div>
  )
}
