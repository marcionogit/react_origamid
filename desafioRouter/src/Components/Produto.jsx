import React from 'react';
import styles from './Produto.module.css';
import {useParams} from 'react-router-dom';

const Produto = () => {
  const {id} = useParams();
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(()=>{
    async function fetchProduto(url){
      try{
        setLoading(true)
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json)
      } catch(erro){
        setError('Um erro ocorreu.')
      } finally{
        setLoading(false)
      }
  
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)


  }, [id])

  if(loading) return <p className='loading'></p>;
  if(error) return error;
  if(produto === null)  return null;
  return (
    <section className={`${styles.produto} animaLeft`}>
      <div>
        {produto.fotos.map( foto =>(
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  )
}

export default Produto
