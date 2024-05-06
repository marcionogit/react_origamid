import React from "react"

const App = () =>{
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeOutRef = React.useRef();

  function handleClick(){
    setNotificacao(`${carrinho + 1} Itens adicionado ao carrinho!`)
    setCarrinho(carrinho + 1);

    clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(()=>{
      setNotificacao(null);
    }, 2000);
  }


  return (
    <>
      <ul>
        <p>{notificacao}</p>
      <button onClick={handleClick}>
        Adicionar carrinho {carrinho}
      </button>
      </ul>
    </>
  )
}

export default App
