import React from 'react';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/home/Home';
import Order from './routes/order/Order';
import Menu from './routes/menu/Menu';
import Navbar from './components/Navbar';


function App() {   
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/order' element={<Order />} />   
            </Routes>
        </Router>
    );
}

export default App;
