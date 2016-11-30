var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a json resource');
});


// Colleges
router.get('/colleges', (req, res, next) => {
  res.send('You Accessed, /api/colleges');
});

router.get('/colleges/:id', (req, res, next) => {
  res.send('You Accessed, /api/colleges/:id');
});


// Users
router.get('/users/', (req, res, next) => {
  res.send('You Accessed, /api/users');
});

router.get('/users/:id', (req, res, next) => {
  res.send('You Accessed, /api/users/:id');
});

module.exports = router;
