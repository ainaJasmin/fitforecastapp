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
import { isLabelWithInternallyDisabledControl, wait } from '@testing-library/user-event/dist/utils';


function WelcomePage() {

    let nav = useNavigate();

    let move = (path) => {
        nav(path);
    }

    const [locName, setLoc] = useState('');
    localStorage.setItem("lat", 0);
    localStorage.setItem("lon", 0);
    localStorage.setItem("name", 'n/a');


    // sets weather data to local storage
    // as localStorage can only hold strings, i store in order time, temp, feels_like, weather, for each time
    function getWeatherData() {
        const apiKey = '6ba3ee5ac50af61f21d2136ac5dab42c';
        const weatherApiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${localStorage.getItem("lat")}&lon=${localStorage.getItem("lon")}&appid=${apiKey}&units=metric`;

        fetch(weatherApiURL)
            .then(response=>response.json())
            .then(data => {
                localStorage.setItem("numForecasts", data.cnt);
                //console.log(data);
                let forecasts = data.list;
                for (let i = 0; i < data.cnt; i++) {
                    let dt = new Date(forecasts[i].dt * 1000);
                    localStorage.setItem(`forecast${i}`, `${dt.getHours()} ${forecasts[i].main.temp} ${forecasts[i].main.feels_like} ${forecasts[i].weather[0].main} ${forecasts[i].wind.speed}`);
                }
            })
            .catch(err => console.log(err));
    }

    function searchCity() {
        const apiKey = '6ba3ee5ac50af61f21d2136ac5dab42c';
        const geocodingApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${locName}&limit=1&appid=${apiKey}`

        fetch(geocodingApiUrl)
            .then(response=>response.json())
            .then(data=> {
                if (data.length>0) {
                    localStorage.setItem("lat", data[0].lat);
                    localStorage.setItem("lon", data[0].lon);
                    localStorage.setItem("name", data[0].name);
                    //console.log(`Name=${localStorage.getItem("name")} Lat=${localStorage.getItem("lat")} Lon=${localStorage.getItem("lon")}`);
                    getWeatherData();
                    move("/main");
                } else {
                    console.log("API Response Not As Expected");
                }
            })
            .catch(err=>console.log(err));
    }

    function handleClick() {
        if (locName == "") {
            alert("Please enter a location name.");
        }
        else {
            searchCity();
        }
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












