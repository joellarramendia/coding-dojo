import React, {useEffect, useState} from "react";
import axios from "axios";

const Update = (props) => {
    const productId = props.match.params.id; 
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${productId}`)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
    }, [productId]);

    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${productId}`, {title, price, description})
        .then(res => {
            console.log(res);
            props.history.push('/product');
        })
        .catch(err => console.error(err));
    };

   return (
     <div className="form-update">
       <h1>Update a Product</h1>

       <form onSubmit={updateProduct}>
         <div className="content">
           <label>Title</label>
           <input
             type="text"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
           />
         </div>
         <div className="content">
           <label>Price</label>
           <input
             type="number"
             value={price}
             onChange={(e) => setPrice(e.target.value)}
           />
         </div>
         <div className="content">
           <label>Description</label>
           <input
             type="text"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
           />
         </div>

         <button type="submit">Update</button>
       </form>
     </div>
   );
}

export default Update;

