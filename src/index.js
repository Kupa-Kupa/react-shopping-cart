import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import RouteSwitcher from './components/RouteSwitcher';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouteSwitcher />
  </React.StrictMode>
);
