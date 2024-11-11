const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  // use your XAMPP MySQL password if any
    database: 'project_management'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
});

module.exports = db;
