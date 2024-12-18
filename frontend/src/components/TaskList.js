import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../api';
import './TaskList.css'
const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await getTasks();
        setTasks(response.data);
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div class="task-list-header">
            <h3 >Task List</h3>
            {tasks.map((task) => (
                <div key={task.id} className="card my-2">
                    <h5 class="card-header">{task.title}</h5>
                    <div class="card-body">
                        <p>{task.description}</p>
                        <div class="btn-container p-2">
                        <button className='btn btn-primary'> Mark as done</button>    
                        <button className="btn btn-danger delete-btn" onClick={() => handleDelete(task.id)}>
                            Delete
                        </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
