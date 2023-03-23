import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-du5uzb7vfj0m4dxa.us.auth0.com'
    clientId='7h4JuNyy3BYYXxGVkVZnBosw2BTLPy5X'
    redirectUri={window.location.origin}>
    <App />

  </Auth0Provider>

);

