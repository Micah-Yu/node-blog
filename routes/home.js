var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', require('./home/index'));

router.get('/article', require('./home/article'))

router.post('/comment', require('./home/comment'))

module.exports = router;
