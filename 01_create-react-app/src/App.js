// EDITED VERSION \/

import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <Technologies />
            <ChtotoTipaTega />
        </div>
    );
};

const ChtotoTipaTega = () => {
    return <div>Kakoe-to slovo</div>;
};

const Technologies = () => {
    return (
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
        </ul>
    );
};

const Header = () => {
    return (
        <div class='header'>
            <div class='container'>
                <div class='header-content'>
                    <div class='logo'></div>
                    <div class='header-menu'>
                        <ul>
                            <a href='#'>
                                <li>button_1</li>
                            </a>
                            <a href='#'>
                                <li>button_2</li>
                            </a>
                            <a href='#'>
                                <li>button_3</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

// BASIC VERSION \/

// import logo from './logo.svg';
// import './App.css';

// function App() {
//     return (
//         <div className='App'>
//             <header className='App-header'>
//                 <img src={logo} className='App-logo' alt='logo' />
//                 <p>
//                     <span style={{ color: '#61DAFB' }}>
//                         [01_create-react-app]
//                     </span>{' '}
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className='App-link'
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
