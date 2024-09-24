import React from 'react';
import './Middlerow.css';
import gameImage from '../../Assets/images/game-ui.png';


const Middlerow = ( props ) => {  
    return(
    	<div className='middle-row row'>
    	    <div className='middle-left col-md-4'>
                <div className='holly-ui-img'>
                    <img src={gameImage} className='img-fluid' />
                </div>
            </div>	
    		<div className='middle-right col-md-8'>
    			<a href='https://acphil2.github.io/game/' target='_blank' rel='noreferrer'>
                    <div className='holly'>
    				    <h2>Holly Haunted</h2>
    			    </div>
                </a>
                <div className='circle'>
                        <a href='https://acphil2.github.io/game/' target='_blank' rel='noreferrer'>
                            <div className='holly-image'></div>
                        </a>
                    <div className='paragraph'>
                        <i>Holly Haunted</i><br/> is a game made with React
                    </div>
                </div>
    		</div>	
	    </div>
    ); 
}

export default Middlerow;