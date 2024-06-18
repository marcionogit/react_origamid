import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    const search = new URLSearchParams(location.search);
    console.log(search.get('q'));
    console.log('Toda vez que a rota mudar');
  }, [location]);

  return <div></div>;
};


export default Header
