var router = require('express').Router();
var db = require('./database/interface');
var router = require('express').Router();

var users = {
  // TODO: send statuses

  signUp: function(req, res) {
    // TODO: add password/auth
    db.User.findOrCreate({
      where: {
        username: req.body.username
      }
    })
      .then(function(user) {
        res.status(200).json(user);
      })
      .catch(function(err) {
        console.log('Error occurred: ', err);
      });
  },
};

var collections = {

  getCollections: function(req, res) {
    var user = req.params.user;

    db.User.findOne({
      where: {
        username: user
      }
    })
      .then(function(user) {
        return user.getCollections();
      })
      .then(function(collections) {
        res.json(collections);
      })
      .catch(function(err) {
        console.log('Error: ', err);
      });
  },

  addCollection: function(req, res) {
    var user = req.body.user;
    var hashtag = req.body.hashtag;
    var dateStart = req.body.dateStart;
    var dateEnd = req.body.dateEnd;

    db.User.findOne({
      where: {
        username: user
      }
    })
      .then(function(user) {
        db.Collection.create({
          hashtag: hashtag,
          dateStart: dateStart,
          dateEnd: dateEnd,
          userId: user.id,
        })
          .then(function(collections) {
            res.json(collections);
            console.log('saved collection', collections)
          })
          .catch(function(err) {
            console.log('Error: ', err);
          });
      });
  }
};

router.get('/collections/:user', collections.getCollections);
router.post('/collections', collections.addCollection);
router.post('/users', users.signUp);

module.exports = router;
