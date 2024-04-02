import React from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import './ProductForm.css';

const ProductList = (props) => {
    const {removeFromDom} = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
               .then(res => {
                removeFromDom(productId)
                console.log('Product deleted successfully');
               })
               .catch(err => {
                console.error('Error deleting product:', err);
            });
        }


    return (
        <div className="productList">
            <h1>All Products:</h1>

            <ul>
                {props.product.map(product => (
                    <li className="list" key={product._id}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                        <button className="btn-delete" onClick={() => deleteProduct(product._id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;
