import React from "react";
import Slide from "./Slide";

const App = () => {

  const slides = [{
    id:'slide1',
    text: 'Esse é o slide 1',
  },
  {
    id:'slide2',
    text: 'Esse é o slide 2',
  },
  {
    id:'slide3',
    text: 'Esse é o slide 3',
  }]

  return (
    <>
      <Slide slides={slides}/>
    </>
  )
}

export default App
