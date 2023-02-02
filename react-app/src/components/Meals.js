import React from 'react';
import Meal from './Meal'

const Meals = ({ meals, onAdd, onDelete }) => {
    
    const mealsWithKey = meals.map(meal => {
        let createId = Math.floor(Math.random() * 100000);
        meal = {...meal, keyId: createId};
        return meal;
    });

    const snacks = mealsWithKey.filter(meal => meal.category === 'snack');
    const mains = mealsWithKey.filter(meal => meal.category === 'main');
    const desserts = mealsWithKey.filter(meal => meal.category === 'dessert');

    

    return (
        <>
            <h2>Snacks</h2>
            {
                snacks.map((meal) => {
                    return <Meal meal={meal} onAdd={onAdd} key={meal.keyId} onDelete={onDelete} />
                })
            }
            <h2>Mains</h2>
            {
                mains.map((meal) => {
                    return <Meal meal={meal} onAdd={onAdd} key={meal.keyId} onDelete={onDelete} />
                })
            }
            <h2>Desserts</h2>
            {
                desserts.map((meal) => {
                    return <Meal meal={meal} onAdd={onAdd} key={meal.keyId} onDelete={onDelete} />
                })
            }
        </>
    )
}

export default Meals