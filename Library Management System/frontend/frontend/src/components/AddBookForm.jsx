import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../services/api';

const AddBookForm = () => {
  const [book, setBook] = useState({ title: '', author: '', genre: '', availabilityStatus: 'Available' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook(book);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add Book</h2>
      <input className="input" name="title" placeholder="Title" onChange={handleChange} required />
      <input className="input" name="author" placeholder="Author" onChange={handleChange} required />
      <input className="input" name="genre" placeholder="Genre" onChange={handleChange} required />
      <button className="btn-primary" type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
