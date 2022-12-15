import React from 'react';
import { useState, useEffect } from 'react';
import './index.css';
import Meals from './components/Meals'
import Basket from './components/Basket'

function App() {
    const [meals, setMeals] = useState([]);

    const [basket, setBasket] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3010/menu")
            .then((res) => res.json())
            .then((data) => setMeals(data))
            .catch(e => console.log(e))
    }, [])
    
    return (
        <div>
            <div className="container">
                <h1>Menu</h1>
                <Meals meals={meals} onClick={(meal) => setBasket([...basket, meal])} />
            </div>
            <div className="container-basket">
                <Basket meals={basket} updateBasket={setBasket} />
            </div>
        </div>
    );
}

export default App;
