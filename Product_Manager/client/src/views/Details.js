import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../App.css';

const Details = (props) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const productId = props.match.params.id;
        axios.get(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => {
                console.error('Error getting product details:', err);
            });
    }, [props.match.params.id]);

    const deleteProduct = () => {
        const productId = props.match.params.id;
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                console.log('Product deleted successfully');
                props.history.push('/product');
            })
            .catch(err => {
                console.error('Error deleting product:', err);
            });
    };

   

    return(
        <div className='details-content'>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>

            <Link to={`/product/${product._id}/edit`}>Edit</Link>
            <button className='btn-delete' onClick={deleteProduct}>Delete</button>
            
        </div>
    )
}

export default Details;