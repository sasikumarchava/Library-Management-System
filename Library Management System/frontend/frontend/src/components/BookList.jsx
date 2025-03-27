import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteBook, getAllBooks } from '../services/api';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllBooks().then((response) => setBooks(response.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteBook(id);
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div>
      <button className="btn-primary mb-4" onClick={() => navigate('/add')}>Add New Book</button>
      <table className="table-auto w-full bg-white shadow-lg">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.availabilityStatus}</td>
              <td>
                <button className="btn-secondary" onClick={() => navigate(`/update/${book.id}`)}>Edit</button>
                <button className="btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;