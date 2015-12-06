var Sequelize = require('sequelize');
// var models = require('./models');
var url = process.env.DATABASE_URL || 'postgres://localhost:5432/instagram';

var db = new Sequelize(url);

// var Instagram = db.define('instagram', models.Instagram.attributes);

// var init = function() {
//   return db.sync()
//     .then(function() {
//       console.log('Database initiated');
//     });
// };
db
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });

module.exports = {
  sequelize: db,
  // Instagram: Instagram,
  // init: init
};



