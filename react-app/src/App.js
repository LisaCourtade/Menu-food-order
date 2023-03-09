import React from 'react';
import './index.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Home} from './pages/home';
import {Order} from './pages/order';
import {Register} from './pages/register';
import {Navbar} from './components/Navbar';


function App() {   
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/order' element={<Order />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
