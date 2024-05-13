import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) =>{
  return  <GlobalContext.Provider value={{nome: 'Márcio' , idade: 26, sexo: 'Masculino'}}>{ children }</GlobalContext.Provider>
}