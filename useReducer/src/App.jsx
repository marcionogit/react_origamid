import React from "react"


function reducer(state, action){

  // if(action === 'Aumentar'){
  //   return state + 1;
  // } else if(action === 'Diminuir'){
  //   return state - 1;
  // }
  // else{
  //   return new Error('Action inexistente.')
  // }

  switch (action){
    case "Aumentar":
      return state + 1;
    case "Diminuir":
      return state - 1;
    default: 
    throw new Error("Action inexistente.");
  }

}


const App = () => {
  // const [contar, setContar] = React.useState(0)
  const [state, dispatch] = React.useReducer(reducer, 0)

  // function adicionarUm(){
  //   setContar(contar + 1)
  // }

  // function diminuirUm(){
  //   setContar(contar - 1)
  // }

  return (
    <>
      {/* <h1>Olá Mundo!</h1>
      <h2>Contador</h2>
      <button onClick={adicionarUm}>+</button>
      <button onClick={diminuirUm}>-</button> */}
      {/* <p>{contar}</p> */}

      <button onClick={() => dispatch('Aumentar')}>+</button>
      <button onClick={() => dispatch('Diminuir')}>-</button>
      <p>{state}</p>
    </>
  )
}

export default App
