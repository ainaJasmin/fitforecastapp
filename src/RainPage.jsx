import React from 'react';
import './RainPage.css';
import rainVideo from './Rain_Drops_1.mp4';
import greyBoxesImg from './grey boxes2.png';
import fitforecastLogoImg from './fitforecast logo.png';
import humidImg from './humidity.png'
import windImg from "./windicon.png";


function RainPage() {
    return (
        <div className="BackgroundImage">
            <video autoPlay loop muted className="Welcome-Background">
                <source src={rainVideo} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <a href="/">
                <img src={fitforecastLogoImg} alt="Logo" className="fit-logo"/>
            </a>
            <div className="rain-overlay1" style={{ top: '75%' }}>

            </div>
            <div className="rain-overlay2" style={{ top: '75%' }}>

            </div>
            <div className="rain-overlay3" style={{ top: '75%' }}>

            </div>
            <div className="rain-overlay4" style={{top: '30%'}}>
                <img src={humidImg} alt="Logo" className="humid"/>
            </div>
            <div className="rain-overlay5" style={{top: '30%'}}>
                <img src={windImg} alt="Logo" className="wind"/>
            </div>
            <div className="rain-overlay6" style={{top: '30%'}}>
                <img src={windImg} alt="Logo" className="rain-wind"/>
            </div>

        </div>
    );
}

export default RainPage;