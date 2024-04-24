import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form/Form";

const Verification = () =>{

  const verification = false;
  
  if(verification){
    return <p>teste</p>;
  } else{
    
    return null;
  }
}


const  App = () => {
  return (
  <>
   <Verification />
   <Header />
   <Form />
   <Footer />
  </>
)
}

export default App;
