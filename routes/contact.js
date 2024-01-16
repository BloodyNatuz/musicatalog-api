var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    res.render('contact', {
        sujet: 'Contact',
        styleLink: "/style/style.css",
    })
});

router.post('/', function(req, res) {
    res.send('POST request on contact route');
});

module.exports = router;