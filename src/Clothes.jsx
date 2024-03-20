import React, { useEffect } from 'react';
import './Clothes.css';
import fitforecastLogoImg from './fitforecast logo.png';
import jacketsBackground from './rainclothes.webp';
import rainImg from './rain.png';
import snowImg from './snowicon.png';
import sunImg from './sunicon.png';
import windImg from './windicon.png';




function ClothesPage() {
    useEffect(() => {
        // Function to update the date
        const updateDate = () => {
            const currentDate = new Date();
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1; // Months are zero-based
            const year = currentDate.getFullYear();
            const dateString = `${day}/${month}/${year}`;
            document.getElementById('date').innerHTML = dateString;
        };

        updateDate(); // Call the function once when the component mounts
    }, []);

    return (
        <div className="BackgroundImage">
            <img src={jacketsBackground} alt="Background" className="Image"/>
            <a href="" className="logo-link">
                <img src={fitforecastLogoImg} alt="Logo" className="logo"/>
            </a>
            <div className="overlay" style={{top: '15%'}}>
                <div className="text-container">
                    <div className="sunny">
                        <h1>Clothing Info</h1>
                    </div>
                    <div className="location text-box">
                        <p className="location">See what FitForecast recommends you wear on your run today!</p>
                    </div>
                    <div className="date">
                        <div id="date"></div>
                    </div>
                </div>
            </div>
            <div className="overlay2" style={{top: '28%'}}>
                <div className="text-container2">
                    <img src={sunImg} alt="wind" className="sun"/>
                    <div className="header">
                        <h1></h1>
                    </div>
                    <div className="Info">
                        <p>
                            <ul>
                                <li>Choose a lightweight, breathable, and moisture-wicking shirt</li>
                                <li>Opt for lightweight and breathable hiking shorts or convertible trousers</li>
                                <li>Wear lightweight and breathable hiking shoes or trail running shoes with good grip </li>
                            </ul>
                        </p>
                    </div>
                    <div className="location text-box">
                        <p className="location2"></p>
                    </div>

                    <div className="date">
                        <div id="date2"></div>
                    </div>
                </div>
            </div>

            <div className="overlay3" style={{top: '63%'}}>
                <div className="text-container3">
                    <img src={windImg} alt="wind" className="wind"/>
                    <div className="header">
                        <h1></h1>
                    </div>
                    <div className="Info">
                        <p>
                            <ul>
                                <li>A wind-resistant or windproof jacket is crucial to block out cold air and maintain  heat</li>
                                <li>Wear a pair of durable and wind-resistant trousers, such as those made by Columbia or Arc'teryx</li>
                                <li>Don't forget a windproof hat or beanie to keep your head warm</li>
                            </ul>
                        </p>
                    </div>
                    <div className="location text-box">
                        <p className="location3"></p>
                    </div>
                    <div className="date">
                        <div id="date3"></div>
                    </div>
                </div>
            </div>
            <div className="overlay4" style={{top: '28%'}}>
                <div className="text-container4">
                    <img src={snowImg} alt="snow" className="snow"/>
                    <div className="header">
                        <h1></h1>
                    </div>
                    <div className="Info">
                        <p>
                            <ul>
                                <li>A moisture-wicking base layer followed by a warm insulating layer, such as a fleece jacket.</li>
                                <li>Wear insulated waterproof pants or snow pants to keep your legs warm and dry</li>
                                <li>Invest in insulated waterproof hiking boots with good traction for walking on snow-covered trails</li>
                            </ul>
                        </p>
                    </div>
                    <div className="location text-box">
                        <p className="location4"></p>
                    </div>
                    <div className="date">
                        <div id="date4"></div>
                    </div>
                </div>
            </div>
            <div className="overlay5" style={{top: '63%'}}>
                <div className="text-container4">
                    <img src={rainImg} alt="rain" className="rain"/>
                </div>
                <div className="header">
                    <h1></h1>
                </div>
                <div className="Info">
                    <p>
                        <ul>
                            <li>Wear a waterproof and breathable rain jacket to keep you dry in wet weather</li>
                            <li>Invest in waterproof rain pants or overpants to keep your lower body dry and comfortable</li>
                            <li>Wear waterproof hiking boots or shoes with Gore-Tex or similar waterproof membranes to keep your feet dry in rainy conditions.</li>
                        </ul>
                    </p>
                </div>
                <div className="location text-box">
                    <p className="location5"></p>
                </div>
                <div className="date">
                    <div id="date5"></div>
                </div>
            </div>
        </div>

    );
}

export default ClothesPage;
