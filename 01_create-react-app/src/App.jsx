// EDITED VERSION \/

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
// import Main from './components/Main/Main';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='wrapper-app'>
                <Header />
                <main className="main">
                    <div className='container'>
                        <div className="grid_container">
                            <Navbar />
                            <div className="content">

                                <Routes>
                                    <Route path="/profile" element={<Profile />} />
                                    <Route path="/dialogues" element={<Dialogues />}/>
                                </Routes>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;

// BASIC VERSION \/

// import logo from './logo.svg';
// import './App.css';

// function App() {
//     return (
//         <div classNameName='App'>
//             <header classNameName='App-header'>
//                 <img src={logo} classNameName='App-logo' alt='logo' />
//                 <p>
//                     <span style={{ color: '#61DAFB' }}>
//                         [01_create-react-app]
//                     </span>{' '}
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     classNameName='App-link'
//                     href='https://reactjs.org'
//                     target='_blank'
//                     rel='noopener noreferrer'>
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

// export default App;
