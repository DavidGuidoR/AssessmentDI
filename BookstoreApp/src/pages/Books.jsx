import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Loader from '../components/Loader';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/books')
      .then(response => {
        console.log('Datos recibidos:', response.data);
        setBooks(response.data.books);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar los libros:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <h1>Libros</h1>
      {Array.isArray(books) && books.length > 0 ? (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <strong>{book.title}</strong> por {book.author}
              <br />
              Registrado por: {book.User.name} ({book.User.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay libros disponibles.</p>
      )}
    </div>
  );
};

export default Books;
