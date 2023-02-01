import React from 'react';
const Add = ({ meal, onAdd }) => { 
    return (
    <button onClick={() => onAdd(meal)} className="btn">
        Add
    </button>
    )

} 


export default Add