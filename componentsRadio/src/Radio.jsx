import React from 'react'

const Radio = ({options, value, setValue}) => {
  return (
    <>
      {options.map((option) =>(
      <label key={option}>{option}
        <input type="radio" 
        value={option} 
        checked={value === option}  
        onChange={({target}) => setValue(target.value)}/>
      </label>
      ))}
    </>
  )
}

export default Radio