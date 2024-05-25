import React from 'react'

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    mensagem: 'Cep Invalido',
  },
}

const UseForm = (type) => {

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value){
    if(type === false) return true;
    if(value.length === 0){
      setError('Preencha um valor.');
      return false 
    } else if(types[type] && !types[type].regex.test(value)){
      setError(types[type].mensagem);
      return false ;
    } else{
      setError(null);
      return true;
    }
  }

  function onChange({target}){
    if(error){
      validate(target.value); 
    } else{
      setValue(target.value);
    }
  }

  return (
    {
      value, setValue, error, onChange, validate: () => validate(value)
       ,onBlur: () => validate(value)
    }
  )
}

export default UseForm
