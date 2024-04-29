import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const BookList = () => {

  const [Book, setBook] = useState([]);

  useEffect(() => {
    getBook();
  }, [])

  const getBook = async () => {
    let result = await fetch('http://localhost:5000/get-books')
    result = await result.json();
    setBook(result);
  }

  const deleteBook = async (id) => {
    let result = await fetch(`http://localhost:5000/book/${id}`, {
      method: "Delete"
    });
    result = await result.json()
    if (result) {
      getBook();
    }

  }



  return (
    <div className="Products-list bg-image" >
      <h1>Books List</h1>
      <ul>
        <li>Sr.No</li>
        <li>Title</li>
      </ul>
      {Book.map((item, index) =>
        <ul key={item._id}>

          <li>{index + 1}</li>
          <li><a href={`/details/${item._id}`}>{item.title}</a></li>
          <li>
            <button onClick={() => deleteBook(item._id)}>remove</button>
            <Link to={"/update/" + item._id}>Update</Link>
          </li>
        </ul>

      )

      }

    </div>

  )
}

export default BookList