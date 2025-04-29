const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar livros' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar o livro' });
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const saved = await newBook.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar livro' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao atualizar livro' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json({ message: 'Livro removido com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao remover livro' });
  }
};
