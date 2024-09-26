import React from 'react';
import './Bottomrow.css'

const Bottomrow = (props) => {
    return (
        <div className='bottom-row row' id="litebrite">
            <div className='bottom-left col-lg-6 col-md-12'>
                <a href='https://acphil2.github.io/light-board/' target='_blank' rel='noreferrer'>
                    <h2>LITE•BRITE</h2>
                </a>
                <p>Inspired by the iconic light box toy, this project was programmed in JavaScript and built with React. By clicking lightbulbs and the color palette, users can illuminate the board to create custom designs.</p>
                <a href='https://acphil2.github.io/light-board/' target='_blank' rel='noreferrer'>
                    <div type="button" class="btn btn-outline-primary">PLAY NOW</div>
                </a>
            </div>
            <div className='bottom-right col-lg-6 col-md-12'>
                <div className='antenna'></div>
                <a href='https://acphil2.github.io/light-board/' target='_blank' rel='noreferrer'>
                    <div className='lightbright-tv'>
                        <div className='lightbright-image'></div>
                    </div>
                    <div className='tv-legs'>
                        <div className='leg'></div>
                        <div className='leg'></div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Bottomrow;
