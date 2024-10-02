import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
// THIS IS USED SO THAT YOU DON'T NEED TO SPECIFY A LOCALHOST URL IN AXIOS HTTP ADDRESS
// import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);