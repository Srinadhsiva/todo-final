const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Get all tasks
app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Add a task
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    db.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Task added successfully' });
    });
});

// Update a task
app.put('/tasks/:id', (req, res) => {
    const { title, description, status } = req.body;
    db.query('UPDATE tasks SET title=?, description=?, status=? WHERE id=?', [title, description, status, req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Task updated successfully' });
    });
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    db.query('DELETE FROM tasks WHERE id=?', [req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Task deleted successfully' });
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
