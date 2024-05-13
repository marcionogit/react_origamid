import React from 'react'

const UseLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(()=>{
    const localStorage = window.localStorage.getItem(key);
    return localStorage ? localStorage : inicial;

  })

  React.useEffect(()=>{
    window.localStorage.setItem(key, state);
  }, [state, key])
  return (
    [state, setState]
  )
}

export default UseLocalStorage
