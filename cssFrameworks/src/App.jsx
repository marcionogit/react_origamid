import React from "react"
import Card from "react-bootstrap/Card"




const App = () => {
 

  return (
    // Duas maneiras diferentes de se obter o mesmo resultado.

    // Bootstrap normal.
  <>
    <div className="card bg-dark text-white m-5" style={{maxWidth:"18rem"}}>
     <div className="card-header">
      Notebook
     </div>
     <div className="card-body">
      <h5 className="card-title">R$ 2.500,00</h5>
      <p className="card-text">Esse é um notebook da hora</p>
     </div>
    </div>

    {/* -=-=-==-=-===-=-=-=-=-=-===-=-=-=-==-=-

    React Bootstrap */}

    
      <Card bg="dark" text="white" className="m-5" style={{maxWidth:"18rem"}}>
        <Card.Header >Notebook</Card.Header>
        <Card.Body>
          <Card.Title>R$ 2.500,00</Card.Title>
          <Card.Text>Esse é um notebook da hora</Card.Text>
        </Card.Body>
      </Card>
      </>  
  )
}

export default App
