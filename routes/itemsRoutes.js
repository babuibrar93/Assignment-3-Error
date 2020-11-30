var express = require('express');
var router = express.Router();
var Items = require("../models/Item");

router.get('/add', async function(req, res, next) {
  res.render("/Items/add");
 });

/* GET home page. */
router.get('/', async function(req, res, next) {
   let items = await Items.find();
  // console.log(items);
  res.render("Items/item-list", {items});
});


module.exports = router; 
