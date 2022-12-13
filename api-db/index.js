const express = require('express');
const app = express();
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

app.get('/menu', (req, res) => {
    res.send('hello')
})

app.listen(3010, () => {
    console.log('port open')
})