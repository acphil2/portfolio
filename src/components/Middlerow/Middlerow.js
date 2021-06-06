import React from 'react';
import './Middlerow.css';


const Middlerow = ( props ) => {  
    return(
    	<div className='middle-row'>
    	    <div className='middle-left'>
                <div className='circle'>
                    <div className='two'>
                        <div className='holly-image'></div>
                        <a href='https://acphil2.github.io/game/' target='_blank' rel='noreferrer'>
                            <div className='play-now'>
                                <h2>PLAY<br/>NOW</h2>
                            </div>
                        </a>
                    </div>
                    <div className='paragraph'>
                        <i>Holly Haunted</i><br/> is a game made with React
                    </div>
                </div>
            </div>	
    		<div className='middle-right'>
    			<a href='https://acphil2.github.io/game/' target='_blank' rel='noreferrer'>
                    <div className='holly'>
    				    <h1>Holly<br/>Haunted</h1>
    			    </div>
                </a>
    		</div>	
	    </div>
    ); 
}

export default Middlerow;