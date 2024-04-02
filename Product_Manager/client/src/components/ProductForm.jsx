import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductForm.css'

const ProductForm = ({ onProductCreated }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => {
                // Llama a la función proporcionada desde el componente padre
                // para indicar que se ha creado un nuevo producto
                onProductCreated(res.data);
                // Limpia los campos después de la creación exitosa
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='form'>
            <form onSubmit={onSubmitHandler}>
                <h1>Product Manager</h1>
                <div className='content'>
                    <label>Title</label>
                    <input className='input-content' type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
                </div>
                <div className='content'>
                    <label>Price</label>
                    <input className='input-content' type="number" onChange={(e)=>setPrice(e.target.value)} value={price} />
                </div>
                <div className='content'>
                    <label>Description</label>
                    <input className='input-content' type="text" onChange={(e)=>setDescription(e.target.value)} value={description} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default ProductForm;