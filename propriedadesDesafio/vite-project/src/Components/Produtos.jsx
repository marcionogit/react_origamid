import React from 'react'
import Lista from "./Lista"

const Produtos = () => {
  const produtos = [
    {nome: 'Notebook', propriedade: ['16gb ram', '512gb']},
    {nome: 'Smatphone', propriedade: ['2gb ram', '128gb']}
  ];

  return (
    <>
      <section>
        <Lista name={produtos[0].nome} ram={produtos[0].propriedade[0]} giga={produtos[0].propriedade[1]}/>
        <Lista name={produtos[1].nome} ram={produtos[1].propriedade[0]} giga={produtos[1].propriedade[1]}/>
      </section>
    </>
  )
}

export default Produtos
