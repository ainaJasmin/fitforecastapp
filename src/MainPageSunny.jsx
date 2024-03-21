import React, { useState, useEffect } from 'react';
import './sunnyandnight.css';
import MainPageNight from './MainPageNight';
import fitforecastLogoImg from './fitforecast logo.png';
import searchLogoImg from './search2.png';
import rainImg from './rain.png';
import tshirtlogoImg from './tshirt.png';
import pfplogoImg from './pfplogo.png';
import glasswaterImg from './glasswater.png';
import greyBoxesImg from './grey boxes2.png';
import glass2Img from './glass2.png';
import towerBridgeImg from './towerbridge1.jpg';
import hạlongbayImg from './halongbay.jpg'
import bigbenImg from './bigben.jpg';
import londoneyeImg from './londoneye.jpg'
import mountrushmoreImg from './mountrushmore.jpg';
import greatwallImg from './wallofchina.jpeg';
import tajmahalimg from './tajmahal.jpg'
import romeImg from './rome.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomePage from "./WelcomePage";
import { useNavigate } from 'react-router-dom';

const backgroundImages = [romeImg, hạlongbayImg, mountrushmoreImg, londoneyeImg, bigbenImg, greatwallImg, tajmahalimg];

function MainPageSunny() {
    const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
    const [isDayTime, setIsDayTime] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBackgroundIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
        }, 10000); // Change image every 20 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []); // Empty dependency array ensures useEffect runs only once

    if (!isDayTime) {
        return <MainPageNight />;
    }
    return (
        <div className="background" style={{
            backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})`,
            transition: 'background-image 1s ease-in-out' // Add transition for background image
        }}>
            <a href="/">
                <img src={fitforecastLogoImg} alt="Logo" className="fit-logo"/>
            </a>
            <div className="overlay" style={{top: '20%'}}>
                <img src={searchLogoImg} alt="Logo" className="searchLogo"/>
                <div className="text-container">
                    <div className="sunny text-box">
                        <h1>Sunny</h1>
                    </div>
                    <div className="location text-box">
                        <p className="location">Mile End</p>
                    </div>
                </div>
            </div>

            <div className="overlay2" style={{top: '50%'}}>
                <div className="text-container">
                    <h1></h1>
                    <p className="location"></p>
                    <p className="temperature"></p>
                </div>
            </div>

            <div className="overlay3" style={{top: '80%'}}>
                <div className="text-container">
                    <a href="">
                        <img src={greyBoxesImg} alt="Logo" className="greybox"/>
                        <img src={rainImg} alt="Logo" className="greybox"/>
                    </a>
                    <a href="clothes">
                        <img src={greyBoxesImg} alt="Logo" className="greybox2"/>
                        <img src={tshirtlogoImg} alt="Logo" className="greyboxtshirt"/>
                    </a>

                    <img src={pfplogoImg} alt="Logo" className="greybox3"/>
                    <img src={greyBoxesImg} alt="Logo" className="greybox3"/>

                    <a href="hydration">
                        <img src={greyBoxesImg} alt="Logo" className="greybox4"/>
                        <img src={glass2Img} alt="Logo" className="greyboxglass"/>
                    </a>
                    <p className="location"></p>
                    <p className="temperature"></p>
                </div>
            </div>
        </div>
    );
}

export default MainPageSunny;
