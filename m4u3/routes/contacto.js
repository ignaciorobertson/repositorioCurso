var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Contactanos para saber más:')
});

module.exports = router;