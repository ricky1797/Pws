import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import Home from "./App"
import RiaTracker from './pages/RiaTracker';
import Prices from './pages/Prices'
import Navbar from './components/Navbar'
import Settings from "./pages/Settings"

ReactDOM.render(
    <BrowserRouter>
        <div>
            <main>
              <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/ria"  element={<RiaTracker/>} />
            <Route path="/pws" element={<Prices/>} />
            </Routes>
            <Navbar/>
            </main>
        </div>
    </BrowserRouter>, 
    document.getElementById("root")
    
)
