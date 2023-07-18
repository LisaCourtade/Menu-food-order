import React, { useEffect, useState } from 'react';
import Meals from './components/Meals';
import New from './components/New';
import '../../index.css';

export default function Menu() {
    const [meals, setMeals] = useState([]);

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
                <Meals meals={meals} isAdd={false} onClick={handleDelete} />
            </div>
            <div className='menu-order'>
                <div className='container'>
                    <h2>Add a new meal</h2>
                    <New onNew={(meal) => setMeals([...meals, meal])} /> 
                </div>
            </div>
        </div>
    );
}