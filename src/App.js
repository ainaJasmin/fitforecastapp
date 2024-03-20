import React from 'react';
import MainPageSunny from './MainPageSunny';
import Clothes from './Clothes'; // Import the Forum component

function App() {
    return (
        <div>
            <WelcomePage />
            <MainPageSunny /> {/* Render the MainPageSunny component */}
        </div>
    );
}

export default App;

