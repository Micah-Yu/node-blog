var express = require('express');

var router = express.Router();

/* GET login page. */
router.get('/login', require('./admin/loginPage'));

router.post('/login', require('./admin/login'));

router.get('/user', require('./admin/userPage'));

router.get('/logout', require('./admin/logOut'))

router.get('/user-edit', require('./admin/userEditPage'));

router.post('/user-add', require('./admin/userEdit'))

router.post('/user-modify', require('./admin/user-modify'))

router.get('/delete', require('./admin/user-delete'))

router.get('/article', require('./admin/article'))

router.get('/article-edit', require('./admin/article-edit'))

router.post('/article-add', require('./admin/article-add'))

module.exports = router;
