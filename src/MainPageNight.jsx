// import React, { useState, useEffect } from 'react';
// import './MainPageSunny.css';
// import MainPageNight from './MainPageNight'; // Import MainPageNight component
// import eiffeltowerImg from './eiffeltower.jpg'; // Import eiffeltower image
// import fitforecastLogoImg from './fitforecast logo.png'; // Import fitforecast logo image
// import searchLogoImg from './search logo.png'; // Import search logo image
// import rainImg from './rain.png'; // Import rain image
// import tshirtlogoImg from './tshirtlogo.png'; // Import tshirtlogo image
// import pfplogoImg from './pfplogo.png'; // Import pfplogo image
// import glasswaterImg from './glasswater.png'; // Import glasswater image
// import greyBoxesImg from './grey boxes2.png'; // Import grey boxes image

// function MainPageSunny() {
//     const [isDayTime, setIsDayTime] = useState(true);

//     useEffect(() => {
//         const determineTimeOfDay = () => {
//             const currentHour = new Date().getHours();
//             setIsDayTime(currentHour >= 6 && currentHour < 18); // Assume daytime between 6 AM and 6 PM
//         };

//         determineTimeOfDay(); // Determine time of day when component mounts

//         const interval = setInterval(determineTimeOfDay, 60000); // Check every minute for time updates

//         return () => clearInterval(interval); // Cleanup interval on component unmount
//     }, []); // Empty dependency array ensures useEffect runs only once

//     if (!isDayTime) {
//         return <MainPageNight />;
//     }

//     // Daytime content rendering
//     return (
//         <div className="background">
//             {/* Render daytime content */}
//             <img src={eiffeltowerImg} alt="Logo" className="background-image" />
//             <img src={fitforecastLogoImg} alt="Logo" className="logo" />
//             <div className="overlay" style={{ top: '20%' }}>
//                 <img src={searchLogoImg} alt="Logo" className="searchLogo" />
//                 <div className="text-container">
//                     <div className="sunny text-box">
//                         <h1>Sunny</h1>
//                     </div>
//                     <div className="location text-box">
//                         <p className="location">Mile End</p>
//                     </div>
//                 </div>
//             </div>

//             <div className="overlay2" style={{ top: '50%' }}>
//                 <div className="text-container">
//                     <h1>Box 2</h1>
//                     <p className="location"></p>
//                     <p className="temperature"></p>
//                 </div>
//             </div>

//             <div className="overlay3" style={{ top: '80%' }}>
//                 <div className="text-container">
//                     <a href="">
//                         <img src={greyBoxesImg} alt="Logo" className="greybox"/>
//                         <img src={rainImg} alt="Logo" className="greybox"/>
//                     </a>
//                     <a href="">
//                         <img src={greyBoxesImg} alt="Logo" className="greybox2"/>
//                         <img src={tshirtlogoImg} alt="Logo" className="greybox2"/>
//                     </a>

//                     <img src={pfplogoImg} alt="Logo" className="greybox3"/>
//                     <img src={greyBoxesImg} alt="Logo" className="greybox3"/>

//                     <a href="">
//                         <img src={greyBoxesImg} alt="Logo" className="greybox4"/>
//                         <img src={glasswaterImg} alt="Logo" className="greybox4"/>
//                     </a>
//                     <p className="location"></p>
//                     <p className="temperature"></p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MainPageSunny;

import React, { useState, useEffect } from 'react';
//import './MainPageSunny.css';
import './sunnyandnight.css'
import MainPageNight from './MainPageNight'; // Import MainPageNight component
import petronas from './petronas.jpeg'; // Import eiffeltower image
import fitforecastLogoImg from './fitforecast logo.png'; // Import fitforecast logo image
import searchLogoImg from './search2.png';
import rainImg from './rain.png'; // Import rain image
import tshirtlogoImg from './tshirt.png'; // Import tshirtlogo image
import pfplogoImg from './pfplogo.png'; // Import pfplogo image
import glasswaterImg from './glasswater.png'; // Import glasswater image
import greyBoxesImg from './grey boxes2.png'; // Import grey boxes image
import glass2Img from './glass2.png'
import bigbenImg from './bigbennight.jpg';
import macauImg from './macau.jpg';
import notredamImg from './notredam.jpg'
import goldengateImg from './goldengate.jpg';
import eiffelImg from './eiffeltower2.jpg'
import lisbonImg from './lisbon.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomePage from "./WelcomePage";
import { useNavigate } from 'react-router-dom';
import romeImg from "./rome.jpg";
import hạlongbayImg from "./halongbay.jpg";
import mountrushmoreImg from "./mountrushmore.jpg";
import londoneyeImg from "./londoneye.jpg";
import greatwallImg from "./wallofchina.jpeg";
import tajmahalimg from "./tajmahal.jpg";
const backgroundImages = [macauImg, petronas, notredamImg, bigbenImg, eiffelImg, lisbonImg,goldengateImg];
function MainPageSunny() {
    const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
    const [isDayTime, setIsDayTime] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBackgroundIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
        }, 20000); // Change image every 20 seconds

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
                <img src={fitforecastLogoImg} alt="Logo" className="fit-logo" />
            </a>
            <div className="overlay" style={{ top: '20%' }}>
                <img src={searchLogoImg} alt="Logo" className="searchLogo" />
                <div className="text-container">
                    <div className="sunny text-box">
                        <h1>Sunny</h1>
                    </div>
                    <div className="location text-box">
                        <p className="location">Mile End</p>
                    </div>
                </div>
            </div>

            <div className="overlay2" style={{ top: '50%' }}>
                <div className="text-container">
                    <h1>Box 2</h1>
                    <p className="location"></p>
                    <p className="temperature"></p>
                </div>
            </div>

            <div className="overlay3" style={{ top: '80%' }}>
                <div className="text-container">
                    <a href="">
                        <img src={greyBoxesImg} alt="Logo" className="greybox"/>
                        <img src={rainImg} alt="Logo" className="greybox"/>
                    </a>
                    <a href="clothes">
                        <img src={greyBoxesImg} alt="Logo" className="greybox2"/>
                        <img src={tshirtlogoImg} alt="Logo" className="greybox2"/>
                    </a>

                    <img src={pfplogoImg} alt="Logo" className="greybox3"/>
                    <img src={greyBoxesImg} alt="Logo" className="greybox3"/>

                    <a href="">
                        <img src={greyBoxesImg} alt="Logo" className="greybox4"/>
                        <img src={glass2Img} alt="Logo" className="greybox4"/>
                    </a>
                    <p className="location"></p>
                    <p className="temperature"></p>
                </div>
            </div>
        </div>
    );
}

export default MainPageSunny;
