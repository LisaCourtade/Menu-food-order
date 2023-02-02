const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Meal = require('./models/meal');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/menu')
    .then(() => {
        console.log('Mongo connection open');
    })
    .catch(err => {
        console.log('Mongo Error!');
        console.log(err);
    });


app.get('/menu', async (req, res) => {
    const meals = await Meal.find({});
    res.send(meals);
})

app.post('/new', async (req, res) => {
    const newMeal = new Meal(req.body);
    await newMeal.save();
    res.send(newMeal);
})

app.delete('/delete', async (req, res) => {
    const id = req.body._id;
    const meal = await Meal.findByIdAndDelete(id);
    res.send('deleted')
})

app.listen(3010, () => {
    console.log('port open');
})