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

app.post('/new', (req, res) => {
    console.log(req.body);
    res.send('works');
})

app.listen(3010, () => {
    console.log('port open');
})