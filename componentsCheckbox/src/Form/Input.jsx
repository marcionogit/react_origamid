import React from 'react'



const Input = ({label, id, name, value, setValue}) => {

  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <input 
      type="text" 
      id={id} 
      name={name}
      value={value}
      onChange={({target}) =>{setValue(target.value)}}/>
    </>
  )
}

export default Input
