import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import DialoguesLogic from "./components/Pages/Dialogues/DialoguesLogic";
import NavbarLogic from "./components/Navbar/Navbar";
import ProfileLogic from "./components/Pages/Profile/ProfileLogic";
import CommunityLogic from "./components/Pages/Community/CommunityLogic";
import NotFound from "./components/Pages/NotFound/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <div className='wrapper-app'>
                <Header/>
                <NavbarLogic/>
                    <main className="main">
                        <div className="content">
                            <Routes>
                                <Route path="*" element={<NotFound/>}/>
                                <Route path="/" element={<ProfileLogic/>}/>
                                <Route path="/profile" element={<ProfileLogic/>}/>
                                <Route path="/profile/:userId" element={<ProfileLogic/>}/>
                                <Route path="/dialogues/*" element={<DialoguesLogic/>}/>
                                <Route path="/community/*" element={<CommunityLogic/>}/>
                                <Route path="/settings/*"></Route> element={}
                                <Route path="/learnings/*"></Route> element={}
                                <Route path="/teaching/*"></Route> element={}
                                <Route path="/content/*"></Route> element={}
                                <Route path="/donate/*"></Route> element={}
                                <Route path="//*"></Route> element={}
                            </Routes>
                        </div>
                    </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;