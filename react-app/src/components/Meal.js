import React from 'react';
import { useState } from 'react';
import Button from './Button'
import Ingredients from './Ingredients'
import Add from './Add'

const Meal = ({ meal, onClick }) => { 
    const [showIngredients, setShowIngr] = useState(false);
    return (
    <div className="meal">
        <div className="meal-header">
            <h3 > {meal.name.toUpperCase()} </h3>
            <h4 > {meal.price} €</h4>
            <div>
                < Button onClick={() => setShowIngr(!showIngredients)} text={ !showIngredients ? 'See ingredients' : 'Hide ingredients'} className="btn-ingr" />
                < Add meal={meal} onClick={onClick} />
            </div>
        </div>
        <Ingredients meal={meal} showIngr={showIngredients}/>
    </div>
    )
} 

export default Meal