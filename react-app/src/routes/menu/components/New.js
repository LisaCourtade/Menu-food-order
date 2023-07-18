import React, { useState } from 'react';
import '../../../index.css';

export default function New({ onNew}) {  
    const [ingredients, setIngredients] = useState([{ingredient: ''}]);

    const handleFormChange = (index, event) => {
        let data = [...ingredients];
        data[index][event.target.name] = event.target.value;
        setIngredients(data);
    }

    const addIngredientInput = () => {
        let newInput = { ingredient: '' }
        setIngredients([...ingredients, newInput]);
    }


    const handleClick = (e) => {
        e.preventDefault();           
        let ingredientsArray = ingredients.map((ingr) => {
            return ingr.ingredient
        })
        let createId = Math.floor(Math.random() * 100000);
        const data = {
            category: e.target.elements[0].value,
            name: e.target.elements[1].value,
            price: e.target.elements[2].value,
            ingredients: ingredientsArray,
            keyId: createId
        };
        console.log(data)
        fetch("http://localhost:3010/new", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }).then((res) => {
            onNew(data);
            console.log(res)
        })
        .catch(e => console.log(e));
            
    }
    
    return (
        <form onSubmit={handleClick} method='POST'>
            <div>
                <label htmlFor='category'>Category </label>
                <select id="category">
                    <option value='snack'>Snack</option>
                    <option value='main'>Main</option>
                    <option value='dessert'>Dessert</option>
                </select>
            </div>
            <div>
                <label htmlFor='name'>Name </label>
                <input type='text' name='name' id='name' placeholder='Name of the meal' />
            </div>
            <div>
                <label htmlFor='price'>Price </label>
                <input type='number' name='price' id='price' step="0.01" placeholder='0.00' />
            </div> 
            <label htmlFor='ingredient'>Ingredients </label>
            {ingredients.map((ingr, index) => {
                return (
                    <div key={index}>
                        <input type='text' name='ingredient' id='ingredient' placeholder='Ingredient' value={ingr.ingredient} onChange={e => handleFormChange(index, e)} />       
                    </div>    
                )
            })}
            <button type="button" onClick={addIngredientInput}>Add another ingredient</button>
            
            <div>
                <input type='submit' className='btn'/>
            </div>
        </form>
    )

}

