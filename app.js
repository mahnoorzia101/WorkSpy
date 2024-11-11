const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./config/db');

const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Routes
const usersRoutes = require('./routes/usersRoutes');
// Add other routes: projectsRoutes, tasksRoutes, etc.
app.use('/users', usersRoutes);

// Home route
app.get('/', (req, res) => res.render('users/register'));

// Server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
