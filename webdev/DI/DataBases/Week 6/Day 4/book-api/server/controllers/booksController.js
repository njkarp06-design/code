const Books = require('../models/booksModel');

const getAllBooks = async (req, res, next) => {
    try {
        const books = await Books.getAll();
        res.json(books);
    } catch (err) {
        next(err);
    }
};

const getBook = async (req, res, next) => {
    try {
        const book = await Books.getById(req.params.bookId);
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.status(200).json(book);
    } catch (err) {
        next(err);
    }
};

const createBook = async (req, res, next) => {
    try {
        const [book] = await Books.create(req.body);
        res.status(201).json(book);
    } catch (err) {
        next(err);
    }
};

const updateBook = async (req, res, next) => {
    try {
        const [book] = await Books.update(req.params.bookId, req.body);
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.json(book);
    } catch (err) {
        next(err);
    }
};

const deleteBook = async (req, res, next) => {
    try {
        const deleted = await Books.remove(req.params.bookId);
        if (!deleted) return res.status(404).json({ error: 'Book not found' });
        res.json({ message: 'Book deleted' });
    } catch (err) {
        next(err);
    }
};

module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };
