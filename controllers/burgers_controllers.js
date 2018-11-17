//Sets up your dependencies 
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

//this sets up the get on the "/" page and returns all of the responses
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//posts new burger row to the table
router.post("/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect("/");
  });
});



//***NOT WORKING YET**
//this should create our condition of id = req.params.id
router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(condition, function(result) {
    // res.redirect("/")
    res.json({
      msg: "devoured burger",
    })
  });
});

// Export routes for server.js to use.
module.exports = router;
