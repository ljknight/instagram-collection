var Sequelize = require('sequelize');

exports.Instagram = {

  attributes: {

    hashtag: Sequelize.TEXT,
    date: Sequelize.INTEGER,
    contentURL: Sequelize.TEXT,
    permalink: Sequelize.TEXT,

    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }

  }

};

sequelize
  .sync({ force: true })
  .then(function(err) {
    console.log('It worked!');
  }, function (err) { 
    console.log('An error occurred while creating the table:', err);
  });
