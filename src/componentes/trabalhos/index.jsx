import React from 'react';
import ListaSuspensa from '../listaSuspensa';
import './trabalhos.scss';

export default function Trabalhos() {
  return (
    <section>
        <div className='introducao'>
            <h1>Meus trabalhos mais recentes</h1>
            <p>Aqui alguns dos projetos que já trabalhei. Quer ver mais? envie-me um <a href='/'>Email</a>.</p>
        </div>
        <ListaSuspensa />
    </section>
  );
}
