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

exports.Collection = {
  attributes: {
    name: Sequelize.TEXT,

    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  }
};

exports.User = {
  attributes: {
    
    username: {
      type: Sequelize.TEXT,
      unique: true,
    },

    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }  
  }
};

