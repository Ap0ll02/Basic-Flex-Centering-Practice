import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Outermost abstraction, which holds our app which holds a div of components
    of which, these components carry their own html elements */}
    <App/>
  </React.StrictMode>,
);
