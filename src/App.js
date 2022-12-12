import { useState } from 'react';
import './index.css';
import Meals from './components/Meals'
import Basket from './components/Basket'

function App() {
  const [meals, setMeals] = useState({
    snacks: [
      {
          name: 'fried bread',
          price: 1.20,
          ingredients: [
              'bread',
              'cheese',
              'garlic'
          ],
      },
      {
          name: 'soup',
          price: 5.90,
          ingredients: [
              'peas',
              'bacon',
              'onions',
              'cream'
          ]
      },
      {
          name: 'houmous',
          price: 4.50,
          ingredients: [
              'houmous',
              'carrot sticks',
              'cucumber sticks'
          ]
      }
  ],
  mains: [
      {
          name: 'pizza',
          price: 10.50,
          ingredients: [
              'tomato sauce',
              'cheese',
              'mushrooms',
              'bell peppers',
              'chicken'
          ]
      },
      {
          name: 'burger',
          price: 6.90,
          ingredients: [
              'buns',
              'beef',
              'salad',
              'sauce',
              'tomato slices'
          ]
      },
      {
          name: 'green curry',
          price: 5.00,
          ingredients: [
              'green curry paste',
              'spring onions',
              'mushrooms',
              'green beans',
              'chicken',
              'noodles'
          ]
      }
  ],
  desserts: [
      {
          name: 'ice cream',
          price: 3.50,
          ingredients: [
              'vanilla',
              'chocolate',
              'coffee',
              'caramel sauce',
              'chocolate chips'
          ]
      },
      {
          name: 'apple pie',
          price: 4.00,
          ingredients: [
              'apples',
              'dough',
              'sugar',
              'cinamon'
          ]
      },
      {
          name: 'brownie',
          price: 4.00,
          ingredients: [
              'chocolate',
              'nuts',
              'flour',
              'peanut butter',
              'milk'
          ]
      }
  ],
});

const [basket, setBasket] = useState([]);
  
return (
    <div>
        <div className="container">
            <h1>Menu</h1>
            <Meals meals={meals} onClick={(meal) => setBasket([...basket, meal])} />
        </div>
        <div className="container-basket">
            <Basket meals={basket} />
        </div>
    </div>
  );
}

export default App;
