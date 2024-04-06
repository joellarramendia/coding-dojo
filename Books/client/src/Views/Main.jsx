import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AuthorList from '../components/AuthorList';


const Main = () => {
    const [book, setBook] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(()=>{
        axios.get('http://localhost:8000/api/books')
            .then(res=>{
                setBook(res.data);
                setLoaded(true);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }, [])


    const removeFromDom = (bookId) => {
        setBook(book.filter(book => book._id !== bookId));
    };

    return(
        <div>
            <Link to="/new">Add an author</Link>
            <p>We have quotes by:</p>
            {loaded && <AuthorList book={book} removeFromDom={removeFromDom} />}
        </div>
    )
}


export default Main;