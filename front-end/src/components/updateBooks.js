import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const UpdateBook = () => {
  const [title, setTitle] = React.useState('');
  const [isbn, setIsbn] = React.useState('');
  const [pagecount, setPagecount] = React.useState('');
  const [author, setAuthor] = React.useState('');

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getBookDetails();
  }, [])

  const getBookDetails = async () => {
    console.warn(params)
    let result = await fetch(`http://localhost:5000/book/${params.id}`);
    result = await result.json();
    setTitle(result.title);
    setIsbn(result.isbn);
    setPagecount(result.pagecount);
    setAuthor(result.author)

  }

  const updateBook = async () => {
    console.warn(title, isbn, pagecount, author)
    let result = await fetch(`http://localhost:5000/book/${params.id}`, {
      method: 'Put',
      body: JSON.stringify({ title, isbn, pagecount, author }),
      headers: {
        'Content-Type': 'Application/json'
      }
    });
    result = await result.json();
    if (result) {
      navigate('/')
    }

  }

  return (
    <div className='product '>
      <h1>Update Books Details</h1>
      <input type="text" placeholder='Enter Title' className='inputBox'
        value={title} onChange={(e) => { setTitle(e.target.value) }}
      />

      <input type="text" placeholder='Enter ISBN number' className='inputBox'
        value={isbn} onChange={(e) => { setIsbn(e.target.value) }}
      />

      <input type="text" placeholder='Enter Pagecount' className='inputBox'
        value={pagecount} onChange={(e) => { setPagecount(e.target.value) }}
      />

      <input type="text" placeholder='Enter Author Name' className='inputBox'
        value={author} onChange={(e) => { setAuthor(e.target.value) }}
      />




      <button onClick={updateBook} className='appButton'>Update Books</button>
    </div>
  )
}

export default UpdateBook;