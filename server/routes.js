var router = require('express').Router();

var db = require('./database/interface');
var router = require('express').Router();


var users = {
  
  signUp: function(req, res) {
    // TODO: add password/auth
    db.User.findOrCreate({where: {username: req.body.username}})
      .then(function(user) {
        res.status(200).json(user);
      })
      .catch(function(err) {
        console.log('Error occurred: ', err);
      });
  },
};

var instagrams = {

  addInstagram: function(req, res) {
    console.log('req', req.body)
  },

  getAllInstagrams: function(req, res) {
    db.Instagram.findAll({where: {hashtag: req.params.hashtag}})
      .then(function(instagrams) {
        res.json(instagram);
      })
      .error(function(err) {
        console.error(err);
        res.sendStatus(500);
      });
  }

};

// get all collections
// get all instagrams inside collection
// post collection
// post all instagrams inside collection
// post user
// get user
router.post('/users', users.signUp);
router.post('/instagrams', instagrams.addInstagram);
router.get('/instagrams', instagrams.getAllInstagrams);

module.exports = router;
