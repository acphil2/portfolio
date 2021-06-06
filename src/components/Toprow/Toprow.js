import React from 'react';
import './Toprow.css'

const Toprow = ( props ) => {  
    return(
    	<div className='top-row'>
    		<div className='top-left'>
    			<div className='h1'>
    				<h1>Alexis<br/>Phillips</h1>
    			</div>
    		</div>	
    		<div className='top-right'>
                <div className='portfolio-circle'>
                    <h1 className='portfolio-h1'> PORTFOLIO</h1>
                    <div className='portfolio-paragraph'>
                        <h3 className='html bullet'>HTML</h3>
                        <h3 className=' bullet'>•</h3>
                        <h3 className='css bullet'>CSS</h3>
                        <h3 className=' bullet'>•</h3>
                        <h3 className='javascript bullet'>JAVASCRIPT</h3>
                        <h3 className=' bullet'>•</h3>
                        <h3 className='react bullet'>REACT</h3>
                        <h3 className=' bullet'>•</h3>
                        <h3 className='bootstrap bullet'>BOOTSTRAP</h3>
                        <h3 className=' bullet'>•</h3>
                        <h3 className='github bullet'>GIT</h3>
                    </div>  
                    <a href='https://github.com/acphil2' target='_blank' rel='noreferrer'><div className='my-github'>GITHUB</div></a>
                </div>      
            </div>	
		</div>
    ); 
}

export default Toprow;