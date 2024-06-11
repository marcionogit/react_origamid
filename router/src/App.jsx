import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Sobre from './Sobre'
import Header from './Header'
import NaoEncontrado from './NaoEncontrado'

function App() {


  return (

    <div>
      <Header />
      <BrowserRouter>
      <Routes>

        <Route path='/' element={ <Home />}/>
        <Route path='sobre' element={ <Sobre />}/>
        <Route path='*' element={ <NaoEncontrado />}/>

      </Routes>
      </BrowserRouter>
    </div>  
  )
}

export default App
