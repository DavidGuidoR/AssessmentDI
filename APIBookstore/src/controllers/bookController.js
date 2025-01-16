import db from '../models/index.js';

// Query of all the books in database including user information
export const getAllBooks = async (req, res) => {
    try {
      const books = await db.Book.findAll({
        include: {
          model: db.User,
          attributes: ['id', 'name', 'email'],
        },
      });
  
      return res.status(200).json({ success: true, books });
    } catch (error) {
      return res.status(500).json({ error: 'No se pudieron obtener los libros.', detalles: error.message });
    }
  };

// Creation of a new book in DB with an authenticated user
export const createBook = async (req, res) => {
const { isbn, title, author, releaseDate } = req.body;

if (!isbn || !title || !author || !releaseDate) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
}

try {
    const existingBook = await db.Book.findOne({ where: { isbn } });
    if (existingBook) {
    return res.status(409).json({ error: 'El libro con este ISBN ya existe.' });
    }

    // Data added in middleware authenticator
    const userId = req.user.id;
    console.log(releaseDate);

    const newBook = await db.Book.create({
    isbn,
    title,
    author,
    releaseDate,
    userId,
    });

    return res.status(201).json({ success: true, bookId: newBook.id });
} catch (error) {
    return res.status(500).json({ error: 'No se pudo registrar el libro.', detalles: error.message });
}
};

// Elimination of a book only by an authenticated user
export const deleteBook = async (req, res) => {
    const { id } = req.params;
  
    try {
      const book = await db.Book.findByPk(id);
  
      if (!book) {
        return res.status(404).json({ error: 'El libro no fue encontrado.' });
      }
  
      await book.destroy();
  
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: 'No se pudo eliminar el libro.', detalles: error.message });
    }
  };
  
  


  