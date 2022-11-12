// EDITED VERSION \/

import React from 'react';
import './App.css';
import Header from './components/general-structures/Header';
import Main from './components/general-structures/Main';

const App = () => {
    return (
        <div className='wrapper-app'>
            <Header />
            <Main />
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
