const express = require("express");
const cors = require("cors");
const phones = require('./phones.json');
const categoryName = require('./mealsCategory.json')
const meals = require('./meals.json')
const user = require('./user.json')
const app = express();
const port = 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send("Hallo world server")
});

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log("Loading id",id);
    const phone = phones.find( phone => phone.id === id) || {}
    res.send(phone)
})

app.get('/categoryName', (req, res) => {
    res.send(categoryName)
})

app.get('/meals', (req, res) => {
    res.send(meals)
})

app.get('/meals/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    const meal = meals.find( meal => parseInt(meal.idMeal) === id)
    res.send(meal)
})

app.get('/category/:category', (req, res) => {
    const category = req.params.category;
    console.log(category)
    const categoryMeals = meals.filter( meals => meals.strCategory.toLowerCase() === category.toLowerCase())
    res.send(categoryMeals)
})

app.get('/name/:latter', (req, res) => {
    const latter = req.params.latter;
    console.log(latter)
    const getMeals = meals.filter( meals => meals.strMeal.slice(0,1).toLowerCase() === latter.toLowerCase())
    res.send(getMeals)
})

app.get('/user', (req, res) => {
    res.send(user)
})

app.get('/user/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const getUser = user.find( user => parseInt(user._id) === userId)
    res.send(getUser)
})

app.listen(port, () => {
    console.log(`My server port is ${port}`)
})