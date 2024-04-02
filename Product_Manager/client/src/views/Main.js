import React, {useEffect, useState} from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, [])

    const handleProductCreated = (newProduct) => {
        // Agrega el nuevo producto a la lista existente
        setProduct([...product, newProduct]);
    };

    const removeFromDom = (productId) => {
        setProduct(product.filter(product => product._id !== productId));
    };

    return(
        <div>
            <ProductForm onProductCreated={handleProductCreated} />
            <hr/>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom} />}
        </div>
    )
}