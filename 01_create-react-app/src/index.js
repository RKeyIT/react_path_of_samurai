import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const ContactsData = [
    {id: '0', username: 'PATIENT_ZERO'},
    {id: '1', username: 'NOT_User_NAME'},
    {id: '2', username: 'Kirill Bohateriov'},
    {id: '3', username: ''},
    {id: '4', username: 'Kardan Wislouhij'},
];

const MessagesData = [
    {id: '0', ownerId: 123423, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
            '                        Corporis distinctio perferendis accusamus cupiditate\n' +
            '                        necessitatibus velit! Fugiat officia explicabo, quia quo\n' +
            '                        magnam non saepe! Dicta facilis debitis quae, voluptate\n' +
            '                        aliquam veritatis?'},
    {id: '1', ownerId: 123423, message: 'NOT_User_NAME'},
    {id: '2', ownerId: 123423, message: 'KEK!!=D'},
    {id: '3', ownerId: 123423, message: 'HERE WAS MESSAGE'},
    {id: '4', ownerId: 123423, message: ''},
];

const PostData = [
    {id: 0, userid: 0, username: 'PATIENT_ZERO', message: 'What IS your name?!', likes: 0, comments: 1},
    {id: 1, userid: 0, username: 'Alex Beachman', message: 'What ARE you mean?!', likes: 6, comments: 2},
    {id: 2, userid: 0, username: 'Bartosz Czarny', message: 'Where ARE you talking about?!', likes: 520, comments: 34},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App ContactsData={ContactsData} MessagesData={MessagesData} PostData={PostData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
