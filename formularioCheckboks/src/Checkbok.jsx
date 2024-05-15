import React from 'react'

const Checkbok = ({options, value, setValue}) => {

  function handleChange({target}){
    if(target.Checked){
      setValue([...value, target.value]); 
    } else{
      setValue(value.filter((cor) => cor !== target.value));
    }
  }

  return (
    <div>
      {options.map((option)=>(
        <label key={option}>
          <input type="checkbox" 
          value={option}
          checked={value.includes(option)}
          onChange={handleChange}/>
          {options}
        </label>
      ))}    
    </div>
  )
}

export default Checkbok
