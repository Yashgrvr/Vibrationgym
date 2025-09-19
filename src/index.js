import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 // Or './app' if you didn't rename the file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);