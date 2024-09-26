import React from 'react';
import './Middlerow.css';
import gameUiImage from '../../Assets/images/game-ui.png';
import gameLogo from '../../Assets/images/holly-haunted-logo-light.png';
import hollyCharacter from '../../Assets/images/holly.PNG';


const Middlerow = (props) => {
    return (
        <div className='middle-row row' id='holly'>
            <div className='middle-left col-lg-6 col-md-12'>
                <a href='https://acphil2.github.io/game' target='_blank' rel='noreferrer'>
                    <img src={hollyCharacter} className='holly-img' alt="Holly Haunted Character" />
                </a>
                <a href='https://acphil2.github.io/game' target='_blank' rel='noreferrer'>
                    <div className='holly-logo-container'>
                        <img src={gameLogo} className='holly-logo-img' alt="Holly Haunted Game UI" />
                    </div>
                </a>
                <p>
                    Put out all of the candles before the ghosts can relight them while exploring a haunted Victorian mansion. Coded in JavaScript, <i>Holly Haunted</i> is an original RPG game built with React. Use keyboard arrows to navigate and spacebar to blow out candles.
                </p>
                <a href='https://acphil2.github.io/game' target='_blank' rel='noreferrer'>
                    <div type="button" class="btn btn-outline-primary">PLAY NOW</div>
                </a>
            </div>
            <div className='middle-right col-lg-6 col-md-12'>
                <div className='holly-ui-img-container'>
                    <a href='https://acphil2.github.io/game' target='_blank' rel='noreferrer'>
                        <img src={gameUiImage} className='img-fluid holly-ui-img' alt="Holly Haunted Game UI" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Middlerow;