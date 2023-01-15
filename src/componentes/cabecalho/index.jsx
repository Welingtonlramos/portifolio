import React from 'react'
import './cabecalho.scss';
import logo from './logo.png';

export default function Cabecalho() {
  return (
    <header>
        <div>
            <img src={logo} alt='Icone Logo'/>
            <p>Welington S</p>
        </div>
        <nav>
            <ul>
                <li><a href='/'>Sobre</a></li>
                <li><a href='.introducao'>Trabalhos</a></li>
                <li><a href='/'>Contato</a></li>
            </ul>
        </nav>
    </header>
  );
}
