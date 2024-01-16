const express = require('express');
const app = express();
const docs = require('./routes/docs');
const contact = require('./routes/contact');
const hbs = require('hbs');
const port = 3000;

// View engine definition & views path
app.set('view engine', 'hbs');
app.set('views', './views/')

// Setting the public file for the whole project
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log("Home page get a /GET request.")
    res.render('index', {
        sujet: 'Accueil',
        styleLink: "/style/style.css",
        navHomeName: "Accueil",
        navDocsName: "Docs",
        navContactName: "Contact",
    });
});

// Handling Docs Route
app.use('/docs', docs);

// Handling Contact Route
app.use('/contact', contact);

app.listen(port, () => {
    console.log(`MusicatalogAPI listening on port ${port}`);
});