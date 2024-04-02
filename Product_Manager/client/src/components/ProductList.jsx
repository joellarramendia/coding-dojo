import React from "react";
import {Link} from 'react-router-dom';
import './ProductForm.css';

export default props => {
    return(
        <div className="productList">
           <h1>All Products:</h1>

            <ul>
                {props.product.map(product=>(
                     <li className="list" key={product._id}>
                     <Link to={`/product/${product._id}`}>{product.title}</Link>
                 </li>
                ))}
            </ul>
        </div>
    )
}