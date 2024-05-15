import React from "react"


function App() {
const [radio, setRadio] = React.useState('');

function handleChange(event){
  setRadio(event.target.value);
}

  return (
    <form>
      
      <label>  
        <input type="radio" 
        value="smartphone" 
        checked={radio === 'smartphone'}
        onChange={handleChange}
        name="produto"/>Smartphone
      </label>
    
      <label>
        <input type="radio" 
        value="notebook" 
        checked={radio === 'notebook'}
        onChange={handleChange}
        name="produto"/>Notebook  
      </label>
      
      <label>
        <input type="radio" 
        value="tablet" 
        checked={radio === 'tablet'}
        onChange={handleChange}
        name="produto"/>Tablet
      </label>

      {radio}

    </form>
  )
}

export default App
