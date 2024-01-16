const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3000;

// View engine definition & views path
app.set('view engine', 'hbs');
app.set('views', './views/')

// Setting the public file
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log("Home page get a /GET request.")
    res.render('index', {
        sujet: 'Accueil',
        styleLink: "/style/style.css"
    });
});

app.listen(port, () => {
    console.log(`MusicatalogAPI listening on port ${port}`);
});