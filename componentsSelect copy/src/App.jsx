import React from "react"
import Input from "./Form/Input"
import Select from "./Select";
import Radio from "../../componentsSelect copy/src/Radio";

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [radio, setRadio] = React.useState('');
 

  return (
    <>
      <p>Olá, Mundo!</p>
      <Radio options={['Azul', 'Vermelho', 'Verde']} value={radio} setValue={setRadio}/>
      <Select options={['smastphone', 'tablet', 'notebook']} value={produto} setValue={setProduto}/>
      <Input id='nome' label='Nome' value={nome} setValue={setNome} />
      <Input id='email' label='Email' value={email} setValue={setEmail} />
    </>
  )
}

export default App
