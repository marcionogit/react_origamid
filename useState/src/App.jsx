import React from "react"
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";


const App = () =>{


// EXEMPLO UM

//   let ativo = true;
  
//   function handleClick(){
//     ativo = !ativo;
//     console.log(ativo)
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         {ativo ? 'Ativo' : 'Inativo'}
//       </button>
//     </>
//   )

// -------------------------------

 // EXEMPLO DOIS

// const [ativo, setAtivo] = React.useState(false);
// const [dados, setDados] = React.useState({nome: 'Márcio', idade: '26'});

// function handleClick(){
//   setAtivo(!ativo)
//   setDados({ ...dados, faculdade: 'Possui faculdade!'});
// }
// return ( 
//   <>
//   <p>{dados.nome}</p>
//   <p>{dados.idade}</p>
//   <p>{dados.faculdade}</p>
//   <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
//   <ButtonModal />
// </>
// }
// -------------------------------

// EXEMPLO TRÊS

const [modal, setModal] = React.useState(false)

return ( 
  <>
  <div>{modal ? 'Modal Aberto!' : 'Modal Fechado!'}</div>
  <Modal modal={modal} setModal={setModal}/>
  <ButtonModal setModal={setModal}/>
</>
);
}

export default App;
