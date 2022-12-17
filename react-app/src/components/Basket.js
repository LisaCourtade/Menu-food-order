import React from 'react';
import Button from './Button';

const Basket = ({meals, updateBasket}) => {    
    const addedId = meals.map(meal => {
        let createId = Math.floor(Math.random() * 100000);
        meal = {...meal, id: createId};
        return meal;
    })
    
    const totalPrice = addedId.map(meal => {
        const {price} = meal;
        return price;
    }).reduce((total, price) => {
        return total + price;
    }, 0)

    const handleClick = (id) => {
        updateBasket(addedId.filter(meal => meal.id !== id));
    }


    return (
        <div>
            <h2>Basket</h2>
            {(totalPrice === 0) ? 'The basket is empty' : ''}
            {addedId.map( meal => {
                const {name, price, id} = meal;
                return (
                <div className="meal-header" key={id} >
                    <div>
                        <Button onClick={() => handleClick(id)} text="X" className="btn remove" />
                        {name}
                    </div>
                    <div> {price} € </div>
                </div>
                )
            })}
            <h4 className="total">
                Total = {totalPrice} €
            </h4>
        </div>
    )
} 

export default Basket