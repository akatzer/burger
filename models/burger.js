// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {

  //runs the table "burgers" through our burger controller
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  //runs column, value and the callback throug the burger controller
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  //***NOT WORKING***
  //Supposed to take the condition from the ORM and run it through the burger controller.
  updateOne: function (condition, cb) {
    orm.updateOne(condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
