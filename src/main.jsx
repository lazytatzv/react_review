import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const myelement = (
  <>
    <h1>Hello, world!</h1>
    <p>My name is Tatzv.</p>
    <p>Nice to meet you!</p>
  </>
);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  myelement
)
