import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AuthorList = (props) => {
  const { removeFromDom } = props;

  const deleteBook = (bookId) => {
    axios
      .delete(`http://localhost:8000/api/books/${bookId}`)
      .then((res) => {
        removeFromDom(bookId);
        console.log("Product deleted successfully");
      })
      .catch((err) => {
        console.error("Error deleting product:", err);
      });
  };

  return (
    <div>
      <table className="table-container">
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions availabe</th>
          </tr>
        </thead>
        <tbody>
          {props.book.map((book) => (
            <tr key={book._id}>
              <td>
                <p>{book.title}</p>
              </td>
              <td>
                <button className="btn-edit">
                  <Link to={`/books/${book._id}/edit`} style={{ textDecoration: 'none', color: 'black' }}>Edit</Link>
                </button>
                <button
                  className="btn-delete"
                  onClick={() => deleteBook(book._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;
