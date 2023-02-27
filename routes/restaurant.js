const express = require('express');
const router = express.Router();

const restaurant = require('../data');

let currentRestaurantId = 9;

//GET
router.get('/',(req,res) =>{
    res.json(restaurant); //แปลงเป็น json อัตโนมัติ
});

router.get('/:id',(req,res)=>{
    const restaurantId = Number.parseInt(req.params.id,10);
    const restaurants = restaurant.find(
        (restaurant) => restaurant.id === restaurantId
        );
    res.json(restaurants);
})

//POST
router.post('/',(req,res) => {
    currentRestaurantId += 1;
    const newRestaurant ={
        id: currentRestaurantId,
        ...req.body
    }
    restaurant.push(newRestaurant);
    res.json(newRestaurant);
});

//PUT
router.put('/:id',(req,res)=>{
    const restaurantId = Number.parseInt(req.params.id,10);
    const restaurantIndex = restaurant.findIndex(
        (restaurant) => restaurant.id === restaurantId
    );

    const updatedRestaurant = {
        id: restaurantId,
        ...req.body
    };
    restaurant[restaurantIndex] = updatedRestaurant;
    res.json(updatedRestaurant);
});

//DELETE
router.delete('/:id',(req,res)=>{
    const restaurantId = Number.parseInt(req.params.id,10);
    const restaurantIndex = restaurant.findIndex(
        (restaurant) => restaurant.id === restaurantId
    );
    restaurant.splice(restaurantIndex, 1);
    res.sendStatus(204);
})

module.exports = router;