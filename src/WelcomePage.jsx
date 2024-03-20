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

import React, { useEffect } from 'react';
import './WelcomePage.css';
import MountainImg from './Mountain2.webp';
import BlueBarImg from "./bluebar.png"
import LogoImg from "./fitforecast logo.png"
import searchImg from "./search logo.png"


function WelcomePage() {

    function clickSearch(city) {
        const apiKey = '6ba3ee5ac50af61f21d2136ac5dab42c';
        const geocodingApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    
        let latitude, longitude;

        fetch(geocodingApiUrl)
            .then(response=>response.json())
            .then(data=> {
                if (data.length>0) {
                    latitude = data[0].lat;
                    longitude = data[0].lon;
                    


                } else {
                    latitude = 0;
                    longitude = 0;
                }
            })
            .catch(err=>console.log(err))
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
                            <input type="text" id="location" placeholder="Search Location" className="SearchBar"/>
                        </div>

                        <div className="Icon">
                            <a href='/main'><img src={searchImg} alt="Search Icon" className="Search"/></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default WelcomePage;












