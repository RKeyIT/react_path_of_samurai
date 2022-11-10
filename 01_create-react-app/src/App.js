// EDITED VERSION \/

import React from 'react';
import './App.css';
import Header from './components/Header';

const App = () => {
    return (
        <div className='wrapper-app'>
            <Header />
            <main className='main'>
                <nav className='nav'>
                    <div>
                        <a href='#0'>Profile</a>
                    </div>
                    <div>
                        <a href='#0'>Messages</a>
                    </div>
                    <div>
                        <a href='#0'>News</a>
                    </div>
                    <div>
                        <a href='#0'>Music</a>
                    </div>
                    <div>
                        <a href='#0'>Settings</a>
                    </div>
                </nav>
                <div className='content'>
                    <div className='background-img'>
                        <img
                            className='background_1'
                            src='https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg'
                            alt='background'
                        />
                    </div>
                    <div>ava + descr</div>
                    <div>
                        my posts
                        <div>new post</div>
                        <div>posted 1</div>
                        <div>posted 2</div>
                    </div>
                </div>
            </main>
        </div>
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
