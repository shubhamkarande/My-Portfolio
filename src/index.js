import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

console.log("App is running");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />     {/* Render App component */}
  </React.StrictMode>
);