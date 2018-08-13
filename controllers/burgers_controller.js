var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get('/', function (req, res) {
  res.redirect('/burgers');
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  burger.createOne(["burger_name","devoured"], [
    req.body.burger_name, req.body.devoured], function() {
    // Send back the ID of the new burger
    res.redirect("/burgers");
  });
});

router.put("/burgers/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({ devored: req.body.devoured }, condition, function () { res.redirect("/burgers");
  });
});

// Export routes for server.js to use.
module.exports = router;
