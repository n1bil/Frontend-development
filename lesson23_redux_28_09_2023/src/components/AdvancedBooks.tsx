import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../redux/storeRTK';
import { addBook, deleteBook, editBookTitle } from '../redux/slices/booksSlice';
import './Style.css';

const AdvancedBooks: React.FC = (): JSX.Element => {

  const books = useSelector((state: RootState) => state.books.books);
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState({
    isbn: '',
    title: '',
    year: '',
    author: '',
});

const handleAddBook = (): void => {
  dispatch(addBook({
      title: bookData.title,
      author: bookData.author,
      year: parseInt(bookData.year),
    })
  );
  setBookData({
    isbn: '',
    title: '',
    year: '',
    author: '',
  });
}

const handleDeleteBook = (): void => {
  dispatch(deleteBook(bookData.isbn));
}

const handleEditBookTitle = (): void => {
  dispatch(editBookTitle({ isbn: bookData.isbn, title: bookData.title }));
}

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  const { id, value } = e.target;
  setBookData((data) => ({
      ...data,
      [id]: value,
  }));
};
    
  return (
    <>
        <div className="container">
            <label className="label" htmlFor="isbn">Isbn</label>
            <input className="input" type="text" id='isbn' value={bookData.isbn} onChange={handleInputChange}/>
            <label className="label" htmlFor="title">Title</label>
            <input className="input" type="text" id='title' value={bookData.title} onChange={handleInputChange}/>
            <label className="label" htmlFor="year">Year</label>
            <input className="input" type="number" id='year' value={bookData.year} onChange={handleInputChange}/>
            <label className="label" htmlFor="author">Author</label>
            <input className="input" type="text" id='author' value={bookData.author} onChange={handleInputChange}/>
            <div>
                <button className="button" onClick={handleAddBook}>Add</button>
                <button className="button" onClick={handleDeleteBook}>Delete</button>
                <button className="button" onClick={handleEditBookTitle}>Edit</button>
            </div>
        </div>

        <div>
            {books.map((book) => (
            <div key={book.isbn} className='card'>
                <p>Isbn: {book.isbn}</p>
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
                <p>Year: {book.year}</p>
            </div>
            ))}
        </div>
    </>
  )
}

export default AdvancedBooks