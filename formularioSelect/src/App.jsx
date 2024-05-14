import React from "react"

function App() {
  const [select, setSelect] = React.useState('')

  return (
    <form>
    <select value={select} name="select" id="select" onChange={({target})=>setSelect(target.value)}>
      <option disabled value="">Selecione</option>
      <option value="smartphone">Smartphone</option>
      <option value="notebook">Notebook</option>
      <option value="televisao">Televisão</option>
    </select>
    {select}
    </form>
  )
}

export default App
