import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Pages/Profile/Profile";
import Dialogues from "./components/Pages/Dialogues/Dialogues";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='wrapper-app'>
                <Header />
                <Navbar state={props.state.navbarData}/>
                <main className="main">
                    <Routes>
                        <Route path="/profile/*" element={<Profile
                            state={props.state.profilePage}
                            dispatch={props.dispatch}
                        />}/>
                        <Route path="/dialogues/*" element={<Dialogues
                            state={props.state.dialoguesPage}
                            dispatch={props.dispatch}
                        />}/>
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