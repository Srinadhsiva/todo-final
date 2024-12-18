import React, { useState } from 'react';
import { addTask } from '../api';
import './AddTask.css'
const AddTask = ({ refreshTasks }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTask({ title, description });
        setTitle('');
        setDescription('');
        refreshTasks();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add New Task</h3>
            <input
                className="form-control"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                className="form-control my-2"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <div class="add-task-btn"><button class="btn btn-primary ">Add</button></div>
            
        </form>
    );
};

export default AddTask;
