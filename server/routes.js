var router = require('express').Router();

var db = require('./database/interface');
var router = require('express').Router();

var instagrams = {

  addInstagram: function(req, res) {
    console.log('req', req.body)
  },

  getAllInstagrams: function(req, res) {
    db.Instagram.findAll({where: {hashtag: req.params.hashtag}})
      .then(function(instagrams) {
        res.json(instagram);
      })
      .catch(function(err) {
        console.error(err);
        res.sendStatus(500);
      });
  }

};

router.post('/instagrams', instagrams.addInstagram);
router.get('/instagrams', instagrams.getAllInstagrams);

module.exports = router;
