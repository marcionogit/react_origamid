import React from "react"
import Input from "./Input"

const App = () => {

  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState('');

  function validateCep(value){
    if(value.length === 0){
      setError('Preencha um valor.')
      return false 
    } else if(!/^\d{5}-?\d{3}$/.test(value)){
      setError('Preencha um CEP válido.')
      return false 
    } else{
      setError(null)
      return true
    }

  }
  
  function handleBlur({target}){
    validateCep(target.value)
  }

  function handleChange({target}){
    if(error){
      validateCep(target.value)
    } else{
      setCep(target.value)
    }
  }

  function handleSubmit(event){
    event.preventDefault()
    if(validateCep(cep)){
      console.log('enviou')
    } else{
      console.log('n enviou')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label='CEP' id='cep' type='text' placeholder='00000-000' name='cep' onBlur={handleBlur} onChange={handleChange}/>
      {error && <p>{error}</p>}
    </form>
  )
}

export default App
