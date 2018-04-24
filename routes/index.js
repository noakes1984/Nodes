var express = require('express');
var router = express.Router();
var cmd = require('node-command-line');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getinfo', function(req, res, next) {
  cmd.run('ssh root@167.99.150.246 lightning-cli getinfo')
    .then(function(response) {
      var info = JSON.parse(response.message);
      res.send(info);
    });
});



module.exports = router;
