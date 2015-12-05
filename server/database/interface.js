var Sequelize = require('sequelize');
var models = require('./models');
var url = process.env.DATABASE_URL || 'postgres://localhost:5432/instagram';


var db = new Sequelize(url, {ssl:true});
// db = new Sequelize('database', 'username', 'password', {
//       dialect: "postgres", 
//       // host: "amazon...",
//       port: "5432", 
//       ssl: true,
//       sync:{schema:schema}
//     });

var Instagram = db.define('instagram', models.Instagram.attributes);

var init = function() {
  return db.sync()
    .then(function() {
      console.log('Database initiated');
    });
};

module.exports = {
  sequelize: db,
  Instagram: Instagram,
  init: init
};
