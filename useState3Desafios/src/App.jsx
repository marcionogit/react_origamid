import React from "react"
import Produtos from "./Components/Produtos"

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event){
    setCarregando(true)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    const json = await response.json();
    console.log(json);
    setDados(json);
    setCarregando(false)
  }
  return (
    <>
      <button style={{margin:'10px'}} onClick={handleClick}>notebook</button>
      <button style={{margin:'10px'}} onClick={handleClick}>smartphone</button>
      <button style={{margin:'10px'}} onClick={handleClick}>tablet</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produtos dados={dados}/>}
    </>
  )
}

export default App
