import React from "react"
import Input from "./Form/Input"
import Select from "./Select";
import Radio from '../src/Radio'
import Checkbox from "./Checkbox";

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [radio, setRadio] = React.useState('');
  const [frutas, setFrutas] = React.useState('');
  const [checkbox, setCheckbox] = React.useState([]);
 

  return (
    <>
      <p>Olá, Mundo!</p>
      <h2>Checkbox</h2>
      <Checkbox options={['JavaScript', 'Python', 'HTML', 'CSS', 'React']} value={checkbox} setValue={setCheckbox}/>

      <h2>Frutas</h2>
      <Radio options={['Banana', 'Maçã', 'Melancia', 'Mamão']} value={frutas} setValue={setFrutas}/>

      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho', 'Verde']} value={radio} setValue={setRadio}/>

      <h2>Aparelhos</h2>
      <Select options={['smastphone', 'tablet', 'notebook']} value={produto} setValue={setProduto}/>

      <h2>Digite: </h2>
      <Input id='nome' label='Nome' value={nome} setValue={setNome} />
      <Input id='email' label='Email' value={email} setValue={setEmail} />
    </>
  )
}

export default App
