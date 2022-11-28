import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = () => {
    root.render(
        <React.StrictMode>
            <App state={state} actions={state.actions}/>
        </React.StrictMode>
    );
}

reportWebVitals();

export default renderApp

