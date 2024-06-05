import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { InMemoryUser } from './infra/user.inmemory.js';

// en utilisateur on a soit l'id 12 soit l'id 18
export const USER = 12;

// en source on a soit "inmemory" soit "api"
export const SOURCE : string = 'inmemory';

export const userLoader = () => {
  switch (SOURCE) {
    case 'api':
      //return new ApiUser();
    default:
      return new InMemoryUser();
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
