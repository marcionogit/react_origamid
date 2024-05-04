import React from "react"
import Modal from "./Modal"
import ButtonModal from "./ButtonModal"

const App = () => {
  const [modal , setModal] = React.useState(false); 
  const [itens , setItens] = React.useState('teste'); 

  function handleClick(){
    setItens('Outro');
  }
  
  return (
    <>
      <p>{itens}</p>
      <button onClick={handleClick}>Clique</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </>
  )
}

export default App
