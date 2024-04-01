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