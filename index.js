import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import User from './User'
import First from './First';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <User />
      <First />
  </React.StrictMode>
);
reportWebVitals();
