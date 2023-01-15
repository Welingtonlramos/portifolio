import React from 'react';
import sites from './sites.json';
import './listaSuspensa.scss';

export default function ListaSuspensa() {
  return (
    <section className='lista-suspensa'>
      <ul className='lista'>
        {sites.map( site => {
          return (
            <li className='lista__itens' key={site.id}>
              <figure>
                <img src={site.imagem} alt={site.alternativo}></img>
                <figcaption>
                  <p>{site.descricao}</p>
                  <a href={site.site} rel="noreferrer" target='_blank'>Confira</a>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  )
}
