import React, {useState} from 'react';
import axios from 'axios';
import './ProductForm.css'

export default () =>{
    //mantener el control de lo que se escribe a traves del gancho useState
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //gestor cuando se envia el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento predeterminado del formulario
        e.preventDefault();
        //hacer una peticion POST para crear una nueva persona
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    //onChange para actualiar
    return(
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
                <button onSubmit={onSubmitHandler}>Create</button>
            </form>
        </div>
    )
}