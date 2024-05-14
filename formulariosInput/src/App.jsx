import React from "react"

const App = () => {

  const [nome, setNome] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(event){
    console.log(event)

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input id="nome" 
      name="nome"
      value={nome}
      type="text" 
      onChange={(event)=>{setNome(event.target.value)}} />


      <label htmlFor="password">Senha: </label>
      <input type="password" id="password" name="password" value={password} 
      onChange={(event)=>{setPassword(event.target.value)}} />

      <label htmlFor="email">Email: </label>
      <input type="email" id="email" name="email" value={email}
      onChange={(event)=>{setEmail(event.target.value)}} />
      <button>Enviar</button>
    </form >
  )
}

export default App
