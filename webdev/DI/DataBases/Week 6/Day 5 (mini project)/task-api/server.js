const express = require('express');
const tasksRoutes = require('./server/routes/tasksRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/tasks', tasksRoutes);

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
