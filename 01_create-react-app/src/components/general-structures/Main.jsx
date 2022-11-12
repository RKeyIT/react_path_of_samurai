import React from 'react';
import './Main.css';
import Navbar from '../minor-structures/Navbar/Navbar';
import Content from './Content';

const Main = () => {
    return (
        <main className='main'>
            <div className='wrapper'>
                <div className='container'>
                    <div className='main-grid-container'>
                        <Navbar />
                        <Content />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
