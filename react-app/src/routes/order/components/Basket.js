import React from 'react';
import Button from '../../../components/Button';

const Basket = ({meals, updateBasket}) => {    
    const addedbasketId = meals.map(meal => {
        let createId = Math.floor(Math.random() * 100000);
        meal = {...meal, basketId: createId};
        return meal;
    })
    
    const totalPrice = addedbasketId.map(meal => {
        const {price} = meal;
        return price;
    }).reduce((total, price) => {
        return total + price;
    }, 0)

    const handleClick = (basketId) => {
        console.log(addedbasketId[0])
        updateBasket(addedbasketId.filter(meal => meal.basketId !== basketId));
    }


    return (
        <div>
            <h2>Basket</h2>
            {(totalPrice === 0) ? 'The basket is empty' : ''}
            {addedbasketId.map( meal => {
                const {name, price, basketId} = meal;
                return (
                <div className="meal-header" key={basketId} >
                    <div>
                        <Button onClick={() => handleClick(basketId)} text="X" className="btn remove" show={true}/>
                        {name}
                    </div>
                    <div> {price.toFixed(2)} € </div>
                </div>
                )
            })}
            <h4 className="total">
                Total = {totalPrice.toFixed(2)} €
            </h4>
        </div>
    )
} 

export default Basket