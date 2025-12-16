var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Acá vas a encontrar la información relevante del sitio y productos')
});

module.exports = router;