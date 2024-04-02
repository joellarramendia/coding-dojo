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

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updateProduct => res.json(updateProduct))
    .catch(err => {
        console.error('Error updating product:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
}

/*exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        // Lógica para eliminar el producto de la base de datos
        await Product.findByIdAndDelete(productId);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting productsss:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};*/

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => {
            console.error('Error deleting product:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}
