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
