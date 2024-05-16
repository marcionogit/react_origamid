import React from "react"
import Input from "./Form/Input"
import Select from "./Select";

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
 

  return (
    <>
      <p>Olá, Mundo!</p>
      <Select options={['smastphone', 'tablet', 'notebook']} value={produto} setValue={setProduto}/>
      <Input id='nome' label='Nome' value={nome} setValue={setNome} />
      <Input id='email' label='Email' value={email} setValue={setEmail} />
    </>
  )
}

export default App
