import React from 'react';
import './Main.css';
import Navbar from './minor-structures/Navbar/Navbar';
import Statusbar from './minor-structures/Statusbar/Statusbar';

const Main = () => {
    return (
        <main className='main'>
            <div className='wrapper'>
                <div className='container'>
                    <div className='main-grid-container'>
                        <Navbar />
                        <div className='content'>
                            <Statusbar />

                            <div>ava + descr</div>
                            <div>
                                my posts
                                <div>new post</div>
                                <div>posted 1</div>
                                <div>posted 2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
