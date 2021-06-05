import React from 'react';
import './Bottomrow.css'

const Bottomrow = ( props ) => {  
    return(
    	<div className='bottom-row'>
    		<div className='bottom-left'>
    			<div className='lightbright-h1'>
    				<h1>Lite<br/>Brite</h1>
    			</div>
                <div className='flag'>Made in React</div>
    		</div>	
    		<div className='bottom-right'>
                <div className='lightbright-circle'> 
                    <div className='antenna'></div>
                    <div className='lightbright-tv'>
                        <div className='lightbright-image'></div>
                    </div>
                    <div className='tv-legs'>
                        <div className='leg'></div>
                        <div className='leg'></div>
                    </div>
                </div>
                <div className='click'><h1>Click!</h1></div>
                <div className='star'></div>
            </div>	
        </div>
    ); 
}

export default Bottomrow;
