import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import StoreContext from "./StoreContext";

let root = ReactDOM.createRoot(document.getElementById('root'));
let renderApp = (state) => {
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                {/*<App state={state}*/}
                {/*     dispatch={store.dispatch.bind(store)}*/}
                {/*     store={store}*/}
                {/*/>*/}
                <App />
            </StoreContext.Provider>
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
