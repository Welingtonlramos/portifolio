import React from 'react'
import './sobreMin.scss';

import GitHub from '../assets/icones/github-original.png';
import LinkedIn from '../assets/icones/linkedin.png';

export default function SobreMim() {
  return (
    <section className='sobreMin'>
      <ul>
        <li>
          <a href='https://github.com/Welingtonlramos' rel="noreferrer" target='_blank'>
            <img src={GitHub} alt='Link para o GitHub'/>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/welington-santos/' rel="noreferrer" target='_blank'>
            <img src={LinkedIn} alt='Link para o Linked In'/>
          </a>
        </li>
      </ul>
      <div className='apresentacao'>
        <div>
          <h1>Front-end</h1>
          <h2>Developer</h2>
          <p>Gente boa</p>
        </div>
      </div>
    </section>
  )
}
