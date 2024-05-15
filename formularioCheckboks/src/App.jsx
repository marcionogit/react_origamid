import React from "react"
import Checkbok from "./Checkbok";
const App = () =>{

  // const [checkbok, setCheckbox] = React.useState(false)
  // function handleChange({target}){
  //   setCheckbox(target.checked)
  // }

  // return (
  //   <form>
  //     {checkbok && 'Aceitou os termos.'}
  //     <label>
  //       <input type="checkbox" 
  //       value='termos'
  //       checked={checkbok}
  //       onChange={handleChange}/>
  //       li os termos de usuario
  //     </label>
  //   </form>
  // )

  const [fruta, setFruta] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <form>
      <Checkbok
        options={['Uva', 'Laranja', 'Limão']}
        value={fruta}
        setValue={setFruta}
      />

      <Checkbok
        options={['Termos e Condições']}
        value={termos}
        setValue={setTermos}
      />
    </form>
  );
}

export default App
