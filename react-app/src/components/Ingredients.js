const Ingredients = ({ meal, showIngr}) => { 
    if (showIngr) {
        return (
            <ul className="ingr-list">
                {
                    meal.ingredients.map((ingr) => <li>{ingr}</li>)
                }
            </ul>
        )
    } 
    
} 

export default Ingredients