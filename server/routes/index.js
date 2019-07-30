const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).json({alive: true});
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;