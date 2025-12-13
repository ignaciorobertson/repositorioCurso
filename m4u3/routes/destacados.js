var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Acá vas a encontrar los productos destacados de la tienda')
});

module.exports = router;