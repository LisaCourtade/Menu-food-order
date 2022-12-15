const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');

const Meal = require('./models/meal');

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/menu')
    .then(() => {
        console.log('Mongo connection open')
    })
    .catch(err => {
        console.log('Mongo Error!');
        console.log(err)
    });


app.get('/menu', async (req, res) => {
    const meals = await Meal.find({});
    res.send(meals)
})

app.listen(3010, () => {
    console.log('port open')
})