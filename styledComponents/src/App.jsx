import React from "react"
import styled from "styled-components"

const Title = styled.h1 `
  font-size:50px;
  color: tomato;
`

const Paragrafo = styled.p `
  color: blue;
`

const Comprar = styled.button`
  font-size: 1.5em;
  background: tomato;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid black;
  cursor: pointer;
  position: relative;
  &:hover {
    background: black;
    color: white;
  }
  &::before {
    display: block;
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    top: -8px;
    right: -8px;
    background: ${({ ativo }) => (ativo ? '#53d956' : '#000')};
    border: 1px solid black;
    font-size: 1rem;
    padding: 0.5rem;
    color: white;
    cursor: pointer;
  }
`;


function App() {

  const [ativo, setAtivo] = React.useState(null)


  return (
    <>
      <Title>Meu Titulo</Title>
      <Paragrafo>Esse é um parágrafo</Paragrafo>
      <Comprar ativo={ativo} onClick={() => setAtivo(!ativo)}>BOTÃO COMPRAR</Comprar>
    </>
  )
}

export default App
