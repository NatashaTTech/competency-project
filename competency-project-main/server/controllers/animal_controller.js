const Animals = require('../models/animal_model.js');

module.exports = {
    // retrieve all animals
    getAnimals(req, res) {
        Animals.find()
        .then(animal => {
            // console.log(`Animals available: ${animal}`)
            res.json(animal)
        })
        .catch(err => console.log(err))
    }, // end retrieve animals
}