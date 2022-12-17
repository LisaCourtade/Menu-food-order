import React from 'react';

const New = ({showNew}) => {  
    if (showNew) {
        const handleClick = (e) => {
            e.preventDefault();
            const data = {
                name: e.target.elements[0].value,
                price: e.target.elements[1].value,
                ingredients: [e.target.elements[2].value],
                category: e.target.elements[3].value
            };
            fetch("http://localhost:3010/new", {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data) // body data type must match "Content-Type" header
              })
                .catch(e => console.log(e))
            console.log(data)
        }
        
        return (
            <form onSubmit={handleClick} >
                <label htmlFor='name'>Name </label>
                <input type='text' placeholder='Name of the meal' name='name' id='name'/>
                <br/>
                <label htmlFor='price'>Price </label>
                <input type='text' placeholder='Price' name='price' id='price' />
                <br/>
                <label htmlFor='ingredient'>Ingredient </label>
                <input placeholder='Ingredient' name='ingredient' id='ingredient'/>
                <br/>
                <select>
                    <option value='snack'>snack</option>
                    <option value='main'>main</option>
                    <option value='dessert'>dessert</option>
                </select>
                <br/>
                <input type='submit'/>
            </form>
        )
    }
}

export default New