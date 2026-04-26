const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../../tasks.json');

const readTasks = async () => {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
};

const writeTasks = async (tasks) => {
    await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
};

const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await readTasks();
        res.json(tasks);
    } catch (err) {
        next(err);
    }
};

const getTaskById = async (req, res, next) => {
    try {
        const tasks = await readTasks();
        const task = tasks.find(t => t.id === parseInt(req.params.id));
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json(task);
    } catch (err) {
        next(err);
    }
};

const createTask = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        if (!title) return res.status(400).json({ error: 'Title is required' });

        const tasks = await readTasks();
        const newTask = {
            id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
            title,
            description: description || '',
            completed: false
        };

        tasks.push(newTask);
        await writeTasks(tasks);
        res.status(201).json(newTask);
    } catch (err) {
        next(err);
    }
};

const updateTask = async (req, res, next) => {
    try {
        const { title, description, completed } = req.body;
        if (!title && description === undefined && completed === undefined) {
            return res.status(400).json({ error: 'Provide at least one field to update' });
        }

        const tasks = await readTasks();
        const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
        if (index === -1) return res.status(404).json({ error: 'Task not found' });

        tasks[index] = { ...tasks[index], ...req.body };
        await writeTasks(tasks);
        res.json(tasks[index]);
    } catch (err) {
        next(err);
    }
};

const deleteTask = async (req, res, next) => {
    try {
        const tasks = await readTasks();
        const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
        if (index === -1) return res.status(404).json({ error: 'Task not found' });

        tasks.splice(index, 1);
        await writeTasks(tasks);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        next(err);
    }
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
