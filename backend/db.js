const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',         // Your MySQL username
    password: 'Srinadh1234@',         // Your MySQL password
    database: 'todo_app', // Database name
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Connected to the database');
    }
});

module.exports = db;
