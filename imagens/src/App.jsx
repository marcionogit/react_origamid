import React from "react"
import "./App.css"
import foto from "./img/foto.jpg?react"
import Dog from './img/dog.svg?react';
import DogSvg from "./DogSvg";

function App() {

  return (
    <>
      <h1>Imagens React</h1>
      <p className="fundo"></p>
      <DogSvg />
      <img src={foto} alt="foto cachorro" />
    </>
  )
}

export default App
