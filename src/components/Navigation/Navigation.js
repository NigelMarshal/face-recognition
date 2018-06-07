import React from 'react';

const Navigation = ({onrouteChange}) => {
  return (
    <nav style ={{display: 'flex', justifyContent: 'flex-end'}}>
      <p onClick={() => onrouteChange('signin')} className='f3 link dim black underline pa3 pointer'> Sign out </p>
    </nav>
  );
}

export default Navigation;
