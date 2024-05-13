import React from 'react';  
import { GlobalContext, GlobalStorage } from './GlobalContext';
import { useContext } from 'react';


const Produto = () => { 
  const global = useContext(GlobalContext);

  return (
    <div>
      <p>Nome: {global.nome}</p>
      <p>Idade: {global.idade}</p>
      <p>Sexo: {global.sexo}</p>
    </div>
  )
}

export default Produto
