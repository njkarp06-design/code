const express = require('express');
const booksRoutes = require('./server/routes/booksRoutes');

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/api/books', booksRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
