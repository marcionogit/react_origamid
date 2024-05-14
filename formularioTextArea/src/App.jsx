import React from "react"

const  App = () => {
  const [mensagem, setMensagem] = React.useState('Márcio Lindo')

  return (
    <form>
      <textarea name="mensagem" id="mensagem" value={mensagem} rows={5} onChange={({target})=> setMensagem(target.value)}></textarea>
      {mensagem}
    </form>

  )
}

export default App
