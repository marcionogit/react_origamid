import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produto from './Produto';
import Home from './Home';
import Header from './Header';
import Sobre from './Sobre';
import Login from './Login';
import NaoEncontrada from './NaoEncontrada';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id" element={<Produto />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App
