import React from 'react';
import { useState, useEffect } from 'react';
import './index.css';
import Meals from './components/Meals';
import Basket from './components/Basket';
import Button from './components/Button';
import New from './components/New';

function App() {
    const [meals, setMeals] = useState([]);
    const [basket, setBasket] = useState([]);
    const [showNewMeal, setShowNewMeal] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3010/menu")
            .then((res) => res.json())
            .then((data) => {setMeals(data)})
            .catch(e => console.log(e))
    }, [])

    const handleDelete = (meal) => {
        const copyMeals = [...meals];
        const mealIndex = function() {
            for (let i = 0; i < copyMeals.length; i++) {
                if (copyMeals[i]._id === meal._id) {
                    return i;
                }
            }
        }
        copyMeals.splice(mealIndex(), 1);
        setMeals(copyMeals);

        fetch("http://localhost:3010/delete", {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(meal) // body data type must match "Content-Type" header
        }).then((res) => {
            console.log(res, "response")
        }).catch(e => console.log(e))

    }
    
    return (
        <div className='main-page'>
            <div className='container'>
                <h1>Menu</h1>
                <Meals meals={meals} onAdd={(meal) => setBasket([...basket, meal])} onDelete={handleDelete} />
            </div>
            <div className='menu-order'>
                <div className='container basket'>
                    <Basket meals={basket} updateBasket={setBasket} />
                </div>
                <div className='container'>
                <Button onClick={() => setShowNewMeal(!showNewMeal)} text='Create a new meal' className='btn' />
                <New showNew={showNewMeal} onNew={(meal) => setMeals([...meals, meal])} /> 
                </div>
            </div>
        </div>
    );
}

export default App;
