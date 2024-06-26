import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg'
import Head from './Head';


const Contato = () => {
  return (
    <section className={`${styles.contato} animaLeft`}>

      <Head title='Márcio Gostoso' description='Entre em contato Márcio gostosão'/>
      <img src={foto} alt="Máquina de escrever antiga" />

      <div>
      <h1>Entre em contato</h1>
      <ul className={styles.dados}>
        <li>@gmai.com</li>
        <li>(11)12121-0212</li>
        <li>Rua dos Bobos, N°Zero</li>
      </ul>
      </div>
    </section>
  )
}

export default Contato
