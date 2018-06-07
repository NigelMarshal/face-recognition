import React from 'react';

const Navigation = ({onrouteChange, isSignedIn}) => {

    if(isSignedIn){
      return(
      <nav style ={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onrouteChange('signout')} className='f3 link dim black underline pa3 pointer'> Sign out </p>
      </nav>
    );
    } else{
      return(
      <nav style ={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onrouteChange('signin')} className='f3 link dim black underline pa3 pointer'> Sign In </p>
        <p onClick={() => onrouteChange('register')} className='f3 link dim black underline pa3 pointer'> Register </p>
      </nav>
    );
    }
}

export default Navigation;
