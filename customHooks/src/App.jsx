import React from "react"
import UseLocalStorage from "./UseLocalStorage"

const App = ()=> {
const [produto, setProduto] = UseLocalStorage('produto', '')
function handleClick({target}){
  setProduto(target.innerText);
}
  return (
    <>
      <h1>Custom Hooks</h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </>
  )
}

export default App
