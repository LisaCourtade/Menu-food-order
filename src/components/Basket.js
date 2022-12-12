const Basket = ({meals}) => { 
    return (
        <div>
            {meals.map( meal => {
                const {name, price} = meal;
                return (
                <div> {name} {price} </div>
                )
            })}
        </div>
    )
} 

export default Basket