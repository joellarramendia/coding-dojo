const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    const {title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => {
            console.error('Error creating product:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}

module.exports.getAllProduct = (req, res) => {
    Product.find({})
        .then(product => res.json(product))
        .catch(err => {
            console.error('Error getting all products:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}

module.exports.getProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => {
            console.error('Error getting product:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}
