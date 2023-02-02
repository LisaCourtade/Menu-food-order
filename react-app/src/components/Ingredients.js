import React from 'react';
const Ingredients = ({ meal, showIngr}) => { 
    if (showIngr) {
        return (
            <ul className="ingr-list">
                {
                    meal.ingredients.map((ingr, i) => <li key={i}>{ingr}</li>)
                }
            </ul>
        )
    } 
    
} 

export default Ingredients