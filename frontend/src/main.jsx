
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-gpv2tsvwtwhusziq.us.auth0.com"
    clientId="XE0PvMUGuJKoZzKs3aJI0vxhkeRj3wJ3"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >

    <App />
    
  </Auth0Provider>
)
