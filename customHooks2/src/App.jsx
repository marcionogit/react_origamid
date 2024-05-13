import React from "react"
import UseLocalStorage from "./UseLocalStorage"
import useFetch from "./useFetch"

const App = ()=> {
const [produto, setProduto] = UseLocalStorage('produto', '')
const {request, data , loading} = useFetch();

React.useEffect(()=>{
  request('https://ranekapi.origamid.dev/json/api/produto/')
}, []);
console.log(data)

function handleClick({target}){
  setProduto(target.innerText);
}
if(loading) return <p>Carregando...</p>
if(data)
  return (
    <>
      <h1>Custom Hooks</h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>


      {data.map((produto) =>(
        <div key={produto.id}>
          <h3>{produto.nome}</h3>
        </div>
      ))}
    </>) 
else return null
}

export default App
