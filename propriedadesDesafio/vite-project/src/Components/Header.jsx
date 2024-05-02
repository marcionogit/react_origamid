import React from 'react'
import Links from "./Links"
import Titulos from "./Titulos"

const Header = () => {
  return (
    <header>
    <li>
      <Links link='home' id='home' caminho="HOME"/>
    </li>
    <li>
      <Links link='projetos' id='projetos' caminho="PROJETOS"/>
    </li>
    <Titulos nome="HOME" cor='#44805D'/>
  </header>
  )
}

export default Header
