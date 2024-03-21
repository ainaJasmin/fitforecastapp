// import React from 'react';
// import MainPageSunny from './MainPageSunny';
// import Clothes from './Clothes'; // Import the Forum component

// function App() {
//     return (
//         <div>
//             <WelcomePage />
//             <MainPageSunny /> {/* Render the MainPageSunny component */}
//         </div>
//     );
// }

// export default App;
import React from 'react';
import MainPageSunny from './MainPageSunny';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClothesPage from './Clothes';
import WelcomePage from './WelcomePage';
import HydrationPage from './HydrationPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element ={<WelcomePage />} />
                <Route path='welcome' element ={<WelcomePage />} />
                <Route path="main" element={<MainPageSunny />} />
                <Route path="clothes" element={<ClothesPage />} />
                <Route path="hydration" element={<HydrationPage />} />
            </Routes>
        </Router>
    );
}

export default App;