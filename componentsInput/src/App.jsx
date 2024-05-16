import React from "react"
import Input from "./Form/Input"

function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
 

  return (
    <>
      <p>Olá, Mundo!</p>
      <Input id='nome' label='Nome' value={nome} setValue={setNome} />
      <Input id='email' label='Email' value={email} setValue={setEmail} />
    </>
  )
}

export default App
