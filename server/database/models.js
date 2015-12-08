var Sequelize = require('sequelize');

exports.Collection = {
  attributes: {
    hashtag: Sequelize.TEXT,
    dateStart: Sequelize.INTEGER,
    dateEnd: Sequelize.INTEGER,

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

