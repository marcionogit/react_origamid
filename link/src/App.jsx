import React from "react";
import {BrowserRouter,  Route, Routes} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Sobre from "./Sobre";
import Contato from "./Contato";

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre/>} />
        <Route path="contato" element={<Contato/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
