import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ProfileLogic from "./components/Pages/Profile/ProfileLogic";
import DialoguesLogic from "./components/Pages/Dialogues/DialoguesLogic";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='wrapper-app'>
                <Header />
                <Navbar />
                <main className="main">
                    <Routes>
                        <Route path="/profile/*" element={<ProfileLogic />}/>
                        <Route path="/dialogues/*" element={<DialoguesLogic />}/>
                        <Route path="/community/*"></Route> element={}
                        <Route path="/settings/*"></Route> element={}
                        <Route path="/learnings/*"></Route> element={}
                        <Route path="/teaching/*"></Route> element={}
                        <Route path="/content/*"></Route> element={}
                        <Route path="/donate/*"></Route> element={}
                        <Route path="//*"></Route> element={}
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;