import React from "react"
import Radio from "./Radio";

const App = ()=> {

  const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];
  
  const [respostas, setRespostas] = React.useState({p1:'', p2:'', p3:'', p4:''})
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({target}){
    setRespostas({...respostas, [target.id]: target.value})
  }

  function resultadoFinal(){
    console.log('final');
    const corretas = perguntas.filter(
      ({id, resposta}) => respostas[id] === resposta,);
    
    setResultado(`Você acertou ${corretas.length} perguntas de 4`)
  }

  function handleClick(event){
    // event.preventDefault();
    if(slide < perguntas.length - 1){
      setSlide(slide + 1);
    } else{
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  return (
    <>
        <h1>Desafio Formulário</h1>
      <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index)=>(
        <Radio
        active={slide === index}
        key={pergunta.id} 
        value={respostas[pergunta.id]}
        onChange={handleChange}
        {...pergunta} />
      ))}

      <button onClick={handleClick}>Próximo</button>
      <p>{resultado}</p>
      </form>
    </>
  )
}

export default App
