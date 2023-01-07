import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import {Provider} from "react-redux";

let root = ReactDOM.createRoot(document.getElementById('root'));
let renderApp = () => {
    root.render(
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

renderApp(store.getState())

reportWebVitals();
