import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

    return(
        <div className='details-content'>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default Details;