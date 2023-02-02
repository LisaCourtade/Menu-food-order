const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0.00
    },
    ingredients: {
        type: [String],
    },
    category: {
        type: String,
        enum: ['snack', 'main', 'dessert']
    }
})

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;