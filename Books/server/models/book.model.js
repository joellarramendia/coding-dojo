const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            "Title is required"
        ]
    },
    numberOfPages: {
        type: Number,
        required: [
            true,
            "Number of pages is required"
        ]
    }
}, {timestamps: true});

const Book= mongoose.model('Book', BookSchema);
module.exports = Book;