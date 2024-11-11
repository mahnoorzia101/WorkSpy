const User = require('../models/usersModel');
const bcrypt = require('bcryptjs');

exports.registerUser = (req, res) => {
    const { first_name, last_name, email, password, role } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    User.createUser({ first_name, last_name, email, password: hashedPassword, role }, (err, result) => {
        if (err) return res.status(500).send(err);
        res.redirect('/users/login');
    });
};

// Login Controller, other methods...
