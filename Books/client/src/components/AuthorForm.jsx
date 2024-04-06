import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './estilos.css';

const AuthorForm = ({ onProductCreated }) => {
    const [title, setTitle] = useState("");
    const [numberOfPages, setNumberOfPages] = useState(0);
    //crear un array para guardar los errores desde la api
    const [errors, setErrors] = useState([]);
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/books', {
            title,
            numberOfPages
        })
            .then(res=>console.log(res)) // si la respuesta es correcta, se imprime en consola
            .catch(err=>{
                const errorResponse = err.response.data.errors; // si hay errores en la respuesta, se guardan en errorResponse
                const errorArr = []; // se crea un array para guardar los errores
                for (const key of Object.keys(errorResponse)) { // se recorre el objeto errorResponse
                    errorArr.push(errorResponse[key].message)
                }
                // se guarda el array de errores en el estado
                setErrors(errorArr);
            })
        }
    return (
        <div>
            <Link to="/">Home</Link>
            <p>Add a new author:</p>
            <div className='authorForm'>
                <form onSubmit={onSubmitHandler}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)} {/* se mapea el array de errores y se imprime en pantalla */}
                    <div>
                        <label>Title:</label> <br/>
                        <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
                    </div>

                    <div>
                        <label>Pages:</label> <br/>
                        <input type="number" onChange = {(e)=>setNumberOfPages(e.target.value)}/>
                    </div>

                    <button className='btn'><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Cancel</Link></button>
                    <button className='btn' type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}


export default AuthorForm;