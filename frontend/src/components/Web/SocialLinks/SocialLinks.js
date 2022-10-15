import React from 'react';
import './SocialLinks.scss';
import TwitterIcon from '../../../assets/img/png/twitter.png';
import LinkedinIcon from '../../../assets/img/png/linkedin.png';





export default function SocialLinks() {
  return (
    <div className='social-links'>
        <a
            href="https://twitter.com/cesarivantorres/"
            className='twitter'
            target="_blank"
            rel="noreferrer"
        >
            <img src={TwitterIcon} alt="red social" />
        </a>

        <a
            href="https://www.linkedin.com/in/cesar-ivan-torres-front-dev/"
            className='linkedin'
            target="_blank"
            rel="noreferrer"
        >
            <img src={LinkedinIcon} alt="red social" />
        </a>
    </div>
  )
}
