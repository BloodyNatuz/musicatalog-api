var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    res.render('docs', {
        sujet: 'Documentation',
        styleLink: "/style/style.css",
    })
});

router.post('/', function(req, res) {
    res.send('POST request on docs route');
});

module.exports = router;