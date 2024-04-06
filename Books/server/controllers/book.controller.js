const Book = require('../models/book.model');

module.exports.createBook = (req, res) => {
    const {title, numberOfPages} = req.body;
    Book.create({
        title,
        numberOfPages
    })
        .then(book => res.json(book))
        .catch(err => res.status(400).json(err));
}

module.exports.getAllBook = (req, res) => {
    Book.find({})
        .then(book => res.json(book))
        .catch(err => {
            console.error('Error getting all books', err);
            res.status(500).json({ error: 'Internal server error' })
        })
}

module.exports.getBookById = (req, res) => {
    Book.findOne({_id: req.params.id}) 
    .then(book => res.json(book))
    .catch(err => {
        console.error('Error getting book', err);
        res.status(500).json({ error: 'Internal server error' })
    })
}

module.exports.updateBook = (req, res) => {
    Book.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updateBook => res.json(updateBook))
    .catch(err => {
        console.error('Error updating book', err);
        res.status(500).json({ error: 'Internal server error' })
    })
}

module.exports.deleteBook = (req, res) => {
    Book.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => {
        console.error('Error deleting book', err);
        res.status(500).json({ error: 'Internal server error' })
    })
}


