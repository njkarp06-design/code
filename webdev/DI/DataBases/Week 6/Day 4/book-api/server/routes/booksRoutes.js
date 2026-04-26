const express = require('express');
const router = express.Router();
const { getAllBooks, getBook, createBook, updateBook, deleteBook } = require('../controllers/booksController');

router.get('/', getAllBooks);
router.get('/:bookId', getBook);
router.post('/', createBook);
router.put('/:bookId', updateBook);
router.delete('/:bookId', deleteBook);

module.exports = router;
