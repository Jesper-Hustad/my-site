// set up dependencies
var express = require('express');
var router = express.Router();

// setup routing
router.get('/', function(req, res, next) {
  res.render('main', {})
})

router.get('/projects', function(req, res, next) {
  res.render('projects', {})
})

router.get('/page/:name', function(req, res, next) {
  console.log(req.params.name)
  res.render(req.params.name, {})
})

// export the module
module.exports = router;
