import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const alertOptions = {
  timeout: 2000,
  position: positions.TOP_CENTER,
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...alertOptions}>
    <App />
  </AlertProvider>
  , document.getElementById('root'));

