import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  useEffect(() => {

    getBookDetails();
  }, [id]);

  const getBookDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/book/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch book details');
      }
      const bookData = await response.json();
      setBook(bookData);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  return (
    <div className="Book-details bg-image">
      <h1>Book Details</h1>
      {book ? (
        <ul>
          <li>Title: {book.title}</li>
          <li>ISBN Number: {book.isbn}</li>
          <li>Page Count: {book.pagecount}</li>
          <li>Author: {book.author}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetails;
