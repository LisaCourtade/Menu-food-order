import React from 'react';
const Button = ({onClick, text, className, show}) => { 
    if (show) {
        return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
        )
    }
} 


export default Button