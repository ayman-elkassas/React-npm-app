import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/layout/home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    {/* <App/> */}
  </React.StrictMode>,
  document.getElementById('root')
);