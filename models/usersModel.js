const db = require('../config/db');

const User = {
    createUser: (data, callback) => {
        const query = `INSERT INTO users SET ?`;
        db.query(query, data, callback);
    },
    findUserByEmail: (email, callback) => {
        const query = `SELECT * FROM users WHERE email = ?`;
        db.query(query, [email], callback);
    },
    // Other methods like updateUser, deleteUser, etc.
};

module.exports = User;
