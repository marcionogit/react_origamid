import React from "react"
import Input from "./Input"
import UseForm from "./Hooks/UseForm"

const App = () => {

  const cep = UseForm('cep');
 
  // function validateCep(value){
  //   if(value.length === 0){
  //     setError('Preencha um valor.')
  //     return false 
  //   } else if(!/^\d{5}-?\d{3}$/.test(value)){
  //     setError('Preencha um CEP válido.')
  //     return false 
  //   } else{
  //     setError(null)
  //     return true
  //   }

  // }
  
  // function handleBlur({target}){
  //   validateCep(target.value)
  // }

  // function handleChange({target}){
  //   if(error){
  //     validateCep(target.value)
  //   } else{
  //     setCep(target.value)
  //   }
  // }

  function handleSubmit(event){
    event.preventDefault()
    if(cep.validate()){
      console.log('enviou')
    } else{
      console.log('n enviou')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input 
      label='CEP' 
      id='cep' 
      type='text' 
      placeholder='00000-000' 
      {...cep}/>
      
      <button>Enviar</button>
    </form>
  )
}

export default App
