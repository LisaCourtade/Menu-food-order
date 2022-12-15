import React from 'react';
import Meal from './Meal'

const Meals = ({ meals, onClick }) => {

    const snacks = meals.filter(meal => meal.category === 'snack');
    const mains = meals.filter(meal => meal.category === 'main')
    const desserts = meals.filter(meal => meal.category === 'dessert')

    return (
        <>
            <h2>Snacks</h2>
            {
                snacks.map((meal) => {
                    return <Meal meal={meal} onClick={onClick} />
                })
            }
            <h2>Mains</h2>
            {
                mains.map((meal) => {
                    return <Meal meal={meal} onClick={onClick} />
                })
            }
            <h2>Desserts</h2>
            {
                desserts.map((meal) => {
                    return <Meal meal={meal} onClick={onClick} />
                })
            }
        </>
    )
}

export default Meals