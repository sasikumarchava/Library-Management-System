import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import UpdateBookForm from './components/UpdateBookForm';
import SearchBook from './components/SearchBook';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6">Library Management System</h1>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBookForm />} />
          <Route path="/update/:id" element={<UpdateBookForm />} />
          <Route path="/search" element={<SearchBook />} />
        </Routes>
      </div>
    </Router>
  );
}