import React from 'react';

const New = ({showNew, onNew}) => {  
    if (showNew) {
        const handleClick = (e) => {
            e.preventDefault();
            let createId = Math.floor(Math.random() * 100000);
            const data = {
                name: e.target.elements[0].value,
                price: e.target.elements[1].value,
                ingredients: [e.target.elements[2].value],
                category: e.target.elements[3].value,
                keyId: createId
            };
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
            .catch(e => console.log(e))
            
        }
        
        return (
            <form onSubmit={handleClick} method='POST'>
                <label htmlFor='name'>Name </label>
                <input type='text' placeholder='Name of the meal' name='name' id='name'/>
                <br/>
                <label htmlFor='price'>Price </label>
                <input type='number' step="0.01" placeholder='0.00' name='price' id='price' />
                <br/>
                <label htmlFor='ingredient'>Ingredient </label>
                <input placeholder='Ingredient' name='ingredient' id='ingredient'/>
                <br/>
                <select>
                    <option value='snack'>Snack</option>
                    <option value='main'>Main</option>
                    <option value='dessert'>Dessert</option>
                </select>
                <br/>
                <input type='submit'/>
            </form>
        )
    }
}

export default New