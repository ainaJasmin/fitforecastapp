// import React, { useEffect } from 'react';
// import './WelcomePage.css';
// import MountainImg from './Mountain2.webp';
// import BlueBarImg from "./bluebar.png"
// import LogoImg from "./fitforecast logo.png"
// import SmallBarImg from "./BlueBarSmall.png"
// import searchImg from "./search logo.png"


// function WelcomePage() {
//     return (
//         <div className="BackgroundImage">
//             <img src={MountainImg} alt="Wallpaper" className="Background" />
//             <div className="Overlay" style={{ top: '15%' }}>
//                 <img src={BlueBarImg} alt="TaskBar" className="BlueBar" />
//                 <div className="text-container">
//                     <div className="FitForecast">
//                         <h1>FitForecast</h1>
//                         <div className="Slogan">
//                             <h1>Weather on the go</h1>
//                         </div>
//                         <div className="Logo">
//                             <img src={LogoImg} alt="Logo" className="FitLogo"/>
//                         </div>
//                         <div className="Bar">
//                             <input type="text" id="location" placeholder="Search Location" className="SearchBar"/>
//                         </div>

//                         <div className="Icon">
//                             <img src={searchImg} alt="Search Icon" className="Search"/>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>

//     )
//         ;
// }


// export default WelcomePage;

import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';
import MountainImg from './Mountain2.webp';
import BlueBarImg from "./bluebar.png"
import LogoImg from "./fitforecast logo.png"
import searchImg from "./search logo.png"
import { wait } from '@testing-library/user-event/dist/utils';


function WelcomePage() {

    let nav = useNavigate();

    let moveToMain = () => {
        nav("/main");
    }

    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const [locName, setLoc] = useState('');

    function searchCity() {
        const apiKey = '6ba3ee5ac50af61f21d2136ac5dab42c';
        const geocodingApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${locName}&limit=1&appid=${apiKey}`;
    
        fetch(geocodingApiUrl)
            .then(response=>response.json())
            .then(data=> {
                if (data.length>0) {
                    console.log(data[0].lat + " " + data[0].lon);
                    setLat(data[0].lat);
                    setLon(data[0].lon);
                    localStorage.setItem("lat", lat);
                    localStorage.setItem("lon", lon);
                    console.log(`State: lat=${lat} lon=${lon}`);
                    console.log(`Local Storage: lat=${localStorage.getItem("lat")} lon=${localStorage.getItem("lon")}`);
                } else {
                    console.log("API Response Not As Expected");
                }
            })
            .catch(err=>console.log(err))
    }

    function handleClick() {
        searchCity();
    }


    return (
        <div className="BackgroundImage">
            <img src={MountainImg} alt="Wallpaper" className="Background" />
            <div className="Overlay" style={{ top: '15%' }}>
                <img src={BlueBarImg} alt="TaskBar" className="BlueBar" />
                <div className="text-container">
                    <div className="FitForecast">
                        <h1>FitForecast</h1>
                        <div className="Slogan">
                            <h1>Weather on the go</h1>
                        </div>
                        <div className="Logo">
                            <img src={LogoImg} alt="Logo" className="FitLogo"/>
                        </div>
                        <div className="Bar">
                            <input type="text" id="location" placeholder="Search Location" className="SearchBar" onChange={(e) => setLoc(e.target.value)}/>
                        </div>

                        <div className="Icon">
                            <img src={searchImg} alt="Search Icon" className="Search" onClick={handleClick}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default WelcomePage;












