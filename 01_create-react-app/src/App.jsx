// EDITED VERSION \/

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Pages/Profile/Profile";
import Dialogues from "./components/Pages/Dialogues/Dialogues";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {

    // Object props receives
    // 1. ContactsData
    // 2. MessagesData
    // 3. PostData
    //

    return (
        <BrowserRouter>
            <div className='wrapper-app'>
                <Header />
                <Navbar />
                <main className="main">
                    <Routes>
                        <Route path="/profile/*" element={<Profile PostData={props.PostData}/>}/>
                        <Route path="/dialogues/*" element={<Dialogues ContactsData={props.ContactsData}
                                                                       MessagesData={props.MessagesData}/>}/>
                        <Route path="/community/*"></Route> element={}
                        <Route path="/settings/*"></Route> element={}
                        <Route path="/learnings/*"></Route> element={}
                        <Route path="/teaching/*"></Route> element={}
                        <Route path="/content/*"></Route> element={}
                        <Route path="/donate/*"></Route> element={}
                        <Route path="//*"></Route> element={}
                    </Routes>
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
