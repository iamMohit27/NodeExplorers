var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Node Explorers' });
});

router.get('/', (req, res, next) => {
  res.render('Sample Space for JSON API')
})

module.exports = router;
