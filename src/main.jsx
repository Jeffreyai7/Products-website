import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ProductProvider } from './components/context.jsx'
 
ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductProvider>
    <Router>
    <App />
    </Router>
    </ProductProvider>
)
