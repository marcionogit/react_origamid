import React from "react"
import Home from "./Components/Home"
import Header from "./Components/Header"
import Produtos from "./Components/Produtos"



const App = () =>{

  let Pagina ;
  let url = window.location.pathname;
  if(url === '/home'){
    Pagina = Home
  } else{
    Pagina = Produtos;
  }

return (
  <>
    <Header />
    <Pagina />
    </>
  )
}

export default App
