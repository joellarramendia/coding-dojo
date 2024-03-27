const Jokes = require('../models/jokes.models');

//exporta una funcion para obtener todos los chistes
module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

//exporta una funcion para obtener un chiste
module.exports.findOneSingleJoke = ( req, res ) => {
    Jokes.findOne({ _id: req.params.id })
    .then(oneJoke => res.json({ joke: oneJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

//exporta una funcion para crear un chiste
module.exports.createNewJoke = ( req, res ) => {
    Jokes.create(req.body)
    .then(newJoke => res.json({ joke: newJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

//exporta una funcion para actualizar un chiste
module.exports.updateExistingJoke = ( req, res ) => {
    Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

//exporta una funcion para eliminar un chiste
module.exports.deleteAnExistingJoke = ( req, res ) => {
    Jokes.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}