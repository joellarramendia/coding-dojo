import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import '../components/estilos.css';

const Update = () => {
    const { id } = useParams(); // Usamos el hook useParams para obtener el parámetro id de la URL
    const [title, setTitle] = useState("");
    const [numberOfPages, setNumberOfPages] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setNumberOfPages(res.data.numberOfPages);
            })
            .catch(err => console.error(err));
    }, [id]);

    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/books/${id}`, { title, numberOfPages })
            .then(res => {
                console.log(res);
                //props.history.push('/');
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <Link to="/">Home</Link>
            <p>Edit this author:</p>
            <div className="update">
                <form onSubmit={updateProduct}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <div>
                        <label>Title:</label> <br />
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div>
                        <label>Pages:</label> <br />
                        <input type="number" value={numberOfPages} onChange={(e) => setNumberOfPages(e.target.value)} />
                    </div>
                    <button className='btn'><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Cancel</Link></button>
                    <button className='btn' type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Update;
