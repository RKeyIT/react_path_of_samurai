import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import {Provider} from "react-redux";

let root = ReactDOM.createRoot(document.getElementById('root'));
let renderApp = (state) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
}

renderApp(store.getState())
store.subscribe(() => renderApp(store.getState()))
// store.subscribe(() => {
//     let state = store.getState()
//     renderApp(state)
// })

reportWebVitals();
