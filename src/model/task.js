module.exports = function () {

  var db = require('./../libs/db-connection')();
  console.log('Datos task:'+ db)
  var Schema = require('mongoose').Schema;

  var Task = Schema({
    title: String,
    description: String,
    status: Boolean
  });

  return db.model('tasks',Task);

}
