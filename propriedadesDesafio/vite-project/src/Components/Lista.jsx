import React from 'react'

const Lista = (lista) => {
  return (
    <>
    <div style={{border: '1px solid black', marginBottom: '10px', padding: '10px'}}>
      <p>{lista.name}</p>
      <ul>
        <li>{lista.ram}</li>
        <li>{lista.giga}</li>
      </ul>
    </div>
    </>
  )
}

export default Lista
