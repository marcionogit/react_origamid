import React from 'react'

const Modal = ({modal, setModal}) => {
if(modal === true){

    return (
      <button onClick={()=>{setModal(false)}}>Fechar</button>
    )
  } else{
    return null
  }
}

export default Modal
