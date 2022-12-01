import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'

let root = ReactDOM.createRoot(document.getElementById('root'));
let renderApp = (state) => {
    root.render(
        <React.StrictMode>
            <App state={store.getState()} actions={store.actions}/>
        </React.StrictMode>
    );
}

// Исследовать тему подробнее:
// Данные. Без следующего рендера - не рисуется апп.
store.subscribe(renderApp)
// Отрисовка - без сабскрайб не работают отправки текстарии
renderApp(store.getState())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
