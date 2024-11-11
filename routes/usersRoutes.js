const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/register', (req, res) => res.render('users/register'));
router.post('/register', usersController.registerUser);
router.get('/login', (req, res) => res.render('users/login'));

// Other routes like /logout, /profile, etc.

module.exports = router;
