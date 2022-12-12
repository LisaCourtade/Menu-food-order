import Meal from './Meal'

const Meals = ({ meals, onClick }) => {
    return (
        <>
            <h2>Snacks</h2>
            {
                meals.snacks.map((meal) => {
                    return <Meal meal={meal} onClick={onClick} />
                })
            }
            <h2>Mains</h2>
            {meals.mains.map((meal) => {
                return <Meal meal={meal} onClick={onClick} />
            }
            )}
            <h2>Desserts</h2>
            {meals.desserts.map((meal) => {
                return <Meal meal={meal} onClick={onClick} />
            }
            )}
        </>
    )
}

export default Meals