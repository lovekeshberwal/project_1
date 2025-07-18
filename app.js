// app.js
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(3000);
// Update app.js with all routes and data
const express = require('express');
const app = express();

// Set view engine (assuming you're using EJS)
app.set('view engine', 'ejs');

// Sample navigation items data
const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
];

// Home route
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home', 
        siteName: 'Our Website',
        navItems: navItems,
        currentPath: req.path
    });
});