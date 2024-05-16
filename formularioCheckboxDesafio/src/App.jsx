// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];


import React from "react";

const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor, index)=>
      <label key={index}>
        <input
          type="checkbox"
          value={cor}
          checked={handleChecked(cor)}
          onChange={handleChange}
        />{cor}
      </label>)}
    
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};
export default App;
      
      {/* <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleChecked('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleChecked('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
      <label>
        <input
          type="checkbox"
          value="verde"
          checked={handleChecked('verde')}
          onChange={handleChange}
        />
        Verde
      </label>
      <label>
        <input
          type="checkbox"
          value="amarelo"
          checked={handleChecked('amarelo')}
          onChange={handleChange}
        />
        Amarelo
      </label>
      <label>
        <input
          type="checkbox"
          value="roxo"
          checked={handleChecked('roxo')}
          onChange={handleChange}
        />
        Roxo
</label> */}
