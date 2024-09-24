import React from 'react';
import './Bottomrow.css'

const Bottomrow = ( props ) => {  
    return(
    	<div className='bottom-row row'>
    		<div className='bottom-left'>
                <a href='https://acphil2.github.io/light-board/' target='_blank' rel='noreferrer'>
            		<div className='lightbright-h1'>
            			<h2>Lite•Brite</h2>
            		</div>
                </a>
                <div className='flag'>Made in React</div>
    		</div>	
    		<div className='bottom-right'>
                <a href='https://acphil2.github.io/light-board/' target='_blank' rel='noreferrer'>
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
                </a>
                <a href='https://acphil2.github.io/light-board/' target='_blank' rel='noreferrer'>
                    <div className='click'><h1>Click!</h1></div>
                </a>
                <a href='https://acphil2.github.io/light-board/' target='_blank' rel='noreferrer'>
                    <div className='star'></div>
                </a>
            </div>	
        </div>
    ); 
}

export default Bottomrow;
