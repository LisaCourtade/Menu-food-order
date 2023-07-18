import React, { useState } from 'react';
import Button from '../../../components/Button'
import Ingredients from './Ingredients'
import Add from '../../../components/Add'

const Meal = ({ meal, isAdd, onClick}) => { 
    const [showIngredients, setShowIngr] = useState(false);

    return (
    <div className="meal">
        <div className="meal-header">
            <h3>{meal.name.toUpperCase()}</h3>
            <h4>{meal.price} €</h4>
            <div>
                <Button onClick={() => setShowIngr(!showIngredients)} text={ !showIngredients ? 'See ingredients' : 'Hide ingredients'} className="btn-ingr" show={true}/>
                {isAdd ? 
                    <Add meal={meal} onAdd={onClick} /> :
                    <Button onClick={() => onClick(meal)} text="X" className="btn" show={true} />
                }
            </div>
        </div>
        <Ingredients meal={meal} showIngr={showIngredients} />
    </div>
    )
} 

export default Meal