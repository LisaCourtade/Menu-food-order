const mongoose = require('mongoose');
const Meal = require('./models/meal');

mongoose.connect('mongodb://localhost:27017/menu')
    .then(() => {
        console.log('Mongo connection open')
    })
    .catch(err => {
        console.log('Mongo Error!');
        console.log(err)
    });


const seedMeals = [
    {
        name: 'fried bread',
        price: 1.20,
        ingredients: [
            'bread',
            'cheese',
            'garlic'
        ],
        category: 'snack'
    },
    {
        name: 'soup',
        price: 5.90,
        ingredients: [
            'peas',
            'bacon',
            'onions',
            'cream'
        ],
        category: 'snack'
    },
    {
        name: 'houmous',
        price: 4.50,
        ingredients: [
            'houmous',
            'carrot sticks',
            'cucumber sticks'
        ],
        category: 'snack'
    },
    {
        name: 'pizza',
        price: 10.50,
        ingredients: [
            'tomato sauce',
            'cheese',
            'mushrooms',
            'bell peppers',
            'chicken'
        ],
        category: 'main'
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
        ],
        category: 'main'
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
        ],
        category: 'main'
    },
    {
        name: 'ice cream',
        price: 3.50,
        ingredients: [
            'vanilla',
            'chocolate',
            'coffee',
            'caramel sauce',
            'chocolate chips'
        ],
        category: 'dessert'
    },
    {
        name: 'apple pie',
        price: 4.00,
        ingredients: [
            'apples',
            'dough',
            'sugar',
            'cinamon'
        ],
        category: 'dessert'
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
        ],
        category: 'dessert'
    }
];

// Meal.insertMany(seedMeals)
// .then(res => {
//     console.log(res)
// })
// .catch(e => {
//     console.log(e)
// }) 