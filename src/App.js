import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Home from './components/Home';
import Inventory from './components/Inventory';
import Profile from './components/Profile';
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to = "/home">Home</Link></li>
          <li><Link to = "/inventory">Inventory</Link></li>
          <li><Link to = "/profile">Profile</Link></li>
        </ul>
      </nav>
      <Routes>
          <Route path = "/" element ={<h1>Home</h1>} />
          <Route path = "/profile" element ={<h1>Profile</h1>} />
          <Route path = "/inventory" element ={<Inventory/>} />

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
