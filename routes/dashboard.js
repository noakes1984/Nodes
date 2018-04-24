var express = require('express');
var router = express.Router();
var cmd = require('node-command-line');

/* GET home page. */
router.get('/', function(req, res, next) {
  cmd.run('ssh root@167.99.150.246 lightning-cli getinfo')
    .then(function(response) {
      var nodeInfo = JSON.parse(response.message);
      // res.send(nodeInfo);

      res.render('dashboard', {
        title: 'Dashboard',
        nodeInfo: nodeInfo
      });
    });

});

router.get('/getinfo', function(req, res, next) {
  cmd.run('ssh root@167.99.150.246 lightning-cli getinfo')
    .then(function(response) {
      var info = JSON.parse(response.message);
      res.send(info);
    });
});

router.get('/list-funds', function(req, res, next) {
  cmd.run('ssh root@167.99.150.246 lightning-cli listfunds')
    .then(function(response) {
      var funds = JSON.parse(response.message);
      res.render('list-funds', {
        funds: funds
      });
    });
});

router.get('/list-peers', function(req, res, next) {
  cmd.run('ssh root@167.99.150.246 lightning-cli listpeers')
    .then(function(response) {
      var peers = JSON.parse(response.message);
      res.render('list-peers', {
        peers: peers
      });
    });
});




module.exports = router;
