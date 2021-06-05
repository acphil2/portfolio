import React from 'react';
import './style.css';
import Toprow from './components/Toprow/Toprow';
import Middlerow from './components/Middlerow/Middlerow';
import Bottomrow from './components/Bottomrow/Bottomrow';

const App = ( props ) => {  
    return(
      <div className='App'>
      	<div className='main'>
	        <Toprow/>
	        <Middlerow/>
	        <Bottomrow/>
	    </div>
      </div>
    ); 
}

export default App;