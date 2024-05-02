import React from 'react'

const Titulos = (titulo) => {
  return (
    <h2 style={{color: titulo.cor}}>
      {titulo.nome}
    </h2>
  )
}

export default Titulos