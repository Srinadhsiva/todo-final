import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css';

function App() {
    return (
        <div className="container mt-4">
            <h1 class="top-head">To-Do App</h1>
            <AddTask refreshTasks={() => window.location.reload()} />
            <TaskList />
        </div>
    );
}

export default App;
