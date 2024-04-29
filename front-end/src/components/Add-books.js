import React from 'react';

const AddBooks = () => {
  const [title, setTitle] = React.useState('');
  const [isbn, setIsbn] = React.useState('');
  const [pagecount, setPagecount] = React.useState('');
  const [author, setauthor] = React.useState('');


  const addBooks = async () => {

    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch('http://localhost:5000/add-books', {
      method: 'post',
      body: JSON.stringify({ title, isbn, pagecount, author, userId }),
      headers: {
        'Content-Type': 'application/json'
      },

    });
    result = await result.json();
    console.warn(result)
  }

  return (
    <div className='bg-image'>
      <ul className='product'>
        <h1>Add Books</h1>

        <input type='text' placeholder='Enter  Title' className='inputBox ' onChange={(e) => { setTitle(e.target.value) }}></input>

        <input type='text' placeholder='Enter  ISBN number' className='inputBox ' onChange={(e) => { setIsbn(e.target.value) }}></input>

        <input type='text' placeholder='Enter  Pagecount' className='inputBox ' onChange={(e) => { setPagecount(e.target.value) }}></input>

        <input type='text' placeholder='Enter  Author name' className='inputBox ' onChange={(e) => { setauthor(e.target.value) }}></input>





      </ul>
      <button className='btn-signup1' onClick={addBooks}> Add Book</button>
    </div>
  );
};

export default AddBooks;
